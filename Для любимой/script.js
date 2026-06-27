const no = document.getElementById("no");
const yes = document.getElementById("yes");
const question = document.getElementById("question");
const love = document.getElementById("love");
const text = document.getElementById("text");

const msg = "Спасибо тебе, котёнок, что ты есть, я правда по-настоящему счастлив рядом с тобой 💖💖💖";

// Кнопка "Да"
yes.onclick = () => {
    // Находим картинку на втором экране по её ID и меняем её на праздничную cat2.gif
    const happyCat = document.getElementById("happy-cat");
    happyCat.src = "cat2.gif";

    question.style.display = "none";
    love.classList.remove("hidden");

    let i = 0;
    const timer = setInterval(() => {
        text.textContent += msg[i] || "";
        i++;
        if(i > msg.length)
            clearInterval(timer);
    }, 40);

    // Падающие разные сердечки
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        
        // Список разных эмодзи для эффекта салюта
        const heartTypes = ["❤️", "💖", "💝", "💕", "💗", "💘", "🌸", "✨"];
        const randomHeart = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        
        heart.innerHTML = randomHeart;

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 150);
};

// Функция случайной позиции кнопки
function moveNoButton() {
    const buttonWidth = no.offsetWidth;
    const buttonHeight = no.offsetHeight;

    const x = Math.random() * (window.innerWidth - buttonWidth);
    const y = Math.random() * (window.innerHeight - buttonHeight);

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";
}

// Обработчики движения кнопки "Нет" (срабатывают сразу)
no.addEventListener("mouseenter", moveNoButton);

no.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

no.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});
