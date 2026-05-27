/*=============== SHOW & CLOSE MENU ===============*/
const navMenu   = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose  = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}
if(navClose){
   navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')
navLink.forEach(n => n.addEventListener('click', () => {
   navMenu.classList.remove('show-menu')
}))

/*=============== HOME SECTION ===============*/
// Data Ticker
const tickerItems = [
  'AGREVATA', 'UNDIP 2025', 'KIMIA INDUSTRI', 'RISET & INOVASI',
  'LINGKUNGAN BERKELANJUTAN', 'TEKNOLOGI HIJAU',
  'AGREVATA', 'UNDIP 2025', 'KIMIA INDUSTRI', 'RISET & INOVASI',
  'LINGKUNGAN BERKELANJUTAN', 'TEKNOLOGI HIJAU'
];
const tickerEl = document.getElementById('tickerInner');
if (tickerEl) {
  tickerItems.forEach((t, i) => {
    const span = document.createElement('span');
    span.className = 'ticker-item';
    span.textContent = t;
    tickerEl.appendChild(span);
    if (i < tickerItems.length - 1) {
      const sep = document.createElement('span');
      sep.className = 'ticker-sep';
      sep.textContent = '◆';
      tickerEl.appendChild(sep);
    }
  });
}

// Diagonal Lines
const diagEl = document.getElementById('diagLines');
if (diagEl) {
  for (let i = 0; i < 8; i++) {
    const line = document.createElement('div');
    line.className = 'diag-line';
    line.style.left = (i * 14) + '%';
    diagEl.appendChild(line);
  }
}

// Dot Canvas
const dotCanvas = document.getElementById('dotCanvas');
const homeSection = document.querySelector('.home');
if (dotCanvas && homeSection) {
  function resizeDotCanvas() {
    dotCanvas.width = homeSection.offsetWidth;
    dotCanvas.height = homeSection.offsetHeight;
    const ctx = dotCanvas.getContext('2d');
    ctx.clearRect(0, 0, dotCanvas.width, dotCanvas.height);
    const cols = Math.ceil(dotCanvas.width / 28);
    const rows = Math.ceil(dotCanvas.height / 28);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.85) {
          ctx.beginPath();
          ctx.arc(c * 28 + 14, r * 28 + 14, 1, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(74,222,128,0.15)';
          ctx.fill();
        }
      }
    }
  }
  resizeDotCanvas();
  window.addEventListener('resize', resizeDotCanvas);
}

/*=============== TENTANG KITA SLIDER ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel(index) {
        // Bereskan kelas aktif sebelumnya
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        currentSlide = index;

        // Aktifkan slide dan dot baru
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= totalSlides) nextIndex = 0;
        updateCarousel(nextIndex);
    });

    prevBtn.addEventListener("click", () => {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = totalSlides - 1;
        updateCarousel(prevIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const targetIndex = parseInt(e.target.getAttribute("data-index"));
            updateCarousel(targetIndex);
        });
    });
});

// Floating dots
const container = document.getElementById('floatingDotsContainer');
for (let i = 0; i < 18; i++) {
    const dot = document.createElement('div');
    dot.className = 'floating-dot';
    const size = Math.random() * 4 + 2;
    dot.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * 30}%;
        animation-duration:${Math.random() * 6 + 5}s;
        animation-delay:${Math.random() * 6}s;
    `;
    container.appendChild(dot);
}

/*=============== PROJEK SECTION ===============*/ 
// Projek diagonal stripes
const projStripes = document.getElementById('projStripes');
if (projStripes) {
  for (let i = 0; i < 10; i++) {
    const d = document.createElement('div');
    d.className = 'proj-stripe';
    d.style.left = (i * 12) + '%';
    projStripes.appendChild(d);
  }
}


/*=============== Contact ACCORDION ===============*/ 
const hubForm = document.querySelector('.hub-form');
if (hubForm) {
  hubForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = hubForm.querySelector('.hub-btn');
    const data = new FormData(hubForm);

    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    const res = await fetch(hubForm.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      btn.innerHTML = 'Terkirim ✓';
      btn.style.background = '#22c55e';
      hubForm.reset();
    } else {
      btn.innerHTML = 'Gagal, coba lagi';
      btn.style.background = '#ef4444';
      btn.disabled = false;
    }
  });
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/
