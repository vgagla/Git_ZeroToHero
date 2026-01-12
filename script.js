console.log("JS is connected! 🚀");

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('themeToggle');
  const body = document.body;
  
  toggleButton.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    console.log(`Theme switched to: ${newTheme}`);
  });
});
