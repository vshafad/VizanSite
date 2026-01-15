document.addEventListener('DOMContentLoaded', function() {
  const viewWorkBtn = document.getElementById('view-work-btn');
  const portfolioSection = document.getElementById('portfolio-showcase');

  if (viewWorkBtn && portfolioSection) {
    viewWorkBtn.addEventListener('click', function() {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      portfolioSection.style.transform = 'scale(1.01)';
      portfolioSection.style.boxShadow = '0 25px 50px -12px rgba(59, 130, 246, 0.25)';
      portfolioSection.style.transition = 'all 0.6s ease';

      setTimeout(() => {
        portfolioSection.style.transform = 'scale(1)';
        portfolioSection.style.boxShadow = 'none';
      }, 1200);
    });
  }
});
