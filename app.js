// Hero Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('opacity-100');
    slides[currentSlide].classList.add('opacity-0');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.remove('opacity-0');
    slides[currentSlide].classList.add('opacity-100');
}

if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Sticky Header
const header = document.getElementById('header');
const logo = document.getElementById('logo');
let lastScroll = 0;

function getLogoHeight() {
    const width = window.innerWidth;
    if (width >= 1024) return '169px'; // Desktop
    if (width >= 768) return '151px';  // Tablet
    return '134px'; // Mobile
}

function getLogoHeightScrolled() {
    const width = window.innerWidth;
    if (width >= 1024) return '134px'; // Desktop scrolled
    if (width >= 768) return '120px';  // Tablet scrolled
    return '106px'; // Mobile scrolled
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.classList.add('shadow-lg');
        if (logo) logo.style.height = getLogoHeightScrolled();
    } else {
        header.classList.remove('shadow-lg');
        if (logo) logo.style.height = ''; // Rimuove style inline, usa classi Tailwind
    }
    lastScroll = currentScroll;
});

// Aggiorna altezza logo al resize (solo se scrollato)
window.addEventListener('resize', () => {
    if (logo && window.pageYOffset > 100) {
        logo.style.height = getLogoHeightScrolled();
    } else if (logo && window.pageYOffset <= 100) {
        logo.style.height = ''; // Rimuove style inline, usa classi Tailwind
    }
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('hidden');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) {
                ans.classList.add('hidden');
                ans.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
            }
        });
        
        // Toggle current FAQ
        answer.classList.toggle('hidden');
        question.querySelector('svg').classList.toggle('rotate-180');
    });
});

// Form Validation
const form = document.getElementById('preventivo-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
		const webhookUrl = 'https://automations.wolfoncloud.com/webhook/501030c6-f9d3-41e9-adfb-45c8cb66cfc1';
        
        // Basic validation
        const nome = form.querySelector('#nome').value.trim();
        const email = form.querySelector('#email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const telefono = form.querySelector('#telefono').value.trim();
		const periodo = form.querySelector('#periodo').value.trim();
		const adulti = form.querySelector('#adulti').value;
		const bambini = form.querySelector('#bambini').value;
		const budget = form.querySelector('#budget').value;
		const note = form.querySelector('#note').value.trim();
		const whatsapp = !!form.querySelector('#whatsapp') && form.querySelector('#whatsapp').checked;
		const privacy = !!form.querySelector('#privacy') && form.querySelector('#privacy').checked;
		const newsletter = !!form.querySelector('#newsletter') && form.querySelector('#newsletter').checked;
        
        if (nome.length < 2) {
            alert('Il nome deve contenere almeno 2 caratteri');
            return;
        }
        
        if (!emailRegex.test(email)) {
            alert('Inserisci un indirizzo email valido');
            return;
        }
		if (!telefono) {
			alert('Inserisci un numero di telefono valido');
			return;
		}
		if (!periodo) {
			alert('Inserisci il periodo preferito');
			return;
		}
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="animate-spin">⏳</span> Invio in corso...';
        
		// Salva temporaneamente per personalizzare la pagina di ringraziamento
		try {
			sessionStorage.setItem('leadName', nome);
			sessionStorage.setItem('leadEmail', email);
		} catch (err) {
			// ignore storage errors
		}
		
		// Prepara i dati per n8n (FormData per evitare problemi CORS)
		const formData = new FormData();
		formData.append('nome', nome);
		formData.append('email', email);
		formData.append('telefono', telefono);
		formData.append('whatsapp', whatsapp ? 'true' : 'false');
		formData.append('periodo', periodo);
		formData.append('adulti', adulti);
		formData.append('bambini', bambini);
		formData.append('budget', budget);
		formData.append('note', note);
		formData.append('privacy', privacy ? 'true' : 'false');
		formData.append('newsletter', newsletter ? 'true' : 'false');
		formData.append('page', window.location.href);
		formData.append('originatedAt', new Date().toISOString());
		formData.append('userAgent', navigator.userAgent);
		// UTM params (se presenti)
		try {
			const usp = new URLSearchParams(window.location.search);
			['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(key => {
				if (usp.get(key)) formData.append(key, usp.get(key));
			});
		} catch (_) {}
		
		// Invia a n8n con modalità più tollerante ai CORS e reindirizza comunque
		try {
			fetch(webhookUrl, {
				method: 'POST',
				body: formData,
				mode: 'no-cors',
				keepalive: true
			}).catch((err) => {
				// Non bloccare l'utente: logga e prosegui
				console.error('Invio al webhook fallito (ignoro per UX):', err);
			});
		} catch (err) {
			// Ignora eventuali eccezioni sincrone
			console.error('Errore imprevisto durante l\'invio al webhook:', err);
		}
		
		// Reindirizza sempre alla pagina di ringraziamento
		setTimeout(() => {
			window.location.href = 'thank-you.html';
		}, 500);
    });
}

// Close success modal
const closeModal = document.getElementById('close-modal');
if (closeModal) {
    closeModal.addEventListener('click', () => {
        document.getElementById('success-modal').classList.add('hidden');
    });
}

// Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
let currentImageIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        lightbox.classList.remove('hidden');
    });
});

// Close lightbox
document.getElementById('close-lightbox')?.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Lightbox navigation
document.getElementById('prev-image')?.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
});

document.getElementById('next-image')?.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
});

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('hidden', i !== index);
    });
}

if (testimonials.length > 0) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 6000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section, article').forEach(el => {
    observer.observe(el);
});
