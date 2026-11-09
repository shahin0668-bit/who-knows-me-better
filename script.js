
const quizCard = document.getElementById("quizCard");
const heartsContainer = document.getElementById("hearts");

let playerName = "";
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// ALL 20 QUESTIONS

const questions = [
    {
        question: "What is my favourite colour?",
        options: ["Pink", "Blue", "Black", "Depends on my mood"],
        answer: 3
    },
    {
        question: "What is my favourite food?",
        options: ["Pizza", "Pasta", "Burger", "Biryani"],
        answer: 3
    },
    {
        question: "What is my favourite type of music?",
        options: ["Romantic songs", "Sad songs", "Party songs", "Depends on my mood"],
        answer: 3
    },
    {
        question: "Which season do I like the most?",
        options: ["Winter", "Summer", "Monsoon", "Spring"],
        answer: 0
    },
    {
        question: "Which country would I love to visit?",
        options: ["France", "Italy", "Switzerland", "Turkey"],
        answer: 3
    },
    {
        question: "Who is my favourite cartoon character?",
        options: ["Shinchan", "Doraemon", "Nobita", "Tom & Jerry"],
        answer: 1
    },
    {
        question: "Which Disney character am I most like?",
        options: ["Cinderella", "Rapunzel", "Belle", "Ariel"],
        answer: 1
    },
    {
        question: "What makes me feel special?",
        options: [
            "Someone treating me like a princess",
            "Getting free food",
            "Someone stalking my Instagram stories",
            "Someone understanding me without explaining"
        ],
        answer: 3
    },
    {
        question: "What is my idea of a perfect day?",
        options: [
            "A peaceful day with my favourite person",
            "A fun day full of adventures",
            "A day filled with shopping and food",
            "A cozy day with movies and lots of sleep"
        ],
        answer: 1
    },
    {
        question: "What is one secret wish I have?",
        options: [
            "To travel the whole world",
            "To find someone who truly understands me",
            "To become a billionaire overnight",
            "To sleep for 24 hours straight"
        ],
        answer: 1
    },
    {
        question: "What kind of attention do I love the most?",
        options: [
            "Random cute texts",
            "Someone remembering small details",
            "Undivided attention",
            "Unexpected thoughtful gestures"
        ],
        answer: 1
    },
    {
        question: "What do I do when I get butterflies?",
        options: [
            "I start smiling for no reason",
            "I become shy and quiet",
            "I act normal but feel excited inside",
            "I start overthinking everything"
        ],
        answer: 0
    },
    {
        question: "Where would I go right now?",
        options: [
            "Switzerland",
            "Somewhere with mountains and beautiful views",
            "A magical place like in fairy tales",
            "Somewhere completely random, even I don't know where 😂"
        ],
        answer: 3
    },
    {
        question: "What is my favourite kind of surprise?",
        options: [
            "A handwritten letter",
            "An unexpected visit",
            "A thoughtful gift",
            "A surprise trip"
        ],
        answer: 0
    },
    {
        question: "What makes me emotionally attached to someone?",
        options: [
            "Consistent efforts",
            "Deep conversations",
            "Feeling safe and understood",
            "Little acts of care"
        ],
        answer: 2
    },
    {
        question: "What makes me smile instantly?",
        options: [
            "A sweet message",
            "My favourite person's presence",
            "Unexpected compliments",
            "Funny little moments"
        ],
        answer: 2
    },
    {
        question: "What would be my perfect weekend?",
        options: [
            "Going on a little trip",
            "Watching movies and relaxing",
            "Spending time with loved ones",
            "Exploring a new place"
        ],
        answer: 3
    },
    {
        question: "What is my biggest green flag in a person?",
        options: [
            "Honesty",
            "Loyalty",
            "Emotional understanding",
            "Consistency"
        ],
        answer: 2
    },
    {
        question: "What little things make me happy?",
        options: [
            "Random cute messages",
            "Late-night conversations",
            "My favourite songs playing at the right moment",
            "Getting my favourite food without asking"
        ],
        answer: 0
    },
    {
        question: "If I could make one wish come true, what would it be?",
        options: [
            "To travel the whole world with my favourite people",
            "To make my family proud and give them everything",
            "To live a peaceful life with no regrets",
            "To have a life exactly like I've always imagined"
        ],
        answer: 1
    }
];

