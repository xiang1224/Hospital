// 之後可以加 Discord彈窗、表單提交提示等互動
console.log("聖心醫院 RP 網站已啟動");
document.addEventListener("DOMContentLoaded", function () {
    // 動態插入 Header 和 Footer 內容

    // Header 內容
    const headerContent = `
        <nav>
    <div class="logo-container">
        <img src="./img/logo.png" alt="白塔醫院 Logo" class="logo">
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
                <li><a href="#">急診科</a></li>
                <li><a href="#">外科</a></li>
                <li><a href="#">內科</a></li>
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
            <p>&copy; 2025 白塔醫院所有，曉翔所有，阿鳥協助製作</p>
        </footer>
    `;
    document.getElementById("footer").innerHTML = footerContent;
});



const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(n) {
    if (n < 0) index = images.length - 1;
    else if (n >= images.length) index = 0;
    else index = n;
    slide.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// 自動播放
setInterval(() => showSlide(index + 1), 5000);
