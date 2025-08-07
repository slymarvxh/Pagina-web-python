console.log
  document.addEventListener('DOMContentLoaded', () => {
    const checkBox = document.getElementById('check');
    const navMenu = document.querySelector('.nav-menu');

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (checkBox.checked) {
          checkBox.checked = false;  
        }
      });
    });
  });