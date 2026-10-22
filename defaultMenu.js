// ============================================================================
// 🍱 雲端點餐與 POS 系統・獨立公版範本菜單檔 (defaultMenu.js)
// 🏪 目前設定店家：阿正現炒 (115年09月新菜單)
// 💡 部署新合作店家時，請將此檔案與 admin.html 放在同一個目錄下。
// ============================================================================

// 店家基本資訊設定 (一鍵載入公版時會自動同步寫入後台設定)
const defaultStoreInfo = {
  store_name: "阿正現炒",
  store_phone: "06-2707718",
  store_address: "台南市仁德區仁義一街100號",
  hours: ["10:00-19:30"],
  closed_days: [6], // 6 為每週六公休
  store_notice: "歡迎光臨阿正現炒！外送請於早上10點前預訂，現點現炒請耐心等候。"
};

const defaultMenuCategories = [
  { name: "飯類", sort_order: 1, is_active: true },
  { name: "麵類", sort_order: 2, is_active: true },
  { name: "湯類", sort_order: 3, is_active: true },
  { name: "小炒類", sort_order: 4, is_active: true }
];

// 飯類通用選項
const riceAddons = [
  { name: "加飯 (+10元)", price: 10 },
  { name: "小辣", price: 0 },
  { name: "中辣", price: 0 },
  { name: "大辣", price: 0 },
  { name: "不要蔥", price: 0 }
];

// 芥藍/蔥爆 二選一選項 (搭配飯類或小炒類)
const kailanOrScallionRiceAddons = [
  { name: "芥藍", price: 0 },
  { name: "蔥爆", price: 0 },
  { name: "加飯 (+10元)", price: 10 },
  { name: "小辣", price: 0 },
  { name: "中辣", price: 0 }
];

const kailanOrScallionStirFryAddons = [
  { name: "芥藍", price: 0 },
  { name: "蔥爆", price: 0 },
  { name: "小辣", price: 0 },
  { name: "中辣", price: 0 },
  { name: "大辣", price: 0 }
];

// 冬粉/麵線 二選一選項
const vermicelliOrMisuAddons = [
  { name: "冬粉", price: 0 },
  { name: "麵線", price: 0 },
  { name: "不要蔥", price: 0 },
  { name: "小辣", price: 0 }
];

// 麵/冬粉 二選一選項
const noodleOrVermicelliAddons = [
  { name: "麵", price: 0 },
  { name: "冬粉", price: 0 },
  { name: "加麵 (+15元)", price: 15 },
  { name: "不要蔥", price: 0 },
  { name: "小辣", price: 0 }
];

// 一般麵類與炒麵選項
const generalNoodleAddons = [
  { name: "加麵 (+15元)", price: 15 },
  { name: "小辣", price: 0 },
  { name: "中辣", price: 0 },
  { name: "大辣", price: 0 },
  { name: "不要蔥", price: 0 }
];

// 湯類與小炒類通用選項
const soupAddons = [
  { name: "不要蔥", price: 0 },
  { name: "不要薑絲", price: 0 }
];

const stirFryAddons = [
  { name: "小辣", price: 0 },
  { name: "中辣", price: 0 },
  { name: "大辣", price: 0 },
  { name: "不辣", price: 0 }
];

