function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 1. KHÓA CỨNG: Chỉ đọc Cột A từ dòng 1 đến dòng 16 (Tuyệt đối không chạm xuống dưới dòng 16)
    const MAX_ROW = 16; 
    const colA = sheet.getRange(1, 1, MAX_ROW, 1).getValues().map(r => r[0].toString().trim());
    
    // Tìm dòng Ngày tháng (nằm ngay trên dòng "Thùy Dương")
    const firstMemberRow = colA.indexOf("Thùy Dương") + 1; 
    const dateRow = firstMemberRow > 1 ? firstMemberRow - 1 : 1;
    
    // 2. TÌM CỘT TRỐNG TIẾP THEO (VD: Cột JM ngay sau cột JL 30/10/2026)
    // Đọc toàn bộ dòng Ngày tháng và quét ngược từ phải sang trái để tìm cột cuối cùng có điền ngày
    const maxCols = sheet.getMaxColumns();
    const dateRowValues = sheet.getRange(dateRow, 1, 1, maxCols).getValues()[0];
    
    let lastFilledDateCol = 1;
    for (let c = maxCols - 1; c >= 1; c--) {
      if (dateRowValues[c] !== "" && dateRowValues[c] !== null) {
        lastFilledDateCol = c + 1; // Đổi từ index mảng (0-based) sang số cột Excel (1-based)
        break;
      }
    }
    const nextCol = lastFilledDateCol + 1; // Cột trống ngay kế tiếp
    
    // 3. Điền ngày tháng vào cột mới
    sheet.getRange(dateRow, nextCol).setValue(data.date);
    
    // 4. Chỉ quét trong phạm vi từ dòng 1 đến dòng 16 để điền tiền
    for (let i = 0; i < MAX_ROW; i++) {
      let name = colA[i];
      let row = i + 1;
      
      if (data.orders && data.orders[name] !== undefined) {
        sheet.getRange(row, nextCol).setValue(data.orders[name]);
      } else if (name === "Thực đơn") {
        sheet.getRange(row, nextCol).setValue(data.menu);
      } else if (name === "Người chi tiền") {
        sheet.getRange(row, nextCol).setValue(data.payer);
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "ok", col: nextCol }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", msg: err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}