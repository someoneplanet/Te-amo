function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
