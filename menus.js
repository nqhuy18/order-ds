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

    // BLEND 1:1 (ROBUSTA + ARABICA)
    { name: "Đen - 35k", price: 35000 },
    { name: "Nâu - 40k", price: 40000 },
    { name: "Bạc Xỉu - 45k", price: 45000 },
    { name: "Cà Phê Kem Mặn - 45k", price: 45000 },

    // ARABICA - HONEY
    { name: "Espresso (Honey) - 45k", price: 45000 },
    { name: "Americano (Honey) - 45k", price: 45000 },
    { name: "Americano Bưởi - 50k", price: 50000 },
    { name: "Americano Đào - 50k", price: 50000 },
    { name: "Americano Chanh Leo - 50k", price: 50000 },
    { name: "Americano Mơ Đào - 50k", price: 50000 },
    { name: "Latte (Honey) - 50k", price: 50000 },
    { name: "Cappuccino (Honey) - 50k", price: 50000 },

    // ARABICA - NATURAL
    { name: "Espresso (Natural) - 60k", price: 60000 },
    { name: "Americano (Natural) - 60k", price: 60000 },
    { name: "Latte (Natural) - 70k", price: 70000 },
    { name: "Cappuccino (Natural) - 70k", price: 70000 },
    { name: "V60 - 95k", price: 95000 },

    // COLD BREW & CASCARA
    { name: "Cold Brew Nguyên Vị - 35k", price: 35000 },
    { name: "Cold Brew Bưởi - 40k", price: 40000 },
    { name: "Cold Brew Đào - 40k", price: 40000 },
    { name: "Cold Brew Chanh Leo - 40k", price: 40000 },
    { name: "Cold Brew Mơ Đào - 40k", price: 40000 },
    { name: "Trà Cascara (Ấm) - 55k", price: 55000 },

    // SHAN TUYẾT & NON-COFFEE
    { name: "Shan Nguyên Vị - 35k", price: 35000 },
    { name: "Shan Mật Ong - 40k", price: 40000 },
    { name: "Shan Kem Mặn - 45k", price: 45000 },
    { name: "Hồng Trà Kem Mặn - 50k", price: 50000 },
    { name: "Trà Sữa Gạo - 55k", price: 55000 },
    { name: "Cacao Sữa Tươi - 40k", price: 40000 },
    { name: "Cacao Kem Béo - 45k", price: 45000 },
    { name: "Sữa Chua Cà Phê - 40k", price: 40000 },
    { name: "Sữa Chua Trân Châu - 40k", price: 40000 },
    { name: "Chanh Tươi - 35k", price: 35000 },
    { name: "Chanh Mật Ong - 40k", price: 40000 },
    { name: "Cam Tươi - 45k", price: 45000 },
    { name: "Cam Mật Ong - 50k", price: 50000 }
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
    "Thùy Dương": ["Latte (Honey) - 50k"],
    "Hà Thư": ["Latte (Honey) - 50k"],
    "Hoàng Anh": ["Americano (Honey) - 45k"],
    "Hữu Dũng": ["Latte (Honey) - 50k", "Cold Brew Bưởi - 40k", "Cold Brew Đào - 40k", "Cold Brew Mơ Đào - 40k", "Cold Brew Nguyên Vị - 35k"],
    "Hồ Sang": ["Shan Nguyên Vị - 35k", "Latte (Honey) - 50k"],
    "Tuấn Thành": ["Latte (Honey) - 50k", "Cold Brew Bưởi - 40k", "Cold Brew Đào - 40k", "Cold Brew Mơ Đào - 40k", "Cold Brew Nguyên Vị - 35k"],
    "Phạm Duy": ["Latte (Honey) - 50k", "Cold Brew Bưởi - 40k", "Cold Brew Đào - 40k", "Cold Brew Mơ Đào - 40k", "Cold Brew Nguyên Vị - 35k"],
    "Việt Dũng": ["Latte (Honey) - 50k", "Cold Brew Bưởi - 40k", "Cold Brew Đào - 40k", "Cold Brew Mơ Đào - 40k", "Cold Brew Nguyên Vị - 35k"],
    "Bùi Loan": ["Latte (Honey) - 50k", "Cold Brew Bưởi - 40k", "Cold Brew Đào - 40k", "Cold Brew Mơ Đào - 40k", "Cold Brew Nguyên Vị - 35k"],
    "Dương Lan": ["Latte (Honey) - 50k", "Bạc Xỉu - 45k"],
    "Quốc Huy": ["Latte (Honey) - 50k", "Cold Brew Bưởi - 40k", "Cold Brew Đào - 40k", "Cold Brew Mơ Đào - 40k", "Cold Brew Nguyên Vị - 35k"]
  }
};