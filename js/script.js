/* const accordionItems = document.querySelectorAll('.accordion-item');
            
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordionItems.forEach(item => {
      const content = item.querySelector('.accordion-content');
      const arrowIcon = item.querySelector('.accordion-header i');

      if (item !== isActive) {
        item.classList.remove('active');
        content.style.maxHeight = 0;
        arrowIcon.classList.remove('fa-chevron-up');
        arrowIcon.classList.add('fa-chevron-down');
      }
    });

    if (isActive) {
      item.classList.remove('active');
      item.querySelector('.accordion-content').style.maxHeight = 0;
      item.querySelector('.accordion-header i').classList.remove('fa-chevron-up');
      item.querySelector('.accordion-header i').classList.add('fa-chevron-down');
    } else {
      item.classList.add('active');
      item.querySelector('.accordion-content').style.maxHeight = item.querySelector('.accordion-content').scrollHeight + 'px';
      item.querySelector('.accordion-header i').classList.remove('fa-chevron-down');
      item.querySelector('.accordion-header i').classList.add('fa-chevron-up');
    }
  });
}); */

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordionItems.forEach(accItem => {
      if (accItem !== item && accItem.classList.contains('active')) {
        accItem.classList.remove('active');
      }
    });

    if (!isActive) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});


const info = document.getElementById('info');

function toggleHeroDerTop() {
    const heroDer = document.querySelector('.hero__der');
    const isOpen = heroDer.classList.contains('hero__der--open');
    heroDer.classList.toggle('hero__der--open');
    heroDer.style.top = isOpen ? '100vh' : '0vh';
  }
  

  

