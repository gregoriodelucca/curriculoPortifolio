function changeLanguage(lang) {
    const interval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        clearInterval(interval);
      }
    }, 500); 
  }

/* dark and light */

const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  // aplica tema salvo
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark');
      toggleBtn.textContent = '☀️';
    }
  });