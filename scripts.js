// scripts.js

// Hàm tạo hoa rơi
function createFallingFlowers() {
    var numFlowers = 20; // Số lượng hoa
    for (var i = 0; i < numFlowers; i++) {
        var flower = document.createElement('div');
        flower.classList.add('flower');
        document.body.appendChild(flower);

        var randomLeft = Math.random() * window.innerWidth; // Vị trí ngẫu nhiên từ trái sang phải
        var animationDuration = Math.random() * 3 + 4; // Thời gian rơi ngẫu nhiên (4s - 7s)

        flower.style.left = randomLeft + 'px';
        flower.style.animationDuration = animationDuration + 's';
        flower.style.animationDelay = Math.random() * 2 + 's';
    }
}

// Gọi hàm khi trang tải xong
window.onload = createFallingFlowers;