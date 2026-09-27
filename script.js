/* =====================================================
   MYSTERY BOX — رحلة الإنسان
   الكرازة الرسولية
===================================================== */


/* =====================================================
   CARDS DATA
===================================================== */

const cards = [
    {
        id: 1,
        title: "خلق المرأة",
        emojis: ["👨🏻", "💤", "🦴", "👩🏻"],
        keyword: "بداية الحكاية"
    },

    {
        id: 2,
        title: "ناموس الحياة",
        emojis: ["📜", "⚖️", "🌳"],
        keyword: "الوصية والحياة"
    },

    {
        id: 3,
        title: "التعدي",
        emojis: ["🌳", "🍎", "🚫", "💔"],
        keyword: "كسر الوصية"
    },

    {
        id: 4,
        title: "قايين وهابيل",
        emojis: ["👬", "🐑", "🌾", "🩸"],
        keyword: "أول جريمة"
    },

    {
        id: 5,
        title: "تكاثر الشر",
        emojis: ["🌍", "😈", "🩸", "💔"],
        keyword: "الشر ينتشر"
    },

    {
        id: 6,
        title: "نوح والطوفان",
        emojis: ["🌧️", "🚢", "🐘", "🦁"],
        keyword: "الفلك والخلاص"
    },

    {
        id: 7,
        title: "لعنة حام",
        emojis: ["🍷", "👨‍👦", "😳"],
        keyword: "خطأ الابن"
    },

    {
        id: 8,
        title: "البركة لسام ويافث",
        emojis: ["👨‍👦", "👨‍👦", "🙏", "✨"],
        keyword: "البركة"
    },

    {
        id: 9,
        title: "العلامة مع نوح",
        emojis: ["🌧️", "🌈", "🤝"],
        keyword: "علامة العهد"
    },

    {
        id: 10,
        title: "برج بابل",
        emojis: ["🧱", "🗼", "👥", "🗣️"],
        keyword: "تشتت الإنسان"
    },

    {
        id: 11,
        title: "إبراهيم وإسحق ويعقوب",
        emojis: ["⭐", "👴🏻", "👶🏻", "👨🏻"],
        keyword: "سلسلة الآباء"
    }
];


/* =====================================================
   STATE
===================================================== */

let currentIndex = 0;

let isCardFlipped = false;
let isAnswerRevealed = false;


/* =====================================================
   ELEMENTS
===================================================== */

const mysteryBox = document.getElementById("mysteryBox");

const mysteryCard = document.getElementById("mysteryCard");

const openCardBtn = document.getElementById("openCardBtn");

const revealBtn = document.getElementById("revealBtn");

const attachBtn = document.getElementById("attachBtn");

const currentCardArea =
    document.getElementById("currentCardArea");

const answerBox =
    document.getElementById("answerBox");

const answerTitle =
    document.getElementById("answerTitle");

const answerKeyword =
    document.getElementById("answerKeyword");

const cardNumber =
    document.getElementById("cardNumber");

const cardEmojis =
    document.getElementById("cardEmojis");

const attachedCards =
    document.getElementById("attachedCards");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const completionMessage =
    document.getElementById("completionMessage");

const cardModal =
    document.getElementById("cardModal");

const closeModal =
    document.getElementById("closeModal");

const modalEmojis =
    document.getElementById("modalEmojis");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalKeyword =
    document.getElementById("modalKeyword");


/* =====================================================
   INITIALIZE
===================================================== */

function initialize() {

    loadCurrentCard();

    updateProgress();

}


/* =====================================================
   LOAD CURRENT CARD
===================================================== */

function loadCurrentCard() {

    const card = cards[currentIndex];

    if (!card) {
        finishJourney();
        return;
    }


    /* Reset state */

    isCardFlipped = false;
    isAnswerRevealed = false;


    /* Reset card */

    mysteryCard.classList.remove("flipped");


    /* Reset answer */

    answerBox.classList.remove("show");


    /* Update card */

    cardNumber.textContent =
        String(card.id).padStart(2, "0");

    cardEmojis.textContent =
        card.emojis.join(" ");


    answerTitle.textContent =
        card.title;

    answerKeyword.textContent =
        card.keyword;


    /* Show current card */

    currentCardArea.style.display = "block";


    /* Reset box */

    mysteryBox.style.display = "block";

}


