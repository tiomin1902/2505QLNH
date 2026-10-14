
const ADMIN_PUBLIC_URL = "https://script.google.com/macros/s/AKfycbzPGpmof4OV5U_kaUr1_ZJipvYihJlB4FdR7mB3DhSK4rSwJCnQ5MiO01b-Ehl1r50/exec";

const chiDoanInfo = {
  tenChiDoan: "2505QLNH",
  nhiemKy: "2026 – 2027",
  donVi: "Đoàn Thanh niên",
  banChapHanh: {
    biThu: "Chưa cập nhật",
    phoBiThu: "Chưa cập nhật",
    uyVien: "Chưa cập nhật"
  },
  moTaVej: "Chi đoàn 2505QLNH là tập thể đoàn viên sinh viên cùng học tập, rèn luyện, tham gia công tác Đoàn và các hoạt động tập thể.",
  giaTri: "Đoàn kết • Trách nhiệm • Chủ động • Cống hiến"
};

function renderChiDoanInfo() {
  const container = document.querySelector("#info .info-grid");
  if (!container) return;

  const cards = [
    ["Về Chi đoàn", chiDoanInfo.moTaVej],
    ["Thông tin nhiệm kỳ",
      `Chi đoàn: ${chiDoanInfo.tenChiDoan}\nNhiệm kỳ: ${chiDoanInfo.nhiemKy}\nĐơn vị: ${chiDoanInfo.donVi}`],
    ["Ban Chấp hành",
      `Bí thư: ${chiDoanInfo.banChapHanh.biThu}\nPhó Bí thư: ${chiDoanInfo.banChapHanh.phoBiThu}\nỦy viên BCH: ${chiDoanInfo.banChapHanh.uyVien}`],
    ["Giá trị hoạt động", chiDoanInfo.giaTri]
  ];

  container.replaceChildren();
  cards.forEach(([title, text]) => {
    const card = document.createElement("div");
    card.className = "info-card";
    const heading = document.createElement("h3");
    heading.textContent = title;
    const content = document.createElement("p");
    content.style.whiteSpace = "pre-line";
    content.textContent = text || "Chưa cập nhật";
    card.append(heading, content);
    container.append(card);
  });
}

function loadAdminPublicData() {
  const callback = "adminPublic_" + Date.now() + "_" +
    Math.random().toString(36).slice(2);

  const script = document.createElement("script");
  const timeout = setTimeout(() => {
    delete window[callback];
    script.remove();
  }, 12000);

  window[callback] = result => {
    clearTimeout(timeout);
    delete window[callback];
    script.remove();

    if (!result || !result.success) return;

    const c = result.config || {};
    chiDoanInfo.tenChiDoan = c.tenChiDoan || chiDoanInfo.tenChiDoan;
    chiDoanInfo.nhiemKy = c.nhiemKy || chiDoanInfo.nhiemKy;
    chiDoanInfo.donVi = c.donVi || chiDoanInfo.donVi;
    chiDoanInfo.banChapHanh.biThu = c.biThu || chiDoanInfo.banChapHanh.biThu;
    chiDoanInfo.banChapHanh.phoBiThu = c.phoBiThu || chiDoanInfo.banChapHanh.phoBiThu;
    chiDoanInfo.banChapHanh.uyVien = c.uyVien || chiDoanInfo.banChapHanh.uyVien;
    chiDoanInfo.moTaVej = c.moTa || chiDoanInfo.moTaVej;
    chiDoanInfo.giaTri = c.giaTri || chiDoanInfo.giaTri;

    if (Array.isArray(result.activities)) {
      window.ADMIN_ACTIVITIES = result.activities;
    }

    renderChiDoanInfo();
  };

  script.onerror = () => {
    clearTimeout(timeout);
    delete window[callback];
    script.remove();
  };

  const url = new URL(ADMIN_PUBLIC_URL);
  url.searchParams.set("action", "publicData");
  url.searchParams.set("callback", callback);
  script.src = url.toString();
  document.body.append(script);
}

document.addEventListener("DOMContentLoaded", () => {
  renderChiDoanInfo();
  loadAdminPublicData();
});
