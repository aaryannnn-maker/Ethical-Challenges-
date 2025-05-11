// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// Scroll to top when button is clicked
scrollToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// Wait until page fully loaded, then add 'animated' class
window.addEventListener('load', function() {
    document.querySelectorAll('h1, h2, h3').forEach(function(heading) {
      heading.style.opacity = '1'; // Make visible after load
      heading.style.animation = 'headingAnimation 2s ease forwards'; // Start animation
    });
  });
// Function to check and calculate quiz answers
function submitQuiz() {
  // Correct answers
  const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "b",
    q5: "b",
    q6: "b"
  };

  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  // Loop through all questions
  for (let question in correctAnswers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);

    // If user selected the correct option, increase score
    if (selected && selected.value === correctAnswers[question]) {
      score++;
    }
  }

  // Show result on page
  const result = document.getElementById("result");
  result.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
}
  