function highlightCells() {
  const sheetname = "2026";
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  const lastColumn = sheet.getLastColumn();

  const data_start_row_idx = 2;
  const data_start_col_idx = 5;
  const data_end_col_idx = lastColumn - 4;
  const data_bk_start_row_idx = 102;
  const number_members = 11; // = number of rows

  const outdate_limit_min = 3;
  const outdate_limit_red = 10;

  const titleSourceRange = sheet.getRange(data_start_row_idx, 1, number_members, 1);
  const titleDestRange = sheet.getRange(data_bk_start_row_idx, 1, number_members, 1);
  titleSourceRange.copyTo(titleDestRange);

  const range = sheet.getRange(data_start_row_idx, data_start_col_idx, number_members, data_end_col_idx); // Vùng dữ liệu chính
  const data = range.getValues();
  const dates = sheet.getRange(1, data_start_col_idx, 1, data_end_col_idx).getValues()[0]; // Ngày trên hàng đầu tiên
  const backgrounds = range.getBackgrounds();

  // Vùng dữ liệu backup (cách 100 dòng phía dưới)
  const backupRange = sheet.getRange(data_bk_start_row_idx, data_start_col_idx, number_members, data_end_col_idx); // Backup ở hàng 102
  let backupData = backupRange.getValues(); // Lấy giá trị backup

  const today = new Date();

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const cellValue = data[i][j];
      const dateValue = dates[j];

      if (
        cellValue !== "" &&
        !isNaN(cellValue) &&
        cellValue !== 0 &&
        dateValue
      ) {
        const outdate = (today - new Date(dateValue)) / (1000 * 60 * 60 * 24);

        if (outdate >= outdate_limit_min) {
          // Nếu ô hiện tại có nền đỏ hoặc đen, sử dụng giá trị gốc từ backup
          if (backgrounds[i][j] === "#ff0000" || backgrounds[i][j] === "#000000") {
            if (backupData[i][j] === "" || backupData[i][j] === 0) {
              backupData[i][j] = cellValue; // Lưu giá trị gốc vào backup nếu chưa có
            }
            const originalValue = backupData[i][j];
            data[i][j] = roundToNearestHundred(originalValue * Math.pow(1 + 0.01, outdate)); // Tính giá trị mới
          } else {
            // Nếu nền không đỏ hoặc đen, vẫn cập nhật backup nếu chưa có
            if (backupData[i][j] === "" || backupData[i][j] === 0) {
              backupData[i][j] = cellValue;
            }
          }
        }

        if (outdate >= outdate_limit_min) {
          if (backgrounds[i][j] === "#fff2cc") {
            range.getCell(i + 1, j + 1).setBackground("#cfe2f3");
            range.getCell(i + 1, j + 1).setFontColor("#000000");
          }
        }

        // Tô màu ô theo điều kiện
        if (outdate >= outdate_limit_min && outdate < outdate_limit_red) {
          if (backgrounds[i][j] === "#ffffff") {
            range.getCell(i + 1, j + 1).setBackground("#ff0000"); // Tô đỏ
          }
        } else if (outdate >= outdate_limit_red) {
          if (
            backgrounds[i][j] === "#ffffff" ||
            backgrounds[i][j] === "#ff0000"
          ) {
            range.getCell(i + 1, j + 1).setBackground("#000000"); // Tô đen
            range.getCell(i + 1, j + 1).setFontColor("#ffffff");
          }
        }
      } else if (cellValue == "" || isNaN(cellValue)) {
        range.getCell(i + 1, j + 1).setBackground("#ffffff"); // Tô trắng
      }
    }
  }

  // Ghi lại giá trị backup và giá trị chính
  range.setValues(data);
  backupRange.setValues(backupData);
}

function roundToNearestHundred(value) {
  return Math.round(value / 100) * 100;
}

// Function parse Json from App Order-ds
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("2026") || ss.getSheets()[0]; 
    
    // KHÓA CỨNG: Chỉ đọc Cột A từ dòng 1 đến dòng 16
    const MAX_ROW = 16; 
    const colA = sheet.getRange(1, 1, MAX_ROW, 1).getValues().map(r => r[0].toString().trim());
    
    const firstMemberRow = colA.indexOf("Thùy Dương") + 1; 
    const dateRow = firstMemberRow > 1 ? firstMemberRow - 1 : 1;
    
    const maxCols = sheet.getMaxColumns();
    const dateRowValues = sheet.getRange(dateRow, 1, 1, maxCols).getValues()[0];
    
    let lastFilledDateCol = 1;
    for (let c = maxCols - 1; c >= 1; c--) {
      if (dateRowValues[c] !== "" && dateRowValues[c] !== null) {
        lastFilledDateCol = c + 1;
        break;
      }
    }
    const nextCol = lastFilledDateCol + 1;
    
    sheet.getRange(dateRow, nextCol).setValue(data.date);
    
    for (let i = 0; i < MAX_ROW; i++) {
      let name = colA[i];
      let row = i + 1;
      
      if (data.orders && data.orders[name] !== undefined) {
        sheet.getRange(row, nextCol).setValue(data.orders[name]);
      } else if (name === "Thực đơn") {
        sheet.getRange(row, nextCol).setValue(data.menu);
      } else if (name === "Người chi tiền") {
        sheet.getRange(row, nextCol).setValue(data.payer);
      } else if (name === "Tổng tiền") { 
        // ĐIỀN TỔNG TIỀN VÀO DÒNG 13 (TỔNG TIỀN)
        sheet.getRange(row, nextCol).setValue(data.totalPrice);
      }
    }

    if (typeof highlightCells === "function") {
      highlightCells();
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", col: nextCol }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", msg: err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
