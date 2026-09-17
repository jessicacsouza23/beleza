/**
 * Essenza Beauty & Wellness — script.js
 * Lê SITE_CONFIG (config.js) e preenche as partes do site que
 * dependem de dados centralizados: WhatsApp, Instagram, endereço,
 * horários, serviços, depoimentos e galeria. Também cuida do
 * menu mobile, do cabeçalho fixo e das transições sutis de entrada.
 */

(function () {
  "use strict";

  const cfg = window.SITE_CONFIG;

  /* -------------------- Ícones lineares (sistema de ilustração) -------------------- */
  /* Em vez de fotos de banco genéricas, o site usa um conjunto coeso de
     ilustrações lineares em tom dourado/rosé — a identidade visual do site.
     Quando o cliente tiver fotos reais do espaço, basta trocar cada
     .media-frame por uma <img>: ver README.md. */
  const ICONS = {
    drenagem: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6c6 8 12 15 12 23a12 12 0 1 1-24 0c0-8 6-15 12-23Z"/><path d="M24 20v18"/></svg>',
    massagem: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 28c0-8 6-14 14-14s14 6 14 14"/><path d="M14 28v4a10 10 0 0 0 20 0v-4"/><path d="M18 40h12"/></svg>',
    limpeza: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="22" r="10"/><path d="M24 32v8"/><path d="M18 44h12"/></svg>',
    spaCabelo: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 10c6 4 6 8 0 12s-6 8 0 12 6 8 0 12"/><path d="M24 10c6 4 6 8 0 12s-6 8 0 12 6 8 0 12"/><path d="M34 10c6 4 6 8 0 12s-6 8 0 12 6 8 0 12"/></svg>',
    estrias: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 32c6-14 26-14 32 0"/><path d="M14 22c4-3 16-3 20 0"/></svg>',
    spaPes: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8c-4 6-6 12-4 18s2 10-2 16"/><path d="M28 10c4 5 5 11 3 17s-1 9 3 15"/></svg>',
    ambiente: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 40V20l16-12 16 12v20"/><path d="M20 40V28h8v12"/></svg>',
    detalhe: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12Z"/></svg>',
    recepcao: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="16" r="6"/><path d="M12 40c0-8 5-14 12-14s12 6 12 14"/></svg>',
    autocuidado: '<svg viewBox="0 0 48 48" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M24 40s-13-8-13-19a8 8 0 0 1 13-6 8 8 0 0 1 13 6c0 11-13 19-13 19Z"/></svg>'
  };

  function iconSvg(key) {
    return ICONS[key] || ICONS.autocuidado;
  }

  /* -------------------- WhatsApp -------------------- */
  function whatsappLink(message) {
    const msg = encodeURIComponent(message || cfg.contact.whatsappDefaultMessage);
    return `https://wa.me/${cfg.contact.whatsappNumber}?text=${msg}`;
  }

  function wireWhatsappButtons() {
    document.querySelectorAll("[data-whatsapp]").forEach((el) => {
      const customMsg = el.getAttribute("data-whatsapp-message");
      el.setAttribute("href", whatsappLink(customMsg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  function wireInstagramLinks() {
    document.querySelectorAll("[data-instagram]").forEach((el) => {
      el.setAttribute("href", cfg.contact.instagramUrl);
      el.textContent = cfg.contact.instagramHandle;
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-instagram-link-only]").forEach((el) => {
      el.setAttribute("href", cfg.contact.instagramUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  function wireTextFields() {
    document.querySelectorAll("[data-field]").forEach((el) => {
      const path = el.getAttribute("data-field").split(".");
      let value = cfg;
      path.forEach((p) => { value = value ? value[p] : undefined; });
      if (value !== undefined) el.textContent = value;
    });
  }

  function wireHrefFields() {
    document.querySelectorAll("[data-href-field]").forEach((el) => {
      const path = el.getAttribute("data-href-field").split(".");
      let value = cfg;
      path.forEach((p) => { value = value ? value[p] : undefined; });
      if (value) el.setAttribute("href", value);
    });
  }

  /* -------------------- Renderização de listas -------------------- */
  function renderServices() {
    const grid = document.getElementById("service-grid");
    if (!grid) return;
    grid.innerHTML = cfg.services.map((s) => `
      <article class="service-card reveal">
        <div class="service-icon">${iconSvg(s.icon)}</div>
        <h3>${s.name}</h3>
        <p>${s.description}</p>
        <a class="link-underline" data-whatsapp
           data-whatsapp-message="Olá! Gostaria de saber mais sobre o serviço de ${s.name}."
           href="#">Quero saber mais</a>
      </article>
    `).join("");
  }

  function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;
    grid.innerHTML = cfg.gallery.map((g) => {
      const inner = g.photo
        ? `<img src="${g.photo}" alt="${g.label}" loading="lazy">`
        : `${iconSvg(g.icon)}<span class="frame-label">${g.label}</span>`;
      return `
      <figure class="gallery-item reveal">
        <div class="media-frame" role="img" aria-label="${g.label}">
          ${inner}
        </div>
      </figure>
    `;
    }).join("");
  }

  function renderTestimonials() {
    const grid = document.getElementById("testimonial-grid");
    if (!grid) return;
    grid.innerHTML = cfg.testimonials.map((t) => `
      <blockquote class="testimonial-card reveal">
        <span class="testimonial-mark" aria-hidden="true">&ldquo;</span>
        <p>${t.text}</p>
        <cite class="testimonial-name">${t.name}</cite>
      </blockquote>
    `).join("");
  }

  function renderHours() {
    const list = document.getElementById("hours-list");
    if (list) {
      list.innerHTML = cfg.hours.map((h) => `<li><span>${h.dias}</span><span>${h.horario}</span></li>`).join("");
    }
    const summary = document.getElementById("contact-hours-today");
    if (summary && cfg.hours[0]) {
      summary.textContent = `${cfg.hours[0].dias}, ${cfg.hours[0].horario}`;
    }
  }

  function renderMap() {
    const mapBox = document.getElementById("location-map");
    if (!mapBox) return;
    if (cfg.contact.mapsEmbedUrl) {
      mapBox.innerHTML = `<iframe src="${cfg.contact.mapsEmbedUrl}" loading="lazy" title="Mapa de localização"></iframe>`;
    } else {
      mapBox.innerHTML = `${iconSvg("ambiente")}<span class="frame-label" style="position:static;margin-top:14px;">Mapa em breve</span>`;
      mapBox.style.flexDirection = "column";
      mapBox.style.gap = "8px";
    }
  }

  /* -------------------- SEO dinâmico (título/descrição) -------------------- */
  function applySeo() {
    if (cfg.business.seoTitle) document.title = cfg.business.seoTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && cfg.business.seoDescription) desc.setAttribute("content", cfg.business.seoDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", cfg.business.seoTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", cfg.business.seoDescription);
  }

  /* -------------------- Interações de UI -------------------- */
  function setupHeader() {
    const header = document.getElementById("site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  }

  function setYear() {
    // mantém o rodapé simples; ano vem do config para o cliente controlar
  }

  /* -------------------- Inicialização -------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    if (!cfg) return;
    applySeo();
    renderServices();
    renderGallery();
    renderTestimonials();
    renderHours();
    renderMap();
    wireTextFields();
    wireHrefFields();
    wireWhatsappButtons();
    wireInstagramLinks();
    setupHeader();
    setupMobileMenu();
    setupReveal();
  });
})();
