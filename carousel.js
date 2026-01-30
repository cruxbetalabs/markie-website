// Carousel functionality - 3 images at a time
let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicator');
const caption = document.querySelector('.carousel-caption');
const totalSlides = items.length;

// Captions for each slide
const captions = [
    '<strong>Snap, Speak, Sorted</strong> — Your home for quick expense capture',
    '<strong>All Your Expenses, Finally Tidy</strong> — Clean list view with smart organization',
    '<strong>Spot Trends Without Effort</strong> — Calendar heatmap shows spending patterns',
    '<strong>Your Spending Explained</strong> — Visual insights that make sense',
    '<strong>Your Spending Explained</strong> — Deeper analytics at a glance',
    '<strong>Edit Anything, Anytime</strong> — Full control over every detail',
    '<strong>Talk. We Handle the Rest</strong> — Voice commands for hands-free editing'
];

function updateCarousel() {
    // Calculate offset to center the current slide
    const container = document.querySelector('.carousel-container');
    const itemWidth = items[0].offsetWidth;
    const gap = 40;
    const containerWidth = container.offsetWidth;

    // Calculate position to center the current item
    // Item n's center is at: n * (itemWidth + gap) + itemWidth/2
    // We want that center at containerWidth/2
    const itemCenter = currentSlide * (itemWidth + gap) + itemWidth / 2;
    const targetCenter = containerWidth / 2;
    const offset = targetCenter - itemCenter;

    track.style.transform = `translateX(${offset}px)`;

    // Update center state for scaling/opacity
    items.forEach((item, index) => {
        item.classList.toggle('center', index === currentSlide);
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });

    // Update caption
    caption.innerHTML = captions[currentSlide];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Event listeners
document.querySelector('.carousel-btn-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-btn-prev').addEventListener('click', prevSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Initialize
updateCarousel();
