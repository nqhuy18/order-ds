// Danh sách thành viên nhóm
const MEMBERS = [
  "Thùy Dương", "Hà Thư", "Hoàng Anh", "Hữu Dũng", "Hồ Sang", 
  "Tuấn Thành", "Phạm Duy", "Việt Dũng", "Bùi Loan", "Dương Lan", "Quốc Huy"
];

// Danh sách Menu theo từng quán (Key của object sẽ được gửi thẳng lên dòng "Thực đơn" trên Sheet)
const MENUS = {
  "TWB": [
    { name: "-- Không gọi --", price: 0 },
    
    // CÀ PHÊ VIỆT
    { name: "Phin Đen / Phin Nâu (S) - 29k", price: 29000 },
    { name: "Phin Đen / Phin Nâu (M) - 39k", price: 39000 },
    { name: "Phin Đen / Phin Nâu (L) - 45k", price: 45000 },
    { name: "Bạc Xỉu Kem Xốp (M) - 49k", price: 49000 },
    { name: "Bạc Xỉu Kem Xốp (L) - 59k", price: 59000 },
    { name: "Cà Phê Chanh Mật Ong (M) - 49k", price: 49000 },
    { name: "Phin Muối Kem Quế (M) - 55k", price: 55000 },

    // CÀ PHÊ Ý
    { name: "Espresso (S) - 35k", price: 35000 },
    { name: "Espresso (M) - 45k", price: 45000 },
    { name: "Americano (S) - 39k", price: 39000 },
    { name: "Americano (M) - 49k", price: 49000 },
    { name: "Americano (L) - 55k", price: 55000 },
    { name: "Cappuccino (S) - 55k", price: 55000 },
    { name: "Cappuccino (M) - 65k", price: 65000 },
    { name: "Cappuccino (L) - 69k", price: 69000 },
    { name: "Latte (S) - 55k", price: 55000 },
    { name: "Latte (M) - 65k", price: 65000 },
    { name: "Latte (L) - 69k", price: 69000 },
    { name: "Latte Yến Mạch (S) - 55k", price: 55000 },
    { name: "Latte Yến Mạch (M) - 65k", price: 65000 },
    { name: "Latte Yến Mạch (L) - 69k", price: 69000 },
    { name: "Mocha (S) - 65k", price: 65000 },
    { name: "Mocha (M) - 75k", price: 75000 },
    { name: "Mocha (L) - 79k", price: 79000 },

    // COLD BREW
    { name: "Cold Brew Nguyên Bản (M) - 45k", price: 45000 },
    { name: "Cold Brew Nguyên Bản (L) - 55k", price: 55000 },
    { name: "Cold Brew Vải Hồng (M) - 55k", price: 55000 },
    { name: "Cold Brew Vải Hồng (L) - 65k", price: 65000 },
    { name: "Cold Brew Cam Mật Ong (M) - 55k", price: 55000 },
    { name: "Cold Brew Cam Mật Ong (L) - 65k", price: 65000 },
    { name: "Cold Brew Bưởi Mật Ong (M) - 55k", price: 55000 },
    { name: "Cold Brew Bưởi Mật Ong (L) - 65k", price: 65000 },

    // TRÀ HOA QUẢ
    { name: "Hồng Trà Thạch Đào - 59k", price: 59000 },
    { name: "Hibiscus Cam Đào - 59k", price: 59000 },
    { name: "Hibiscus Xoài Đào - 59k", price: 59000 },
    { name: "Hibiscus Vải Hồng - 59k", price: 59000 },
    { name: "Nhài Bưởi Mật Ong - 59k", price: 59000 },
    { name: "Trà Sen Phú Quý - 59k", price: 59000 },
    { name: "Cam Gừng Mật Ong - 59k", price: 59000 },
    { name: "Trà Gạo Lứt Đậu Đen - 59k", price: 59000 },

    // TRÀ SỮA
    { name: "Oolong Rang Sữa - 59k", price: 59000 },
    { name: "Hồng Trà Sữa - 59k", price: 59000 },
    { name: "Nhài Sữa - 59k", price: 59000 },

    // MATCHA
    { name: "Matcha Latte - 59k", price: 59000 },
    { name: "Matcha Yến Mạch Mật Ong - 59k", price: 59000 },
    { name: "Matcha Xoài Yến Mạch - 59k", price: 59000 },

    // 5 LOẠI KEM CHEESE
    { name: "Cà Phê 5 Loại Kem Cheese (M) - 59k", price: 59000 },
    { name: "Cà Phê 5 Loại Kem Cheese (L) - 69k", price: 69000 },
    { name: "Matcha 5 Loại Kem Cheese (M) - 59k", price: 59000 },
    { name: "Matcha 5 Loại Kem Cheese (L) - 69k", price: 69000 },
    { name: "Sô Cô La 5 Loại Kem Cheese (M) - 59k", price: 59000 },
    { name: "Sô Cô La 5 Loại Kem Cheese (L) - 69k", price: 69000 },
    { name: "Trà Xoài 5 Loại Kem Cheese - 65k", price: 65000 },
    { name: "Oolong 5 Loại Kem Cheese - 65k", price: 65000 },

    // SỮA CHUA
    { name: "Sữa Chua Vải Hồng - 65k", price: 65000 },
    { name: "Sữa Chua Ngọc Trai - 65k", price: 65000 },
    { name: "Sữa Chua Việt Quất - 65k", price: 65000 },

    // SÔ CÔ LA
    { name: "Chocolate Cookies N' Cream - 65k", price: 65000 },
    { name: "Sô Cô La Nguyên Bản - 65k", price: 65000 },

    // TOPPING (Tùy chọn gọi thêm)
    { name: "Topping - Trân Châu Đen (8k)", price: 8000 },
    { name: "Topping - Trân Châu Ngọc Trai (8k)", price: 8000 },
    { name: "Topping - Thạch Hồng Trà (8k)", price: 8000 },
    { name: "Topping - Thạch Đào (8k)", price: 8000 },
    { name: "Topping - Đào Miếng (8k)", price: 8000 },
    { name: "Topping - Hạt Sen (8k)", price: 8000 },
    { name: "Topping - Foam Cheese (8k)", price: 8000 },
    { name: "Topping - Foam Sữa (8k)", price: 8000 },
    { name: "Topping - Sốt Socola (8k)", price: 8000 },
    { name: "Topping - Sữa Đặc (8k)", price: 8000 },
    { name: "Topping - Sữa Tươi (8k)", price: 8000 },
    { name: "Topping - Sữa Yến Mạch (8k)", price: 8000 }
  ],

  "Aribaca": [
    { name: "-- Không gọi --", price: 0 },
    { name: "Cà phê Nâu / Đen - 30k", price: 30000 },
    { name: "Bạc xỉu - 35k", price: 35000 },
    { name: "Trà đào cam sả - 40k", price: 40000 },
    { name: "Matcha Latte - 45k", price: 45000 }
  ]
};

