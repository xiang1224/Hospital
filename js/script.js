// 之後可以加 Discord彈窗、表單提交提示等互動
console.log("聖心醫院 RP 網站已啟動");
document.addEventListener("DOMContentLoaded", function () {
    // 動態插入 Header 和 Footer 內容

    // Header 內容
    const headerContent = `
<nav>
    <div class="logo-container">
    <a href="index.html">
        <img src="./img/logo.png" alt="白塔醫院 Logo" class="logo">
    </a>
</div>

    <ul>
        <li><a href="index.html">首頁</a></li>
        <li class="dropdown">
            <a href="#">關於我們 ▾</a>
            <ul class="submenu">
                <li><a href="introduce.html">醫院簡介</a></li>
                <li><a href="team.html">醫療團隊</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">服務項目 ▾</a>
            <ul class="submenu">
                <li><a href="emergency.html"><i class="fa-solid fa-hospital-user"></i> 創傷中心</a></li>
                <li><a href="surgery.html"><i class="fa-solid fa-user-doctor"></i> 外科</a></li>
                <li><a href="internal.html"><i class="fa-solid fa-stethoscope"></i> 內科</a></li>
            </ul>
        </li>
        <li><a href="#">加入我們</a></li>
        <li><a href="#">聯絡方式</a></li>
    </ul>
</nav>


    `;
    document.getElementById("header").innerHTML = headerContent;

    // Footer 內容
    const footerContent = `
        <footer>
            <p>&copy; 2025 此網站為曉翔所有，阿鳥協助製作</p>
        </footer>
    `;
    document.getElementById("footer").innerHTML = footerContent;
});

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateSlide();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateSlide();
});

setInterval(() => {
    index = (index + 1) % items.length;
    updateSlide();
}, 5000);