// FLOATING HEARTS

function createHearts() {
    heartsContainer.innerHTML = "";

    const heartSymbols = ["💗", "💕", "♡", "🌸", "💖"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.className = "heart";
        heart.textContent = heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (5 + Math.random() * 7) + "s";
        heart.style.animationDelay = Math.random() * 8 + "s";
        heart.style.fontSize = (15 + Math.random() * 18) + "px";

        heartsContainer.appendChild(heart);
    }
}

createHearts();

// WELCOME SCREEN

function showWelcome() {
    quizCard.innerHTML = `
        <div class="character">🎀</div>

        <h1>WHO KNOWS ME BETTER?</h1>

        <p class="subtitle">
            A little quiz about me, made with lots of love! 💗
        </p>

        <input
            type="text"
            id="playerName"
            placeholder="Enter your name..."
            maxlength="25"
        >

        <button class="main-btn" id="startBtn">
            Let's Begin! 💕
        </button>

        <p class="footer-text">
            20 Questions • 3 Levels • Lots of Fun 🌸
        </p>
    `;

    document.getElementById("startBtn").addEventListener("click", () => {
        const nameInput = document.getElementById("playerName");
        const name = nameInput.value.trim();

        if (name === "") {
            nameInput.placeholder = "Please enter your name first! 💗";
            nameInput.focus();
            return;
        }

        playerName = name;
        showTransition(0);
    });
}

// LEVEL TRANSITION SCREENS

function showTransition(level) {
    let title = "";
    let message = "";
    let character = "";
    let buttonText = "";

    if (level === 0) {
        title = "Are You Ready?";
        message = "Let's start easy! Time to see how well you know me.";
        character = "🌸";
        buttonText = "Start Easy Level 💗";
    }

    else if (level === 1) {
        title = "You're Doing Well!";
        message = "Easy level completed! Now let's make things a little interesting.";
        character = "🥰";
        buttonText = "Start Medium Level 💖";
    }

    else if (level === 2) {
        title = "Ready for a Challenge?";
        message = "Welcome to the tricky level! Let's see how closely you know me.";
        character = "✨";
        buttonText = "Start Tricky Level 🎀";
    }

    quizCard.innerHTML = `
        <div class="character">${character}</div>

        <span class="level-label">
            ${level === 0 ? "WELCOME" : level === 1 ? "LEVEL 2 UNLOCKED" : "FINAL LEVEL"}
        </span>

        <h1>${title}</h1>

        <p class="transition-message">${message}</p>

        <button class="main-btn" id="levelBtn">
            ${buttonText}
        </button>

        <p class="footer-text">
            Made with love by Shahin ♡
        </p>
    `;

    document.getElementById("levelBtn").addEventListener("click", () => {
        if (level === 0) {
            currentQuestion = 0;
        }

        else if (level === 1) {
            currentQuestion = 7;
        }

        else {
            currentQuestion = 14;
        }

        showQuestion();
    });
}

// SHOW QUESTION

function showQuestion() {
    const q = questions[currentQuestion];

    selectedOption = null;

    let levelName = "";
    let levelEmoji = "";

    if (currentQuestion < 7) {
        levelName = "EASY";
        levelEmoji = "🌸";
    }

    else if (currentQuestion < 14) {
        levelName = "MEDIUM";
        levelEmoji = "💗";
    }

    else {
        levelName = "TRICKY";
        levelEmoji = "💖";
    }

    quizCard.innerHTML = `
        <div class="quiz-top">
            <span>🎀 WHO KNOWS ME BETTER?</span>
            <span>💗 ${escapeHTML(playerName)}</span>
        </div>

        <span class="level-label">
            ${levelEmoji} ${levelName} LEVEL
        </span>

        <div class="progress-info">
            <span>Question ${currentQuestion + 1} of 20</span>
            <span>${Math.round(((currentQuestion + 1) / 20) * 100)}%</span>
        </div>

        <div class="progress-track">
            <div class="progress-fill"
            style="width:${((currentQuestion + 1) / 20) * 100}%">
            </div>
        </div>

        <div class="character">🌸</div>

        <p class="question-number">
            QUESTION ${currentQuestion + 1}
        </p>

        <h2 class="question-text">
            ${q.question}
        </h2>

        <div class="options-list">
            ${q.options.map((option, index) => `
                <button class="option-btn" data-index="${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </button>
            `).join("")}
        </div>

        <p id="answerFeedback" class="transition-message"></p>

        <button class="next-btn" id="nextBtn" disabled>
            ${currentQuestion === 19 ? "See My Result 💖" : "Next Question 💗"}
        </button>

        <p class="footer-text">
            Made with love by Shahin ♡
        </p>
    `;

    document.querySelectorAll(".option-btn").forEach(button => {
        button.addEventListener("click", function() {

            document.querySelectorAll(".option-btn").forEach(btn => {
                btn.classList.remove("selected");
            });

            this.classList.add("selected");

            selectedOption = Number(this.dataset.index);

            document.getElementById("answerFeedback").textContent =
                "Lovely choice! 💕";

            document.getElementById("nextBtn").disabled = false;
        });
    });

    document.getElementById("nextBtn").addEventListener("click", nextQuestion);
}

