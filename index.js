let questions = [
  {
    question: "How many teams are participating in the ICC World Cup 2019?",
    options: [8, 9, 10, 12],
    answer: "3"
  },
  {
    question: "Which cricket team has won most ICC Cricket World Cup titles? ",
    options: ["West Indies", "India", "England", "Australia"],
    answer: "4"
  },
  {
    question:
      " Which of the following country did not won the ICC Cricket World Cup (50 over format) title so far?",
    options: ["India", " South Africa", "Pakistan", "Australia"],
    answer: "2"
  },
  {
    question: " When was first ICC cricket World Cup started?",
    options: ["1972", "1975", "1985", "1979"],
    answer: "2"
  },
  {
    question: "Who is the youngest player in the ICC Cricket World Cup 2019?",
    options: [
      "Jonny Bairstow",
      " Yuzvendra chahal",
      "Mujeeb ur Rahman",
      "Kagiso Rabada"
    ],
    answer: "3"
  },
  {
    question:
      "Which Indian cricketer had won the “Man of the Match” award in the final of the ICC World Cup 1983?",
    options: [
      "Kapil Dev",
      "Sunil Gavaskar",
      "Ravi Shastri",
      "Mohinder Amarnath"
    ],
    answer: "4"
  },
  {
    question:
      "Who was the captain of the Indian cricket team in the ICC World Cup 1983?",
    options: ["Sunil Gavaskar", "Kirti Azad", "Kapil Dev", "None of these"],
    answer: "3"
  },
  {
    question:
      " Which cricketer had scored highest individual score in ODI cricket?",
    options: [
      "Virender Sehwag",
      "Chris Gayle",
      "Martin Guptill",
      "Rohit Sharma"
    ],
    answer: "4"
  },
  {
    question: "Which cricketer had scored fastest century in Test cricket?",
    options: [
      "Vivian Richards",
      "Brendon McCullum",
      "Misbah-ul-Haq",
      "Adam Gilchrist"
    ],
    answer: "2"
  },
  {
    question: "Which cricketer had scored fastest century in ODI cricket?",
    options: [
      "Vivian Richards",
      "Corey Anderson",
      "Shahid Afridi",
      "AB de Villiers"
    ],
    answer: "4"
  }
];
let currentQuestion = 0;
let scores = 0;
let selected = false;
const initQuiz = () => {
  loadQuestion();
  let id = setInterval(() => {
    loadQuestion();
    if (currentQuestion === 10) {
      clearInterval(id);
    }
  }, 2000);
};
const loadQuestion = () => {
  selected = false;
  let quizContainer = document.getElementById("quizContianer");
  quizContainer.querySelectorAll("*").forEach((n) => n.remove());
  let questionNo = document.createElement("div");
  questionNo.innerHTML = "Question:" + (currentQuestion + 1);
  questionNo.className = "questionNO";
  quizContainer.appendChild(questionNo);
  // let breakLine = document.createElement("br");
  // quizContainer.appendChild(breakLine);
  let question = document.createElement("div");
  question.innerHTML = questions[currentQuestion].question;
  question.className = "question";
  quizContainer.appendChild(question);
  for (let i = 0; i < 4; i++) {
    let option = document.createElement("div");
    option.setAttribute("id", i + 1);
    option.setAttribute("onclick", "checkAnswer(this)");
    option.className = "option";
    option.innerHTML =
      String.fromCharCode(65 + i) +
      ") " +
      questions[currentQuestion].options[i];
    quizContainer.appendChild(option);
  }
  currentQuestion++;
};
const checkAnswer = (option) => {
  if (selected) return;
  selected = true;
  if (option.id === questions[currentQuestion - 1].answer) {
    option.classList.add("rightAnswer");
    scores++;
  } else {
    option.classList.add("wrongAnswer");
    let answer = document.getElementById(
      Number(questions[currentQuestion - 1].answer)
    );
    answer.classList.add("rightAnswer");
  }
  if (currentQuestion === 10) {
    displayScore();
  }
  // let score = document.getElementById("score");
  // score.innerHTML = "Score: " + scores;
};

const displayScore = () => {
  let score = document.getElementById("score");
  score.innerHTML = "Your Score is " + scores + " out of 10";
};

initQuiz();
