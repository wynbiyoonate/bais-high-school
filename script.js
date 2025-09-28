// This will display a message when the button is clicked
document.getElementById('myButton').addEventListener('click', function () {
  document.getElementById('message').textContent =
    'You clicked the button! 🚀';
  // Scroll to top as extra feature:
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
