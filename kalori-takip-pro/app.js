// === 75 ADET YERLEŞİK YÜKSEK PROTEİNLİ PREMİUM MENÜ ===
const defaultMenus = [
    // === KAHVALTI VE LAVAŞ MENÜLERİ (1-20) ===
    { id: 1, baslik: "Fit Kahvaltı Tabağı", icerik: "2 haşlanmış yumurta, avokado, peynir, yeşillik.", kalori: 350, gorsel: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=400" },
    { id: 2, baslik: "Sütlü Yulaf Kasesi", icerik: "40g yulaf, 200ml yarım yağlı süt, yarım muz, tarçın.", kalori: 320, gorsel: "https://images.unsplash.com/photo-1517881917431-134888973554?q=80&w=400" },
    { id: 3, baslik: "Labneli Yumurtalı Sandviç", icerik: "2 dilim tam buğday ekmeği, 1 yumurta, 2 yk light labne, salatalık.", kalori: 295, gorsel: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=400" },
    { id: 4, baslik: "Yoğurtlu Meyveli Kase", icerik: "200g yoğurt, 20g yulaf, 1 küçük elma, tarçın.", kalori: 260, gorsel: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400" },
    { id: 5, baslik: "Yulaflı Omlet", icerik: "2 yumurta, 3 yemek kaşığı yulaf, yeşillik.", kalori: 280, gorsel: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=400" },
    { id: 6, baslik: "Peynirli Tost", icerik: "2 dilim tam buğday ekmeği, 40g beyaz peynir/lor, domates.", kalori: 300, gorsel: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=400" },
    { id: 7, baslik: "Menemen", icerik: "2 yumurta, domates, biber, 1 çay kaşığı zeytinyağı.", kalori: 250, gorsel: "https://images.unsplash.com/photo-1590412200988-a436bb7050a4?q=80&w=400" },
    { id: 8, baslik: "Lor Peynirli Kahvaltı Tabağı", icerik: "100g lor peyniri, domates, salatalık, 1 dilim tb ekmeği.", kalori: 230, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 9, baslik: "Muzlu Yoğurt", icerik: "200g yoğurt, yarım muz, tarçın.", kalori: 220, gorsel: "https://images.unsplash.com/photo-1571244856341-4f3dd95db33e?q=80&w=400" },
    { id: 10, baslik: "Fit Tost + Ayran", icerik: "Tb tost (1 dilim kaşar + 2 dilim ekmek), 1 bardak ayran.", kalori: 340, gorsel: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=400" },
    { id: 11, baslik: "Yumurtalı Lavaş Dürüm", icerik: "1 tam buğday lavaş, 2 haşlanmış yumurta, yeşillik, domates.", kalori: 300, gorsel: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400" },
    { id: 12, baslik: "Lor Peynirli Lavaş", icerik: "1 tam buğday lavaş, 100g lor peyniri, domates, maydanoz.", kalori: 250, gorsel: "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=400" },
    { id: 13, baslik: "Labneli Hindi Fümeli Dürüm", icerik: "1 tam buğday lavaş, 2 yk light labne, 50g hindi füme, marul.", kalori: 340, gorsel: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=400" },
    { id: 14, baslik: "Ton Balıklı Kahvaltılık Dürüm", icerik: "1 tam buğday lavaş, 80g suda ton balığı, marul, limon suyu.", kalori: 360, gorsel: "https://images.unsplash.com/photo-1540713434306-58525c216741?q=80&w=400" },
    { id: 15, baslik: "Peynirli Sebzeli Lavaş", icerik: "1 tam buğday lavaş, 40g beyaz peynir, domates, roka.", kalori: 280, gorsel: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=400" },
    { id: 16, baslik: "Fit Gözleme Tarzı Lavaş", icerik: "1 tam buğday lavaş, 60g lor peyniri, ıspanak (yağsız tavada).", kalori: 320, gorsel: "https://images.unsplash.com/photo-1547058886-af77d90d8b51?q=80&w=400" },
    { id: 17, baslik: "Yoğurtlu Tavuklu Dürüm", icerik: "1 tam buğday lavaş, 80g haşlanmış tavuk göğsü, 1 yk yoğurt, marul.", kalori: 390, gorsel: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400" },
    { id: 18, baslik: "Fıstık Ezmeli Muzlu Lavaş", icerik: "1 tam buğday lavaş, 1 yk şekersiz fıstık ezmesi, yarım muz, tarçın.", kalori: 350, gorsel: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=400" },
    { id: 19, baslik: "Menemen Dürüm", icerik: "1 tam buğday lavaş, 2 yumurtalı menemen, maydanoz.", kalori: 340, gorsel: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400" },
    { id: 20, baslik: "Kahvaltılık Protein Dürüm", icerik: "1 tam buğday lavaş, 1 haşlanmış yumurta, 50g lor, domates, marul.", kalori: 370, gorsel: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=400" },

    // === GALETA MENÜLERİ (21-30) ===
    { id: 21, baslik: "Yumurta + Galeta", icerik: "2 haşlanmış yumurta, 2 adet galeta, domates, salatalık.", kalori: 260, gorsel: "https://images.unsplash.com/photo-1582722872445-44c5ab1e2c17?q=80&w=400" },
    { id: 22, baslik: "Lor Peynirli Galeta Tabağı", icerik: "100g lor peyniri, 2 adet galeta, domates, maydanoz.", kalori: 240, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 23, baslik: "Yoğurtlu Galeta Kasesi", icerik: "200g yoğurt, 2 adet galeta (ufalanmış), tarçın, yarım elma.", kalori: 290, gorsel: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" },
    { id: 24, baslik: "Beyaz Peynir + Galeta", icerik: "50g beyaz peynir, 3 adet galeta, domates, salatalık.", kalori: 300, gorsel: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=400" },
    { id: 25, baslik: "Labneli Galeta", icerik: "3 adet galeta, 2 yemek kaşığı light labne, domates dilimleri.", kalori: 280, gorsel: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400" },
    { id: 26, baslik: "Ton Balıklı Galeta", icerik: "80g suda ton balığı, 2 adet galeta, marul, limon.", kalori: 330, gorsel: "https://images.unsplash.com/photo-1540713434306-58525c216741?q=80&w=400" },
    { id: 27, baslik: "Peynirli Yumurtalı Tabak", icerik: "1 haşlanmış yumurta, 50g lor peyniri, 3 adet galeta, domates.", kalori: 350, gorsel: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=400" },
    { id: 28, baslik: "Fıstık Ezmeli Galeta", icerik: "2 adet galeta, 1 yk şekersiz fıstık ezmesi, yarım muz.", kalori: 300, gorsel: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=400" },
    { id: 29, baslik: "Menemen + Galeta", icerik: "2 yumurtalı menemen, 2 adet galeta.", kalori: 330, gorsel: "https://images.unsplash.com/photo-1590412200988-a436bb7050a4?q=80&w=400" },
    { id: 30, baslik: "Protein Kahvaltı Tabağı", icerik: "2 haşlanmış yumurta, 50g lor peyniri, 2 adet galeta, yeşillik.", kalori: 380, gorsel: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=400" },

    // === ANA ÖĞÜNLER VE TAŞINABİLİR KAPLAR (31-45) ===
    { id: 31, baslik: "Tavuklu Lavaş Dürüm", icerik: "1 tam buğday lavaş, 120g tavuk göğsü, marul, domates, 1 yk yoğurt.", kalori: 450, gorsel: "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=400" },
    { id: 32, baslik: "Ton Balıklı Sandviç", icerik: "2 dilim tam buğday ekmeği, 80g süzülmüş ton balığı, marul, domates.", kalori: 400, gorsel: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=400" },
    { id: 33, baslik: "Tavuklu Makarna Salatası", icerik: "70g kuru tb makarna, 100g tavuk göğsü, mısır, yoğurt sos.", kalori: 550, gorsel: "https://images.unsplash.com/photo-1644704170947-fbf7437cab99?q=80&w=400" },
    { id: 34, baslik: "Nohutlu Salata", icerik: "150g haşlanmış nohut, domates, salatalık, maydanoz, 1 çk zeytinyağı.", kalori: 450, gorsel: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400" },
    { id: 35, baslik: "Kısır + Ayran", icerik: "1 orta boy kap kısır, 1 bardak ayran. Taşıması kolay.", kalori: 500, gorsel: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=400" },
    { id: 36, baslik: "Yoğurtlu Tavuklu Bowl", icerik: "120g tavuk göğsü, 200g yoğurt, salatalık, nane. Ferah öğün.", kalori: 420, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 37, baslik: "Mercimek Salatası", icerik: "150g haşlanmış yeşil mercimek, domates, maydanoz, soğan, limon.", kalori: 400, gorsel: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=400" },
    { id: 38, baslik: "Peynirli Soğuk Sandviç", icerik: "2 dilim tam buğday ekmeği, 60g beyaz peynir, domates, marul.", kalori: 350, gorsel: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=400" },
    { id: 39, baslik: "Tavuklu Bulgur Salatası", icerik: "100g tavuk göğsü, 150g pişmiş bulgur, domates, maydanoz.", kalori: 520, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 40, baslik: "Ton Balıklı Makarna Salatası", icerik: "70g kuru makarna, 1 kutu ton balığı, mısır, salatalık.", kalori: 550, gorsel: "https://images.unsplash.com/photo-1644704170947-fbf7437cab99?q=80&w=400" },
    { id: 41, baslik: "Yumurtalı Patates Salatası", icerik: "2 haşlanmış yumurta, 150g haşlanmış patates, maydanoz, limon.", kalori: 450, gorsel: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=400" },
    { id: 42, baslik: "Tavuklu Wrap", icerik: "1 büyük tam buğday lavaş, 120g tavuk, marul, yoğurtlu sos.", kalori: 500, gorsel: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400" },
    { id: 43, baslik: "Lor Peynirli Makarna Salatası", icerik: "70g kuru makarna, 100g lor peyniri, domates, salatalık.", kalori: 450, gorsel: "https://images.unsplash.com/photo-1644704170947-fbf7437cab99?q=80&w=400" },
    { id: 44, baslik: "Etli Bulgur Pilavı Kutusu", icerik: "120g yağsız dana eti, 150g bulgur pilavı, yanına salata.", kalori: 600, gorsel: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400" },
    { id: 45, baslik: "Nohutlu Tavuklu Kase", icerik: "100g tavuk, 100g haşlanmış nohut, domates, salatalık.", kalori: 550, gorsel: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400" },

    // === HAZIR MARKET VE PRATİK ÖĞLE MENÜLERİ (46-60) ===
    { id: 46, baslik: "Mantı + Yoğurt Kase", icerik: "150g haşlanmış mantı, 3-4 yk yoğurt, nane, pul biber.", kalori: 520, gorsel: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400" },
    { id: 47, baslik: "Fit Rus Salatası", icerik: "150g rus salatası (yoğurtlu veya light mayonez), 1 dilim tb ekmeği.", kalori: 450, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 48, baslik: "Konserve Hindi Tandır Bowl", icerik: "1 kutu konserve hindi tandır (80-120g), 150g haşlanmış patates/bulgur, salata.", kalori: 400, gorsel: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400" },
    { id: 49, baslik: "Hindi Fümeli Sandviç", icerik: "2 dilim tam buğday ekmeği, 60-80g hindi füme, marul, domates, 1 tk labne.", kalori: 380, gorsel: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=400" },
    { id: 50, baslik: "Meyve + Yoğurt Salatası", icerik: "200g yoğurt, 1 elma, 1 küçük muz, 1 yk yulaf, tarçın.", kalori: 300, gorsel: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400" },
    { id: 51, baslik: "Hindi Füme Lavaş Wrap", icerik: "1 tam buğday lavaş, 80g hindi füme, marul, salatalık, 1 yk yoğurt.", kalori: 420, gorsel: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400" },
    { id: 52, baslik: "Ton Balığı + Rus Salatası Kombin", icerik: "1 küçük porsiyon rus salatası, 80g ton balığı, 1 dilim tb ekmeği.", kalori: 550, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 53, baslik: "Pratik Mantı Öğünü", icerik: "150g haşlanmış mantı, 1 bardak ayran.", kalori: 550, gorsel: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400" },
    { id: 54, baslik: "Hindi Tandır Sandviç", icerik: "2 dilim tam buğday ekmeği, 100g hindi tandır, marul, domates.", kalori: 450, gorsel: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=400" },
    { id: 55, baslik: "Meyveli Protein Bowl", icerik: "200g yoğurt, 1 avuç çilek/elma, 1 yk şekersiz fıstık ezmesi.", kalori: 350, gorsel: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=400" },
    { id: 56, baslik: "Rus Salatası + Tavuk Ekstra", icerik: "150g hazır rus salatası, 100g haşlanmış tavuk göğsü, limon.", kalori: 500, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 57, baslik: "Hindi Füme + Peynir Kutusu", icerik: "60g hindi füme, 40g beyaz peynir, domates, salatalık, 1 dilim ekmek.", kalori: 400, gorsel: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=400" },
    { id: 58, baslik: "Mantı + Yoğurt + Salata", icerik: "150g mantı, yoğurt, sızma limonlu yeşil salata.", kalori: 580, gorsel: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400" },
    { id: 59, baslik: "Pratik Protein Kutusu", icerik: "2 haşlanmış yumurta, 80g hindi füme, 1 dilim tb ekmeği, domates.", kalori: 420, gorsel: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=400" },
    { id: 60, baslik: "Fit Tatlı Öğle", icerik: "200g yoğurt, 1 küçük muz, 1 yk yulaf, bol tarçın.", kalori: 300, gorsel: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400" },

    // === AKŞAM YEMEĞİ VE EV YEMEĞİ MENÜLERİ (61-75) ===
    { id: 61, baslik: "Tavuk Pilav Klasik", icerik: "120-150g tavuk göğsü, 5-6 yemek kaşığı az yağlı pilav, limonlu salata.", kalori: 600, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 62, baslik: "Köfte + Patates + Yoğurt", icerik: "5-6 adet ev köftesi (yağsız), 1 fırın patates, 3 yk yoğurt.", kalori: 650, gorsel: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=400" },
    { id: 63, baslik: "Tavuklu Makarna Fit", icerik: "70g kuru makarna, 120g tavuk göğsü, 1 çk zeytinyağı, sarımsaklı yoğurt.", kalori: 550, gorsel: "https://images.unsplash.com/photo-1644704170947-fbf7437cab99?q=80&w=400" },
    { id: 64, baslik: "Fırın Tavuk Kanat + Salata", icerik: "6-7 adet fırınlanmış tavuk kanadı, büyük kase salata, 1 dilim tb ekmeği.", kalori: 600, gorsel: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400" },
    { id: 65, baslik: "Çiğ Köfte Lavaş Dürüm", icerik: "8-10 adet çiğ köfte, 1 tam buğday lavaş, bol marul, limon.", kalori: 450, gorsel: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400" },
    { id: 66, baslik: "Pide + Ayran Fit Versiyon", icerik: "1 küçük dondurulmuş kıymalı pide, 1 bardak ayran, salata.", kalori: 650, gorsel: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400" },
    { id: 67, baslik: "Tavuk Sote + Bulgur", icerik: "120g tavuk, 6-7 yk bulgur pilavı, biber, soğan, domates.", kalori: 600, gorsel: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=400" },
    { id: 68, baslik: "Köfte Dürüm", icerik: "5 adet ev köftesi, 1 tam buğday lavaş, yoğurt, marul, domates.", kalori: 550, gorsel: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?q=80&w=400" },
    { id: 70, baslik: "Tavuk Kanat + Patates Fırın", icerik: "6 adet fırın kanat, 1 orta boy fırın patates, 2 yk yoğurt.", kalori: 650, gorsel: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=400" },
    { id: 71, baslik: "Sebzeli Tavuk Bowl", icerik: "120g ızgara tavuk, buharda brokoli, kabak, havuç, 1 tk zeytinyağı.", kalori: 500, gorsel: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400" },
    { id: 72, baslik: "Çiğ Köfte + Yoğurt + Salata", icerik: "10 adet etsiz çiğ köfte, 1 kase ev yoğurdu, bol yeşillik.", kalori: 500, gorsel: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { id: 73, baslik: "Ev Yapımı Hamburger", icerik: "100g ev köftesi, 1 tam buğday burger ekmeği, marul, domates, yoğurt sos.", kalori: 600, gorsel: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400" },
    { id: 74, baslik: "Tavuklu Mantı Karışık", icerik: "120g mantı, 100g ızgara tavuk göğsü, yoğurt sos.", kalori: 650, gorsel: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400" },
    { id: 75, baslik: "Pide + Tavuk Ekstra", icerik: "1 küçük dondurulmuş pide, 80-100g ızgara tavuk göğsü, salata.", kalori: 700, gorsel: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400" },
    { id: 76, baslik: "Tarçınlı Havuç & Cevizli Yulaf", icerik: "40g yulaf, 150ml süt, 1 küçük rendelenmiş havuç, tarçın ve 2 tam ceviz. Tatlı isteğini kesen, lif oranı yüksek fit alternatif.", kalori: 310, gorsel: "https://images.unsplash.com/photo-1517881917431-134888973554?q=80&w=400" }
];

// === SİSTEM DEĞİŞKENLERİ ===
let chartInstance = null;
let selectedDateForView = ""; 

// SAYFALANDIRMA (PAGINATION) AYARLARI
let currentPage = 1;
const itemsPerPage = 9; 
let filteredMenusGlobal = []; 

window.onload = function() {
    if(!localStorage.getItem('daily_calorie_target')) localStorage.setItem('daily_calorie_target', 1800);
    if(!localStorage.getItem('custom_menus')) localStorage.setItem('custom_menus', JSON.stringify(defaultMenus));

    switchTab('dashboard'); 
    updateUI();
    initChart();
};

// === SEKME YÖNETİM MOTORU (NAVBAR SYSTEM) ===
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(element => element.classList.add('hidden'));
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');

    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active-nav'));
    document.getElementById(`nav-${tabId}`).classList.add('active-nav');
    
    // YÜZEN BUTON KONTROLÜ: Sadece 'menus' sekmesindeyse sol alttaki butonu göster
    const floatingBtn = document.getElementById('floating-add-btn');
    if (tabId === 'menus') {
        floatingBtn.classList.remove('hidden');
    } else {
        floatingBtn.classList.add('hidden');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getDailyTarget() { return parseInt(localStorage.getItem('daily_calorie_target')) || 1800; }
function getHistory() { return JSON.parse(localStorage.getItem('calorie_history_v3')) || {}; }
function saveHistory(data) { localStorage.setItem('calorie_history_v3', JSON.stringify(data)); }
function getTodayDateStr() { return new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' }); }

function changeDailyTarget() {
    const currentTarget = getDailyTarget();
    const newTarget = prompt("Yeni günlük hedef kalorinizi girin:", currentTarget);
    if(newTarget && !isNaN(newTarget)) {
        localStorage.setItem('daily_calorie_target', parseInt(newTarget));
        updateUI();
        updateChart();
    }
}

function updateUI() {
    const target = getDailyTarget();
    document.getElementById('target-display').innerText = target;

    const history = getHistory();
    const todayStr = getTodayDateStr();
    const todayItems = history[todayStr] || [];
    
    const consumedToday = todayItems.reduce((sum, item) => sum + item.kalori, 0);
    const remaining = target - consumedToday;
    
    document.getElementById('remaining-cal').innerText = remaining < 0 ? 0 : remaining;
    document.getElementById('consumed-cal').innerText = consumedToday;

    const percent = Math.min((consumedToday / target) * 100, 100);
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percent}%`;
    
    if(percent >= 100) progressBar.className = "bg-gradient-to-r from-rose-500 to-red-400 h-full rounded-full transition-all duration-500";
    else if (percent > 85) progressBar.className = "bg-gradient-to-r from-amber-500 to-orange-400 h-full rounded-full transition-all duration-500";
    else progressBar.className = "bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full transition-all duration-500";

    buildFilteredMenuData(); 
    renderPagedMenus();

    if(selectedDateForView) showDayDetails(selectedDateForView);
    if(!document.getElementById('all-history-container').classList.contains('hidden')) renderAllHistoryList();
}

// === PREMIUM SAYFALANDIRMALI MENÜ MOTORU ===
function buildFilteredMenuData() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const menus = JSON.parse(localStorage.getItem('custom_menus')) || [];

    filteredMenusGlobal = menus.filter(menu => {
        return menu.baslik.toLowerCase().includes(searchTerm) || menu.icerik.toLowerCase().includes(searchTerm);
    });

    document.getElementById('menu-count').innerText = `${filteredMenusGlobal.length} Benzersiz Ögün Bulundu`;
}

function renderPagedMenus(menusToRender) {
    // 1. Senin HTML kodundaki 'menu-container' alanını hedef alıyoruz
    const listContainer = document.getElementById('menu-container');
    
    if (!listContainer) {
        console.error("HATA: 'menu-container' ID'li alan HTML dosyasında bulunamadı!");
        return;
    }

    // İçini temizle
    listContainer.innerHTML = '';

    // Eğer gösterilecek menü yoksa uyarı bas
    const targetMenus = menusToRender || defaultMenus;
    if (targetMenus.length === 0) {
        listContainer.innerHTML = `
            <div class="text-center py-12 text-slate-400 w-full">
                <p class="font-medium">Aradığınız kriterlere uygun menü bulunamadı.</p>
            </div>
        `;
        return;
    }

    // Menüleri senin container'ının içine basıyoruz
    targetMenus.forEach(menu => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded-3xl border border-slate-100 hover:border-emerald-100 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 cursor-pointer group";
        
        // Tıklama olayı
        card.onclick = () => {
            if (typeof openDetailModal === 'function') {
                openDetailModal(menu);
            } else {
                alert(menu.baslik + " - " + menu.kalori + " kcal");
            }
        };

        const imgUrl = menu.gorsel || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300';

        card.innerHTML = `
            <img src="${imgUrl}" 
                 alt="${menu.baslik}" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300';" 
                 class="w-20 h-20 object-cover rounded-2xl bg-slate-50 shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
            
            <div class="flex-1 min-w-0">
                <h3 class="font-bold text-slate-800 tracking-tight text-base truncate group-hover:text-emerald-600 transition-colors">${menu.baslik}</h3>
                <p class="text-xs text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">${menu.icerik}</p>
                <div class="flex items-center gap-1.5 mt-2">
                    <span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-lg">
                        🔥 ${menu.kalori} kcal
                    </span>
                </div>
            </div>
            
            <div class="text-slate-300 group-hover:text-emerald-500 transition-colors pr-1">
                ➔
            </div>
        `;

        listContainer.appendChild(card);
    });

    // Lucide ikon paketi kullanıyorsan tetikle
    try {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch(e) {
        // İkon kütüphanesi yoksa hata vermesini engelliyoruz
    }
}

// SAYFA YÜKLENDİĞİNDE MENÜLERİ OTOMATİK GETİREN TETİKLEYİCİ
document.addEventListener('DOMContentLoaded', () => {
    if (typeof defaultMenus !== 'undefined') {
        renderPagedMenus(defaultMenus);
    }
});

function onSearchChange() {
    currentPage = 1; 
    buildFilteredMenuData();
    renderPagedMenus();
}

function prevPage() { if(currentPage > 1) { currentPage--; renderPagedMenus(); window.scrollTo({top: 0, behavior: 'smooth'}); } }
function nextPage() { const totalPages = Math.ceil(filteredMenusGlobal.length / itemsPerPage); if(currentPage < totalPages) { currentPage++; renderPagedMenus(); window.scrollTo({top: 0, behavior: 'smooth'}); } }

function addMenu(menuId) {
    const menus = JSON.parse(localStorage.getItem('custom_menus')) || [];
    const menu = menus.find(m => m.id === menuId);
    if(!menu) return;

    const history = getHistory();
    const todayStr = getTodayDateStr();
    if(!history[todayStr]) history[todayStr] = [];
    
    history[todayStr].push({
        uniqueId: Date.now() + Math.random().toString(36).substr(2, 5),
        baslik: menu.baslik,
        kalori: menu.kalori
    });

    saveHistory(history);
    updateUI();
    updateChart();
    
    alert(`"${menu.baslik}" bugünkü günlüğünüze başarıyla eklendi.`);
}

function createNewMenu() {
    const title = document.getElementById('new-title').value.trim();
    const content = document.getElementById('new-content').value.trim();
    const calories = parseInt(document.getElementById('new-calories').value);
    const image = document.getElementById('new-image').value.trim();

    if(!title || !content || isNaN(calories)) {
        alert("Lütfen zorunlu yıldızlı (*) alanları eksiksiz doldurun.");
        return;
    }

    const menus = JSON.parse(localStorage.getItem('custom_menus')) || [];
    menus.push({ id: Date.now(), baslik: title, icerik: content, kalori: calories, gorsel: image });
    localStorage.setItem('custom_menus', JSON.stringify(menus));

    document.getElementById('new-title').value = "";
    document.getElementById('new-content').value = "";
    document.getElementById('new-calories').value = "";
    document.getElementById('new-image').value = "";

    alert(`"${title}" özel tarifleriniz arasına katıldı.`);
    closeMenuModal();
    updateUI();
}

// === MODAL AÇMA / KAPAMA SİHİRBAZLARI ===
function openMenuModal() {
    const modal = document.getElementById('menu-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeMenuModal() {
    const modal = document.getElementById('menu-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; 
}

// === 📥 YEDEKLEME VE VERİ TRANSFER SİSTEMİ ===
function exportBackupData() {
    const backupPack = {
        target: localStorage.getItem('daily_calorie_target'),
        customMenus: localStorage.getItem('custom_menus'),
        history: localStorage.getItem('calorie_history_v3')
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupPack));
    const downloadAnchor = document.createElement('a');
    
    const date = new Date().toISOString().slice(0,10);
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `nutritrack_pro_backup_${date}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importBackupData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedPack = JSON.parse(e.target.result);
            if (importedPack.target && importedPack.customMenus && importedPack.history) {
                localStorage.setItem('daily_calorie_target', importedPack.target);
                localStorage.setItem('custom_menus', importedPack.customMenus);
                localStorage.setItem('calorie_history_v3', importedPack.history);
                
                alert("🎉 Premium yedekleme başarıyla yüklendi! Verileriniz senkronize edildi.");
                currentPage = 1;
                updateUI();
                updateChart();
                closeDetails();
                switchTab('dashboard');
            } else {
                alert("Hata: Geçersiz NutriTrack yedek dosyası yapısı.");
            }
        } catch (err) {
            alert("Dosya çözümlenirken kritik hata oluştu.");
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function factoryReset() {
    if(confirm("Tüm verileri silip ilk günkü ayarlara dönmek istediğinizden emin misiniz? Bu işlem geri alınamaz!")) {
        localStorage.clear();
        location.reload();
    }
}

// === GRAFİK VE GEÇMİŞ DETAY İŞLEMLERİ ===
function toggleAllHistory() {
    const container = document.getElementById('all-history-container');
    const btnText = document.getElementById('history-btn-text');
    if(container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        btnText.innerText = "Eski Kayıtları Gizle";
        renderAllHistoryList();
    } else {
        container.classList.add('hidden');
        btnText.innerText = "Tüm Eski Kayıtları Göster";
    }
}

function renderAllHistoryList() {
    const container = document.getElementById('all-history-container');
    container.innerHTML = "";
    const history = getHistory();
    const dates = Object.keys(history).reverse();

    if(dates.length === 0) {
        container.innerHTML = `<p class="text-[11px] text-slate-400 text-center py-3">Kayıtlı geçmiş öğün bulunmuyor.</p>`;
        return;
    }

    dates.forEach(dateStr => {
        const totalCal = (history[dateStr] || []).reduce((sum, item) => sum + item.kalori, 0);
        const row = document.createElement('div');
        row.className = "flex justify-between items-center p-3 bg-slate-50 hover:bg-emerald-50 rounded-2xl border border-slate-100 transition-colors text-xs cursor-pointer";
        row.onclick = () => showDayDetails(dateStr);
        row.innerHTML = `<span>📅 ${dateStr}</span><span class="font-bold text-slate-900 bg-white px-2 py-1 rounded-xl border border-slate-100">${totalCal} kcal ❯</span>`;
        container.appendChild(row);
    });
}

function showDayDetails(dateStr) {
    selectedDateForView = dateStr;
    const dayItems = getHistory()[dateStr] || [];
    const section = document.getElementById('detail-section');
    const title = document.getElementById('selected-date-title');
    const listContainer = document.getElementById('detail-list');

    title.innerText = dateStr;
    listContainer.innerHTML = "";
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if(dayItems.length === 0) {
        listContainer.innerHTML = `<p class="text-xs text-slate-400 text-center py-2">Seçilen günde hiçbir öğün kaydı yok.</p>`;
        return;
    }

    dayItems.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = "bg-white px-3 py-2.5 rounded-xl flex justify-between items-center border border-slate-100 text-xs shadow-2xs";
        itemRow.innerHTML = `
            <div class="flex items-center gap-2 min-w-0"><span class="font-bold text-slate-800 truncate">${item.baslik}</span><span class="text-[10px] text-emerald-600 font-semibold shrink-0">(${item.kalori} kcal)</span></div>
            <button onclick="deleteItemFromDay('${dateStr}', '${item.uniqueId}')" class="text-rose-500 hover:bg-rose-50 p-1 rounded-lg font-bold transition-colors cursor-pointer ml-2">✕</button>
        `;
        listContainer.appendChild(itemRow);
    });
}

function deleteItemFromDay(dateStr, uniqueId) {
    const history = getHistory();
    if(!history[dateStr]) return;
    history[dateStr] = history[dateStr].filter(item => item.uniqueId !== uniqueId);
    saveHistory(history);
    updateUI();
    updateChart();
}

function closeDetails() { document.getElementById('detail-section').classList.add('hidden'); selectedDateForView = ""; }

function resetToday() {
    if(confirm("Bugünkü tüm menüleri temizlemek istediğinize emin misiniz?")) {
        const history = getHistory();
        history[getTodayDateStr()] = [];
        saveHistory(history);
        updateUI();
        updateChart();
    }
}

// === GRAPH ENGINE (CHART.JS) ===
function initChart() {
    const ctx = document.getElementById('historyChart').getContext('2d');
    const labels = [];
    for (let i = 4; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i);
        labels.push(d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' }));
    }

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: { labels: labels, datasets: [{ label: 'Kalori', data: [0,0,0,0,0], backgroundColor: '#10b981', borderRadius: 12, maxBarThickness: 24 }] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            onClick: (event, elements) => {
                if (elements.length > 0) showDayDetails(chartInstance.data.labels[elements[0].index]);
            },
            scales: { x: { grid: { display: false }, ticks: { font: { size: 9, weight: 'bold' }, color: '#94a3b8' } }, y: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 9 }, color: '#94a3b8' } } }
        }
    });
    updateChart();
}

function updateChart() {
    if(chartInstance) {
        const history = getHistory();
        const data = [];
        chartInstance.data.labels.forEach(label => {
            data.push((history[label] || []).reduce((sum, item) => sum + item.kalori, 0));
        });
        chartInstance.data.datasets[0].data = data;
        chartInstance.update();
    }
}

// === TARİF DETAY MODALI SİHIRBAZLARI ===
function openDetailModal(menu) {
    const modal = document.getElementById('detail-modal');
    const modalImg = document.getElementById('modal-detail-img');
    const modalTitle = document.getElementById('modal-detail-title');
    const modalContent = document.getElementById('modal-detail-content');
    const modalCalories = document.getElementById('modal-detail-calories');

    if (!modal) return;

    // Elementleri verilerle dolduruyoruz
    if (modalTitle) modalTitle.innerText = menu.baslik;
    if (modalContent) modalContent.innerText = menu.icerik;
    if (modalCalories) modalCalories.innerText = menu.kalori;

    // Büyük modal resmi için hata koruması
    if (modalImg) {
        modalImg.src = menu.gorsel || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600';
        modalImg.onerror = function() {
            this.onerror = null;
            this.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600';
        };
    }

    // Modalı görünür yap (Tailwind sınıflarına göre ayarlı)
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Normal kaydırmaya dön
}

lucide.createIcons();