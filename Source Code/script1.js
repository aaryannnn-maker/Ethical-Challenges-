/* script.js */
function submitQuiz() {
  const answers = {
    q1: 'b',
    q2: 'b',
    q3: 'b',
    q4: 'b',
    q5: 'b',
    q6: 'b'
  };
  let score = 0;
  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }
  document.getElementById("result").innerText = `You scored ${score} out of 6!`;
}
