const no = document.getElementById("no");
const yes = document.getElementById("yes");
const question = document.getElementById("question");
const love = document.getElementById("love");
const text = document.getElementById("text");

const msg = "Спасибо тебе, котёнок, что ты есть, я правда по-настоящему счастлив рядом с тобой 💖💖💖";

// Кнопка "Да"
yes.onclick = () => {
    question.style.display = "none";
    love.classList.remove("hidden");

    let i = 0;
    const timer = setInterval(() => {
        text.textContent += msg[i] || "";
        i++;
        if(i > msg.length)
            clearInterval(timer);
    }, 40);

    // Сердечки
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 200);
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

// Обработчики движения кнопки "Нет"
no.addEventListener("mouseenter", moveNoButton);

no.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

no.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});
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
// Функция для идеального выравнивания кнопки при первой загрузке
function initNoButtonPosition() {
    const buttonWidth = no.offsetWidth;
    const buttonHeight = no.offsetHeight;

    // Центрируем по горизонтали
    no.style.left = (window.innerWidth / 2 - buttonWidth / 2) + "px";
    
    // Проверяем, телефон это или ПК
    if (window.innerWidth <= 600) {
        // На телефонах опускаем чуть ниже центра (на 65% высоты экрана)
        no.style.top = (window.innerHeight * 0.65 - buttonHeight / 2) + "px";
    } else {
        // На ПК оставляем на вашем стандартном уровне (58.5%)
        no.style.top = (window.innerHeight * 0.585 - buttonHeight / 2) + "px";
    }
}

// Запускаем позиционирование сразу, как только файлы загрузятся
window.addEventListener("DOMContentLoaded", initNoButtonPosition);
// И на случай, если картинки/шрифты погрузились чуть позже
window.addEventListener("load", initNoButtonPosition);
