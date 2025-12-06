function checkAnswer() {
  let correctAnswer = "4";
  const radio_btn = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = radio_btn.value;
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

const submit_btn = document.getElementById("submit-answer");
submit_btn.addEventListener("click", checkAnswer);
