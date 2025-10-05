const hamb = document.querySelector('.hamburger i');
    const dropdown = document.querySelector('.dropdown');

    hamb.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!hamb.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
const tooltip = document.getElementById('tooltip');
const icons = document.querySelectorAll('.menu i');
icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    tooltip.textContent = icon.dataset.label;

    const rect = icon.getBoundingClientRect();
    const tooltipX = rect.right + 40;   
    const tooltipY = rect.top ;          

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
    tooltip.style.transform = 'translateX(-50%)'; 
    tooltip.style.opacity = '1';
  });

  icon.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
});


const tool = document.getElementById('tool');
const edges = document.querySelectorAll('.edge i');

edges.forEach(edge => {
  edge.addEventListener('mouseenter', () => {
    tool.textContent = edge.dataset.label;

    const rect = edge.getBoundingClientRect();
    const toolX = rect.left + rect.width / 2;
    const toolY = rect.bottom + 8;

    tool.style.left = `${toolX}px`;
    tool.style.top = `${toolY}px`;
    tool.style.transform = 'translateX(-50%)';
    tool.style.opacity = '1';
  });

  edge.addEventListener('mouseleave', () => {
    tool.style.opacity = '0';
  });
});