const defaultMenuItems = [
  // ================= 1. 飯類 (18項) =================
  { category_name: "飯類", name: "鮮魚粥", type: "fixed", price: 110, addons: soupAddons, is_available: true },
  { category_name: "飯類", name: "魚肚粥", type: "fixed", price: 140, addons: soupAddons, is_available: true },
  { category_name: "飯類", name: "海產粥", type: "fixed", price: 90, addons: soupAddons, is_available: true },
  { category_name: "飯類", name: "蚵仔粥", type: "fixed", price: 90, addons: soupAddons, is_available: true },
  { category_name: "飯類", name: "魚皮粥", type: "fixed", price: 80, addons: soupAddons, is_available: true },
  { category_name: "飯類", name: "紅燒牛腩燴飯", type: "fixed", price: 110, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "羊肉炒飯", type: "fixed", price: 80, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "雞柳炒飯", type: "fixed", price: 80, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "牛肉炒飯", type: "fixed", price: 80, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "蝦仁炒飯", type: "fixed", price: 70, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "肉絲火腿炒飯", type: "fixed", price: 70, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "牛肉蓋飯", type: "fixed", price: 70, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "豬肉蓋飯", type: "fixed", price: 70, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "芥藍/蔥爆 牛柳飯", type: "fixed", price: 90, addons: kailanOrScallionRiceAddons, is_available: true },
  { category_name: "飯類", name: "芥藍/蔥爆 雞柳飯", type: "fixed", price: 90, addons: kailanOrScallionRiceAddons, is_available: true },
  { category_name: "飯類", name: "芥藍/蔥爆 羊柳飯", type: "fixed", price: 90, addons: kailanOrScallionRiceAddons, is_available: true },
  { category_name: "飯類", name: "芥藍/蔥爆 豬柳飯", type: "fixed", price: 90, addons: kailanOrScallionRiceAddons, is_available: true },
  { category_name: "飯類", name: "三杯雞柳飯", type: "fixed", price: 100, addons: riceAddons, is_available: true },
  { category_name: "飯類", name: "白飯(一碗)", type: "fixed", price: 10, addons: [], is_available: true },

  // ================= 2. 麵類 (13項) =================
  { category_name: "麵類", name: "鮮魚冬粉/麵線", type: "fixed", price: 110, addons: vermicelliOrMisuAddons, is_available: true },
  { category_name: "麵類", name: "魚肚冬粉/麵線", type: "fixed", price: 140, addons: vermicelliOrMisuAddons, is_available: true },
  { category_name: "麵類", name: "豬心冬粉/麵線", type: "fixed", price: 80, addons: vermicelliOrMisuAddons, is_available: true },
  { category_name: "麵類", name: "蚵仔麵線", type: "fixed", price: 90, addons: generalNoodleAddons, is_available: true },
  { category_name: "麵類", name: "魚皮麵線", type: "fixed", price: 80, addons: generalNoodleAddons, is_available: true },
  { category_name: "麵類", name: "豬肝麵線", type: "fixed", price: 80, addons: generalNoodleAddons, is_available: true },
  { category_name: "麵類", name: "紅燒牛肉麵/冬粉", type: "fixed", price: 110, addons: noodleOrVermicelliAddons, is_available: true },
  { category_name: "麵類", name: "什錦海鮮湯麵/冬粉", type: "fixed", price: 90, addons: noodleOrVermicelliAddons, is_available: true },
  { category_name: "麵類", name: "牛肉炒麵", type: "fixed", price: 70, addons: generalNoodleAddons, is_available: true },
  { category_name: "麵類", name: "羊肉炒麵", type: "fixed", price: 80, addons: generalNoodleAddons, is_available: true },
  { category_name: "麵類", name: "雞肉炒麵", type: "fixed", price: 70, addons: generalNoodleAddons, is_available: true },
  { category_name: "麵類", name: "蝦仁炒麵", type: "fixed", price: 70, addons: generalNoodleAddons, is_available: true },
  { category_name: "麵類", name: "豬肉炒麵", type: "fixed", price: 70, addons: generalNoodleAddons, is_available: true },

  // ================= 3. 湯類 (10項) =================
  { category_name: "湯類", name: "鮮魚湯", type: "fixed", price: 100, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "魚肚湯", type: "fixed", price: 130, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "什錦海鮮湯", type: "fixed", price: 80, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "紅燒牛腩湯", type: "fixed", price: 90, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "豬心湯", type: "fixed", price: 50, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "蚵仔湯", type: "fixed", price: 60, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "魚皮湯", type: "fixed", price: 50, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "蛤仔湯", type: "fixed", price: 40, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "蛋花湯", type: "fixed", price: 30, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "豬肝湯", type: "fixed", price: 50, addons: soupAddons, is_available: true },

  // ================= 4. 小炒類 (23項) =================
  { category_name: "小炒類", name: "各式炒青菜", type: "fixed", price: 60, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "炒麻油豬心", type: "fixed", price: 130, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "芥藍/蔥爆 炒牛肉", type: "fixed", price: 150, addons: kailanOrScallionStirFryAddons, is_available: true },
  { category_name: "小炒類", name: "芥藍/蔥爆 炒雞柳", type: "fixed", price: 130, addons: kailanOrScallionStirFryAddons, is_available: true },
  { category_name: "小炒類", name: "芥藍/蔥爆 炒羊肉", type: "fixed", price: 150, addons: kailanOrScallionStirFryAddons, is_available: true },
  { category_name: "小炒類", name: "芥藍/蔥爆 炒肉絲", type: "fixed", price: 130, addons: kailanOrScallionStirFryAddons, is_available: true },
  { category_name: "小炒類", name: "青椒炒牛肉", type: "fixed", price: 170, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "青椒炒羊肉", type: "fixed", price: 170, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "青椒炒雞肉", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "麻油炒豬肝", type: "fixed", price: 130, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "三杯雞柳", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "炒花枝", type: "fixed", price: 170, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "炒蔭絲蚵", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "炒蛤", type: "fixed", price: 130, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "炒魚皮", type: "fixed", price: 130, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "糖醋里肌肉", type: "fixed", price: 130, addons: [], is_available: true },
  { category_name: "小炒類", name: "椒鹽里肌肉", type: "fixed", price: 130, addons: stirFryAddons, is_available: true },
  { category_name: "小炒類", name: "煎魚肚", type: "fixed", price: 130, addons: [{ name: "加椒鹽", price: 0 }], is_available: true },
  { category_name: "小炒類", name: "煎鱸魚 (時價・請洽櫃台)", type: "fixed", price: 0, addons: [{ name: "時價(櫃台確認金額)", price: 0 }], is_available: true },
  { category_name: "小炒類", name: "煎吳郭魚 (時價・請洽櫃台)", type: "fixed", price: 0, addons: [{ name: "時價(櫃台確認金額)", price: 0 }], is_available: true },
  { category_name: "小炒類", name: "煎蝦仁蛋", type: "fixed", price: 60, addons: [], is_available: true },
  { category_name: "小炒類", name: "煎蔥蛋", type: "fixed", price: 40, addons: [], is_available: true },
  { category_name: "小炒類", name: "炒洋蔥蛋", type: "fixed", price: 60, addons: [], is_available: true }
];

window.DEFAULT_MENU_TEMPLATE = {
  store_info: defaultStoreInfo,
  categories: defaultMenuCategories,
  items: defaultMenuItems
};