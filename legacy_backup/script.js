const reveals = document.querySelectorAll('.reveal');

function revealOnLoad() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

// Run on page load
window.addEventListener('load', revealOnLoad);

// Run on scroll
window.addEventListener('scroll', revealOnLoad);
function toggleMenu(){
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function toggleTheme(){
  document.body.classList.toggle('dark');

  // icon switch
  const btn = document.querySelector('.theme-toggle');
  if(document.body.classList.contains('dark')){
    btn.textContent = '☀️';
    localStorage.setItem('theme','dark');
  }else{
    btn.textContent = '🌙';
    localStorage.setItem('theme','light');
  }
}

/* Load saved theme */
window.addEventListener('load', () => {
  const saved = localStorage.getItem('theme');
  if(saved === 'dark'){
    document.body.classList.add('dark');
    document.querySelector('.theme-toggle').textContent = '☀️';
  }
});
