```javascript
// ==========================================
// CẤU HÌNH HỆ THỐNG CHI HỘI 2505QLNH
// ==========================================

// Hệ thống đăng ký hoạt động
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw47YRZPh9w-SLci-ll0_bumZiIbqOUUO0w_cshvZx5Glo_DIi3tWPXa7iGCQYspapY/exec";

// DỮ LIỆU DỰ PHÒNG
// Khi tải dữ liệu Admin thành công, app.js sẽ ưu tiên
// window.ADMIN_ACTIVITIES thay vì danh sách bên dưới.
const ACTIVITIES = [
  {
    id: "ThanhAmTriThuc_2026",
    title: "THAM GIA ĐỘI THI CUỘC THI THANH ÂM TRI THỨC",
    opensAt: "2026-10-14T20:00:00+07:00",
    closesAt: "2026-10-19T20:00:00+07:00",
    eventTime: "Dự kiến giữa tháng 11/2026",
    location: "Sẽ thông báo sau",
    description: "Đăng ký tham gia đội thi Cuộc thi Thanh Âm Tri Thức.",
    note: "Số lượng đăng ký không giới hạn. Vui lòng nhập đúng họ tên và MSSV.",
    unlimited: true
  },
  {
    id: "BieuDien_DaiHoiHoiVien_2026",
    title: "THAM GIA BIỂU DIỄN ĐẠI HỘI HỘI VIÊN CHI HỘI 2505QLNH",
    opensAt: "2026-10-14T20:00:00+07:00",
    closesAt: "2026-10-16T20:00:00+07:00",
    eventTime: "Ngày 21/10/2026",
    location: "Sẽ thông báo sau",
    description: "Đăng ký tham gia biểu diễn văn nghệ tại Đại hội Hội viên Chi hội 2505QLNH.",
    note: "Loại hình tham gia: ca hát. Vui lòng nhập đúng họ tên và MSSV.",
    unlimited: true
  }
];

// ==========================================
// HỆ THỐNG BẦU CỬ
// GIỮ NGUYÊN CẤU HÌNH HIỆN TẠI
// ==========================================

const BAUCU_EVENT_ID = "baucu1";

const BAUCU_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzB7_rpA1yaJwSAckDcRnPP3jU75jOudKxvuIe1SqqqrhsHi5v3SqjDCcS9L0XvZlJP/exec";
```
