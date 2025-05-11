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
                <li><a href="team.html" onclick="showConstructionPopup(event)">醫療團隊</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">服務項目 ▾</a>
            <ul class="submenu">
                <li><a href="trauma.html"><i class="fa-solid fa-hospital-user"></i> 創傷中心</a></li>
                <li><a href="emergency.html"><i class="fa-solid fa-ambulance"></i> 急診室</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">醫療資源 ▾</a>
            <ul class="submenu">
                <li><a href="blood.html">輸血相關</a></li>
                <li><a href="terms.html">常用術語</a></li>
                <li><a href="medications.html" onclick="showConstructionPopup(event)">常見藥物</a></li>
            </ul>
        </li>
    </ul>
</nav>
<div id="construction-popup" class="construction-modal">
  <div class="construction-content">
    <i class="fa-solid fa-person-digging icon"></i>
    <h2>頁面施工中</h2>
    <p>正在整理中，敬請期待。</p>
    <button onclick="closeConstructionPopup()">我知道了</button>
  </div>
</div>
    `;
    document.getElementById("header").innerHTML = headerContent;

    // Footer 內容
    const footerContent = `
        <footer class="site-footer">
    <div class="footer-container">
        <!-- 關於我們 -->
        <div class="footer-section about">
            <h4>關於我們</h4>
            <p>本站由曉翔擁有，阿鳥協助設計與醫療內容統整，致力於打造專業又溫暖的醫療團隊平台。</p>
        </div>

        <!-- 快速連結 -->
        <div class="footer-section links">
            <h4>快速連結</h4>
            <a href="team.html" onclick="showConstructionPopup(event)">醫療團隊</a>
            <a href="emergency.html">緊急指南</a>
        </div>

        <!-- 社群連結 -->
        <div class="footer-section social">
            <h4>追蹤我們</h4>
            <a href="https://www.twitch.tv/capricornxiang" target="_blank">Twitch - 暈船仔丨小翔丨</a>
            <a href="https://www.twitch.tv/smartbird1102" target="_blank">Twitch - 阿鳥</a>
            <a href="https://www.twitch.tv/sick1122" target="_blank">Twitch - 稀客</a>
        </div>

        <!-- 醫院 Logo -->
        <div class="footer-section hospital-logo">
            <img src="./img/logo.png" alt="微光醫院 Logo" class="footer-logo">
        </div>
    </div>

    <!-- 底部版權 -->
    <div class="footer-bottom">
        <p style="margin-top: 0px;">&copy; 2025 曉翔 All rights reserved. 阿鳥協助製作</p>
    </div>
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



function showConstructionPopup(event) {
    event.preventDefault();
    document.getElementById("construction-popup").style.display = "flex";
}

function closeConstructionPopup() {
    document.getElementById("construction-popup").style.display = "none";
}