/* =====================================================
   OPEN CARD
===================================================== */

openCardBtn.addEventListener("click", () => {

    if (isCardFlipped) {
        return;
    }


    mysteryBox.classList.add("opening");


    setTimeout(() => {

        mysteryCard.classList.add("flipped");

        isCardFlipped = true;

        mysteryBox.classList.remove("opening");

    }, 250);

});


/* =====================================================
   REVEAL ANSWER
===================================================== */

revealBtn.addEventListener("click", () => {

    if (!isCardFlipped || isAnswerRevealed) {
        return;
    }


    isAnswerRevealed = true;


    answerBox.classList.add("show");


    /* Smooth scroll */

    setTimeout(() => {

        answerBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

});


/* =====================================================
   ATTACH CARD
===================================================== */

attachBtn.addEventListener("click", () => {

    if (!isAnswerRevealed) {
        return;
    }


    const card = cards[currentIndex];


    attachCardToThread(card);


    /* Hide current card */

    currentCardArea.style.display = "none";

    mysteryBox.style.display = "none";


    /* Move to next */

    currentIndex++;


    updateProgress();


    /* Check completion */

    if (currentIndex >= cards.length) {

        setTimeout(() => {

            finishJourney();

        }, 800);

        return;
    }


    /* Next card */

    setTimeout(() => {

        currentCardArea.style.display = "block";

        mysteryBox.style.display = "block";

        loadCurrentCard();


        window.scrollTo({
            top: document.querySelector(".mystery-area").offsetTop - 40,
            behavior: "smooth"
        });

    }, 700);

});


/* =====================================================
   ATTACH CARD TO THREAD
===================================================== */

function attachCardToThread(card) {

    const wrapper =
        document.createElement("div");

    wrapper.className = "attached-card";


    const clothespin =
        document.createElement("div");

    clothespin.className = "clothespin";


    const body =
        document.createElement("div");

    body.className = "attached-card-body";


    const emojis =
        document.createElement("div");

    emojis.className = "attached-emojis";

    emojis.textContent =
        card.emojis.join(" ");


    const number =
        document.createElement("div");

    number.className = "attached-number";

    number.textContent =
        `الكارت ${card.id}`;


    body.appendChild(emojis);
    body.appendChild(number);


    wrapper.appendChild(clothespin);
    wrapper.appendChild(body);


    attachedCards.appendChild(wrapper);


    /* Click completed card */

    body.addEventListener("click", () => {

        openCardModal(card);

    });


    /* Scroll to newest card */

    setTimeout(() => {

        wrapper.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

    }, 100);

}


/* =====================================================
   UPDATE PROGRESS
===================================================== */

function updateProgress() {

    const completed =
        currentIndex;

    const currentNumber =
        Math.min(currentIndex + 1, cards.length);


    if (currentIndex >= cards.length) {

        progressText.textContent =
            `${cards.length} / ${cards.length}`;

        progressFill.style.width = "100%";

        return;
    }


    progressText.textContent =
        `${currentNumber} / ${cards.length}`;


    const percentage =
        (currentNumber / cards.length) * 100;


    progressFill.style.width =
        `${percentage}%`;

}


/* =====================================================
   FINISH JOURNEY
===================================================== */

function finishJourney() {

    currentCardArea.style.display = "none";

    mysteryBox.style.display = "none";


    progressText.textContent =
        "11 / 11";

    progressFill.style.width =
        "100%";


    completionMessage.classList.add("show");


    setTimeout(() => {

        completionMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}


/* =====================================================
   MODAL
===================================================== */

function openCardModal(card) {

    modalEmojis.textContent =
        card.emojis.join(" ");

    modalNumber.textContent =
        `الكارت ${String(card.id).padStart(2, "0")}`;

    modalTitle.textContent =
        card.title;

    modalKeyword.textContent =
        card.keyword;


    cardModal.classList.add("show");

}


function closeCardModal() {

    cardModal.classList.remove("show");

}


closeModal.addEventListener(
    "click",
    closeCardModal
);


document.querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeCardModal
    );


/* ESC closes modal */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeCardModal();

    }

});


/* =====================================================
   START
===================================================== */

initialize();