// Danh sách món đề xuất mặc định ban đầu cho từng người theo từng quán
const DEFAULT_FAVORITES = {
  "TWB": {
    "Thùy Dương": ["Latte (S) - 55k"],
    "Hà Thư": ["Latte (S) - 55k"],
    "Hoàng Anh": ["Americano (M) - 49k"],
    "Hữu Dũng": ["Oolong Rang Sữa - 59k", "Latte (S) - 55k", "Cà Phê 5 Loại Kem Cheese (M) - 59k"],
    "Hồ Sang": ["Americano (M) - 49k", "Latte (S) - 55k"],
    "Tuấn Thành": ["Americano (M) - 49k", "Latte (S) - 55k"],
    "Phạm Duy": ["Americano (M) - 49k", "Latte (S) - 55k"],
    "Việt Dũng": ["Americano (M) - 49k", "Latte (S) - 55k"],
    "Bùi Loan": ["Americano (M) - 49k", "Latte (S) - 55k"],
    "Dương Lan": ["Latte (S) - 55k", "Bạc xỉu Kem Xốp (M) - 49k"],
    "Quốc Huy": ["Americano (M) - 49k", "Latte (S) - 55k"]
  },
  "Aribaca": {
    "Thùy Dương": ["Bạc xỉu - 35k"],
    "Quốc Huy": ["Cà phê Nâu / Đen - 30k"]
  }
};