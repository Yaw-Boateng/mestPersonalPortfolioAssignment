 document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const line = document.getElementById("line");

    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      line.classList.toggle("hidden");
    });
  });



const toggleImageBtn = document.getElementById('toggle-image-button');
  const seeMoreBtn = document.getElementById('see-more-button');
  const backBtn = document.getElementById('back-button');
  const aboutSection = document.getElementById('about-section');
  const gallerySection = document.getElementById('gallery-section');
  const aboutImage = document.getElementById('about-image');

  const originalSrc = './img/bg top without writing .jpg';
  const realPictureSrc = './img/yaw.webp';

  let showingRealPicture = false;

  toggleImageBtn.addEventListener('click', () => {
    if (showingRealPicture) {
      aboutImage.src = originalSrc;
      toggleImageBtn.textContent = 'Real Picture';
    } else {
      aboutImage.src = realPictureSrc;
      toggleImageBtn.textContent = 'Previous Image';
    }
    showingRealPicture = !showingRealPicture;
  });

  seeMoreBtn.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    gallerySection.style.display = 'block';
  });

  backBtn.addEventListener('click', () => {
    gallerySection.style.display = 'none';
    aboutSection.style.display = 'flex';
  });


    // Project slider functionality  const container = document.getElementById('projectSlider');
  const scrollLeftBtn = document.getElementById('scrollLeft');
  const scrollRightBtn = document.getElementById('scrollRight');

  // Arrow scrolling
  scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
  });

  // Auto-scroll
  let scrollAmount = 0;
  const autoScroll = () => {
    scrollAmount += 1;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });

    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
  };

  requestAnimationFrame(autoScroll);

  // Horizontal scroll with mouse wheel on desktop
  container.addEventListener("wheel", function (evt) {
    if (window.innerWidth > 768) {
      evt.preventDefault();
      container.scrollLeft += evt.deltaY;
    }
  }, { passive: false });