// NEXT QUESTION


function nextQuestion() {
    if (selectedOption === null) {
        return;
    }

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion === 7) {
        showTransition(1);
    }
    else if (currentQuestion === 14) {
        showTransition(2);
    }
    else if (currentQuestion >= 20) {
        showResult();
    }
    else {
        showQuestion();
    }
}

async function showResult() {
    const percentage = Math.round((score / 20) * 100);

    let character = "";
    let title = "";
    let message = "";

    if (percentage >= 90) {
        character = "👑";
        title = "OMG! You Know Me So Well!";
        message = "You're officially one of the people who knows me best! 💗";
    } else if (percentage >= 70) {
        character = "🥰";
        title = "Amazing Job!";
        message = "You know so many little things about me. That's really sweet!";
    } else if (percentage >= 50) {
        character = "🌸";
        title = "Not Bad at All!";
        message = "You know me pretty well, but there's still more to discover!";
    } else {
        character = "💕";
        title = "Aww, Keep Learning!";
        message = "Looks like you need to know a few more things about me!";
    }

    quizCard.innerHTML = `
        <div class="character">${character}</div>
        <h1>Quiz Completed!</h1>
        <p class="subtitle">Well played, ${escapeHTML(playerName)}! 💗</p>
        <div class="result-score">${score}/20</div>
        <h2>${percentage}%</h2>
        <h2>${title}</h2>
        <p class="transition-message">${message}</p>
        <p class="level-label">🌸 Your final score is ${score} out of 20</p>

        <p id="saveStatus">Saving your score... 💗</p>

        <h2>🏆 Public Leaderboard</h2>
        <div id="leaderboardList">Loading scores...</div>

        <br>
        <button class="main-btn" id="restartBtn">Play Again! 💖</button>
        <p class="footer-text">Made with love by Shahin ♡</p>
    `;

    try {
        const { error: saveError } = await supabaseClient
            .from("leaderboard")
            .insert([{ name: playerName, score: score }]);

        if (saveError) throw saveError;

        document.getElementById("saveStatus").textContent =
            "Your score has been saved! 💗";

        const { data, error } = await supabaseClient
            .from("leaderboard")
            .select("name, score")
            .order("score", { ascending: false })
            .order("created_at", { ascending: true })
            .limit(30);

        if (error) throw error;

        document.getElementById("leaderboardList").innerHTML =
           
data.map((person, index) => {
    let rankClass = "rank-normal";
    let medal = "";

    if (index === 0) {
        rankClass = "rank-gold";
        medal = "🥇";
    } else if (index === 1) {
        rankClass = "rank-silver";
        medal = "🥈";
    } else if (index === 2) {
        rankClass = "rank-bronze";
        medal = "🥉";
    }

    return `
        <div class="leaderboard-item ${rankClass}">
            <span class="rank-number">
                ${medal || "#" + (index + 1)}
            </span>

            <span class="player-name">
                ${escapeHTML(person.name)}
            </span>

            <span class="player-score">
                ${person.score}/20
            </span>
        </div>
    `;
}).join("");


    } catch (error) {
        console.error(error);

        document.getElementById("saveStatus").textContent =
            "Score could not be saved. Please try again later.";

        document.getElementById("leaderboardList").textContent =
            "Leaderboard is temporarily unavailable.";
    }

    document.getElementById("restartBtn").addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        selectedOption = null;
        showWelcome();
    });
}


// START THE WEBSITE

showWelcome();
