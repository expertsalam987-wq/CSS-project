const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText Markdown Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    answers: ["Python Script", "React", "Angular", "Vue"],
    correct: 0
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "/* */", "#", "<!-- -->"],
    correct: 0
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correct: 2
  },
  {
    question: "What is your name?",
    answers: ["Abdulsalam", "Abdulrahman", "Abdulroheem", "Abdullahi"],
    correct: 0
  }
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
const quizEl = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  answersEl.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(index));
    answersEl.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const question = questions[currentQuestion];
  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === question.correct) {
    score++;
    allButtons[selectedIndex].style.background = "#28a745"; // green
  } else {
    allButtons[selectedIndex].style.background = "#dc3545"; // red
    allButtons[question.correct].style.background = "#28a745"; // green
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showQuestion();
});

// Initialize quiz
showQuestion();
