// ===== Navigation =====
const header = document.getElementById('header')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50)
})

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open')
})

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'))
})

// ===== Counter Animation =====
function animateCounter(el, target, duration = 2000) {
  const start = performance.now()
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * target).toLocaleString()
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEl = entry.target.querySelector('.stat-number')
      const target = parseInt(numEl.dataset.count, 10)
      animateCounter(numEl, target)
      statObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

document.querySelectorAll('.stat-item').forEach(item => statObserver.observe(item))

// ===== Scroll Reveal =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('[data-animate]').forEach(el => revealObserver.observe(el))

document.querySelectorAll('.about-card, .partner-logo-item, .brand-logo-item, .activity-item').forEach((el, i) => {
  el.setAttribute('data-animate', '')
  el.style.transitionDelay = `${(i % 6) * 0.08}s`
  revealObserver.observe(el)
})

// ===== Activity Tabs =====
document.querySelectorAll('.activity-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.activity-tab').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.activity-panel').forEach(p => p.classList.remove('active'))
    tab.classList.add('active')
    document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active')
  })
})

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightboxImg')
const lightboxClose = document.getElementById('lightboxClose')

document.querySelectorAll('.activity-item img, .about-image img, .advantage-image img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src
    lightboxImg.alt = img.alt
    lightbox.classList.add('active')
    document.body.style.overflow = 'hidden'
  })
})

function closeLightbox() {
  lightbox.classList.remove('active')
  document.body.style.overflow = ''
}

lightboxClose.addEventListener('click', closeLightbox)
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox()
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox()
})

// ===== Smooth active nav highlight =====
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-menu a')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id')
    }
  })
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--purple)' : ''
    link.style.background = link.getAttribute('href') === `#${current}` ? 'var(--purple-bg)' : ''
  })
})
