// ============================================================================
// 📦 雲端點餐與 POS 系統・獨立 Firebase 設定檔 (firebaseConfig.js)
// 💡 部署新合作店家時，只需將 Firebase 控制台提供的設定替換於此檔案即可，
//    完全不需要修改 index.html 與 admin.html！
// ============================================================================


const firebaseConfig = {
  apiKey: "AIzaSyAgFf15-neUJ1AzR5Qr3m2qZmYcJfLc6Q0",
  authDomain: "eat-order-test1.firebaseapp.com",
  projectId: "eat-order-test1",
  storageBucket: "eat-order-test1.firebasestorage.app",
  messagingSenderId: "441876556559",
  appId: "1:441876556559:web:4f7cb34b957ec340c9ac7a"
};



window.FIREBASE_CONFIG = firebaseConfig;
