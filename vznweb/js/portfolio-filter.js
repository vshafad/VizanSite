document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('text-gray-600', 'hover:text-primary');
      });

      this.classList.add('active', 'bg-primary', 'text-white');
      this.classList.remove('text-gray-600', 'hover:text-primary');

      portfolioItems.forEach(item => {
        if (filter === 'all') {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          const category = item.getAttribute('data-category');
          if (category === filter) {
            item.style.display = 'block';
            item.style.opacity = '1';
          } else {
            item.style.opacity = '0';
            setTimeout(() => {
              if (item.style.opacity === '0') {
                item.style.display = 'none';
              }
            }, 300);
          }
        }
      });
    });
  });

  // initial state
  if (filterBtns[0]) {
    filterBtns[0].classList.add('active', 'bg-primary', 'text-white');
    filterBtns[0].classList.remove('text-gray-600');
  }

  filterBtns.forEach((btn, index) => {
    if (index > 0) {
      btn.classList.add('text-gray-600', 'hover:text-primary');
    }
  });
});
