// Danh sách thành viên nhóm
const MEMBERS = [
  "Thùy Dương", "Hà Thư", "Hoàng Anh", "Hữu Dũng", "Hồ Sang", 
  "Tuấn Thành", "Phạm Duy", "Việt Dũng", "Bùi Loan", "Dương Lan", "Quốc Huy"
];

// Danh sách Menu theo từng quán (Key của object sẽ được gửi thẳng lên dòng "Thực đơn" trên Sheet)
const MENUS = {
  "TWB": [
    { name: "-- Không gọi --", price: 0 },
    
    // CÀ PHÊ PHIN
    { name: "Cà Phê Chanh Vàng (M) - 49k", price: 49000 },
    { name: "Cà Phê Cam Đào (M) - 59k", price: 59000 },
    { name: "Bạc Xỉu Kem Xốp (M) - 49k", price: 49000 },
    { name: "Bạc Xỉu Kem Xốp (L) - 59k", price: 59000 },
    { name: "Cà Phê Sữa Dừa (M) - 49k", price: 49000 },
    { name: "Cà Phê Sữa Dừa (L) - 59k", price: 59000 },
    { name: "Phin Đen / Nâu (S) - 29k", price: 29000 },
    { name: "Phin Đen / Nâu (M) - 39k", price: 39000 },
    { name: "Phin Đen / Nâu (L) - 45k", price: 45000 },

    // TRÀ
    { name: "Oolong Rang Sữa (M) - 59k", price: 59000 },
    { name: "Hồng Trà Thạch Đào (M) - 59k", price: 59000 },
    { name: "Trà Sen Phú Quý (M) - 59k", price: 59000 },
    { name: "Hibiscus Cam Đào (M) - 59k", price: 59000 },
    { name: "Matcha Sữa Nướng (M) - 59k", price: 59000 },
    { name: "Hồng Trà Sữa (M) - 59k", price: 59000 },
    { name: "Matcha Sữa Tươi (M) - 59k", price: 59000 },
    { name: "Trà Anh Buổi Sáng (M) - 50k", price: 50000 },

    // CÀ PHÊ Ý
    { name: "Espresso (S) - 35k", price: 35000 },
    { name: "Espresso (M) - 45k", price: 45000 },
    { name: "Americano (S) - 45k", price: 45000 },
    { name: "Americano (M) - 49k", price: 49000 },
    { name: "Americano (L) - 55k", price: 55000 },
    { name: "Cappuccino (S) - 55k", price: 55000 },
    { name: "Cappuccino (M) - 65k", price: 65000 },
    { name: "Cappuccino (L) - 69k", price: 69000 },
    { name: "Latte (S) - 55k", price: 55000 },
    { name: "Latte (M) - 65k", price: 65000 },
    { name: "Latte (L) - 69k", price: 69000 },
    { name: "Mocha (S) - 65k", price: 65000 },
    { name: "Mocha (M) - 75k", price: 75000 },
    { name: "Mocha (L) - 79k", price: 79000 },
    { name: "Brown Sugar Latte (M) - 65k", price: 65000 },

    // 5 LOẠI KEM CHEESE
    { name: "Oolong 5 Loại Kem Cheese (M) - 65k", price: 65000 },
    { name: "Cà Phê 5 Loại Kem Cheese (M) - 59k", price: 59000 },
    { name: "Cà Phê 5 Loại Kem Cheese (L/Nóng) - 69k", price: 69000 },
    { name: "Cà Phê Kem Muối (M) - 59k", price: 59000 },
    { name: "Cà Phê Kem Muối (L/Nóng) - 69k", price: 69000 },
    { name: "Matcha 5 Loại Kem Cheese (M) - 58k", price: 58000 },
    { name: "Matcha 5 Loại Kem Cheese (L/Nóng) - 69k", price: 69000 },
    { name: "Sô Cô La 5 Loại Kem Cheese (M) - 59k", price: 59000 },
    { name: "Sô Cô La 5 Loại Kem Cheese (L/Nóng) - 69k", price: 69000 },

    // SÔ CÔ LA
    { name: "Sô Cô La Nguyên Bản (M) - 65k", price: 65000 }
  ],

  "Aribaca": [
    { name: "-- Không gọi --", price: 0 },
    { name: "Cà phê Nâu / Đen - 30k", price: 30000 },
    { name: "Bạc xỉu - 35k", price: 35000 },
    { name: "Trà đào cam sả - 40k", price: 40000 },
    { name: "Matcha Latte - 45k", price: 45000 }
  ]
};