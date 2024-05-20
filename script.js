document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        sections.forEach(section => {
          section.classList.add('hidden');
          if (section.id === targetId) {
            section.classList.remove('hidden');
          }
        });
      });
    });
  });
  