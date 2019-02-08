(function() {
  "use strict";

  const question = document.getElementById("question");
  const btn = document.getElementById("btn");
  const answers = document.querySelectorAll("#answers > li");
  let shuffleedAnswers;
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector("#result > p");

  let quizSet = [
    { q: "What is A?", a: ["A0", "A1", "A2"] },
    { q: "What is B?", a: ["B0", "B1", "B2"] },
    { q: "What is C?", a: ["C0", "C1", "C2"] },
  ];

  let currentNum = 0;
  let isAnswered;
  let score = 0;

  // [1 2 3 4 5] -> [1 3 5 4 3]
  // [1 2 5 4] 3 -> [1 2 5 4] 3
  // [1 2 5] 4 3 -> [1 5 2] 4 3
  // [1 5] 2 4 3 -> [5 1] 2 4 3
  // [5] 1 2 4 3
  function shuffle(arr) {
    let i, j, tmp;
    for (i = arr.length - 1; i >= 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function setQuiz() {
    question.textContent = quizSet[currentNum].q;
    shuffleedAnswers = shuffle(quizSet[currentNum].a.slice());
    answers[0].textContent = shuffleedAnswers[0];
    answers[1].textContent = shuffleedAnswers[1];
    answers[2].textContent = shuffleedAnswers[2];
    isAnswered = false;

    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove("correct");
      answers[i].classList.remove("wrong");
      answers[i].textContent = shuffleedAnswers[i];
    }
    btn.classList.add("disabled");
    if (currentNum === quizSet.length - 1) {
      btn.textContent = "Show Score";
    }
  }

  function setEvents() {
    for (let i = 0; i < answers.length; i++) {
      answers[i].addEventListener("click", function() {
        checkAnswer(this);
      });
    }
    btn.addEventListener("click", function() {
      if (this.classList.contains("disabled")) {
        return;
      }
      // setQuiz();
      if (currentNum === quizSet.length) {
        // show score
        scoreLabel.textContent = "Score: " + score + " / " + quizSet.length;
        result.classList.add("show");
      } else {
        setQuiz();
      }
    });
  }

  function checkAnswer(node) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;
    if (node.textContent === quizSet[currentNum].a[0]) {
      node.textContent += " ... Correct!";
      node.classList.add("correct");
      score++;
    } else {
      node.textContent += " ... Wrong!";
      node.classList.add("wrong");
    }
    btn.classList.remove("disabled");
    currentNum++;
  }

  setQuiz();
  setEvents();
})();
