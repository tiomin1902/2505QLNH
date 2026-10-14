const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw47YRZPh9w-SLci-ll0_bumZiIbqOUUO0w_cshvZx5Glo_DIi3tWPXa7iGCQYspapY/exec";
const MAX_PEOPLE = 5;
const START_TIME_STRING = "2026-10-08T15:20:00";
const EVENT_ID = "HoatDong_18";

const isRegistrationActive = true;
const CLOSED_MESSAGE = "CHƯA CÓ HOẠT ĐỘNG ĐỂ ĐĂNG KÝ. Vui lòng quay lại sau.";

const eventDetails = {
    tenHoatDong: "Giải bóng đá Thanh niên Chi đoàn 2505QLNH",
    thoiGianDienRa: "08:00 sáng, Chủ nhật, ngày 18/10/2026",
    diaDiem: "Sân thể thao trung tâm trường",
    noiDung: "Giao lưu bóng đá mini chào mừng năm học mới, tăng cường tình đoàn kết giữa các đoàn viên trong Chi đoàn.",
    luuY: "Đoàn viên tham gia nhớ mang giày thể thao và có mặt đúng giờ quy định."
};

// ================================
// CẤU HÌNH BẦU CỬ CHI HỘI
// ================================

// Đổi mã này khi bắt đầu đợt bầu cử mới:
// Đợt 1: baucu1
// Đợt 2: baucu2
// Đợt 3: baucu3
const BAUCU_EVENT_ID = "baucu1";

// URL triển khai Google Apps Script dành cho bầu cử
const BAUCU_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzB7_rpA1yaJwSAckDcRnPP3jU75jOudKxvuIe1SqqqrhsHi5v3SqjDCcS9L0XvZlJP/exec";

// Bật/tắt chức năng bầu cử
const BAUCU_ACTIVE = true;
