/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO SITE — Essenza Beauty & Wellness
 * ============================================================
 *  Este é o ÚNICO arquivo que precisa ser editado para
 *  personalizar o site para um novo cliente.
 *
 *  Altere os valores abaixo: nome, WhatsApp, Instagram,
 *  endereço, horários, serviços, depoimentos e textos.
 *  Não é necessário mexer no HTML, CSS ou nos outros
 *  arquivos JavaScript.
 * ============================================================
 */

window.SITE_CONFIG = {

  // ---------- IDENTIDADE ----------
  business: {
    name: "Essenza Beauty & Wellness",
    shortName: "Essenza",
    tagline: "Beleza, cuidado e bem-estar em um só lugar.",
    // Usado em <title> e meta description (SEO)
    seoTitle: "Essenza Beauty & Wellness | Beleza, Estética e Bem-Estar",
    seoDescription: "Cuidados de beleza, estética e bem-estar para você. Conheça nossos serviços e agende seu horário.",
    favicon: "🌿"
  },

  // ---------- CONTATO (centralizado — não duplicar pelo código) ----------
  contact: {
    // Apenas números, com código do país e DDD. Ex: 55 11 99999-9999 -> "5511999999999"
    whatsappNumber: "5511999999999",
    whatsappDefaultMessage: "Olá! Gostaria de conhecer os serviços e agendar um horário.",
    instagramHandle: "@essenzabeauty",
    instagramUrl: "https://instagram.com/essenzabeauty",
    address: "Rua Exemplo, 123 — São Paulo/SP",
    // Link "Como chegar" — trocar pelo link real do Google Maps quando disponível
    mapsDirectionsUrl: "https://maps.google.com/?q=Rua+Exemplo+123+São+Paulo+SP",
    // Cole aqui a URL de incorporação (embed) do Google Maps quando tiver o endereço real.
    // Enquanto estiver vazio, o site mostra um espaço reservado elegante no lugar do mapa.
    mapsEmbedUrl: ""
  },

  hours: [
    { dias: "Segunda a Sexta", horario: "09h às 19h" },
    { dias: "Sábado", horario: "09h às 15h" },
    { dias: "Domingo", horario: "Fechado" }
  ],

  // ---------- HERO ----------
  hero: {
    title: "Seu momento de cuidado começa aqui.",
    subtitle: "Tratamentos pensados para realçar sua beleza e proporcionar uma experiência de cuidado, relaxamento e bem-estar.",
    primaryCta: "Agendar pelo WhatsApp",
    secondaryCta: "Conheça nossos serviços"
  },

  // ---------- SOBRE ----------
  about: {
    title: "Cuidar de você também é uma forma de se amar.",
    text: "Na Essenza Beauty & Wellness, acreditamos que beleza e bem-estar caminham juntos. Nosso espaço foi pensado para proporcionar momentos de cuidado, relaxamento e autoestima, oferecendo tratamentos personalizados em um ambiente acolhedor e tranquilo.",
    highlights: [
      { title: "Atendimento personalizado", text: "Cada cliente é ouvida antes de qualquer procedimento." },
      { title: "Ambiente acolhedor", text: "Um espaço pensado para relaxar do início ao fim." },
      { title: "Cuidado em cada detalhe", text: "Da recepção ao pós-atendimento." }
    ]
  },

  // ---------- SERVIÇOS ----------
  // icon: chave que corresponde a um ícone SVG definido em js/script.js (função getServiceIcon)
  services: [
    {
      icon: "drenagem",
      name: "Drenagem Linfática",
      description: "Técnica voltada ao bem-estar, relaxamento e sensação de leveza."
    },
    {
      icon: "massagem",
      name: "Massagem Relaxante",
      description: "Um momento de cuidado para aliviar tensões e proporcionar relaxamento."
    },
    {
      icon: "limpeza",
      name: "Limpeza de Pele",
      description: "Cuidados para higienização, revitalização e manutenção da pele."
    },
    {
      icon: "spaCabelo",
      name: "Spa dos Cabelos",
      description: "Experiência de cuidado e revitalização dos fios e do couro cabeludo."
    },
    {
      icon: "estrias",
      name: "Regeneração de Estrias",
      description: "Procedimentos estéticos voltados para melhorar a aparência e textura da pele com estrias."
    },
    {
      icon: "spaPes",
      name: "Spa dos Pés",
      description: "Cuidado, hidratação e relaxamento para proporcionar uma experiência especial aos seus pés."
    }
  ],

  // ---------- DESTAQUE (seção intermediária) ----------
  highlight: {
    title: "Reserve um tempo para você.",
    text: "Entre a rotina, os compromissos e as responsabilidades, também existe espaço para cuidar de si.",
    cta: "Agendar meu horário"
  },

  // ---------- GALERIA ----------
  // Cada item representa um espaço de imagem. Basta trocar o "icon" por uma
  // foto real (ver README.md, seção "Substituindo pelas fotos reais").
  gallery: [
    { photo: "img/hero-spa.jpg", label: "Ambiente" },
    { icon: "spaCabelo", label: "Spa dos cabelos" },
    { photo: "img/galeria-massagem.jpg", label: "Massagem" },
    { icon: "limpeza", label: "Cuidados com a pele" },
    { photo: "img/sobre-ambiente.jpg", label: "Detalhes do espaço" },
    { icon: "recepcao", label: "Atendimento" },
    { icon: "spaPes", label: "Spa dos pés" },
    { photo: "img/destaque-momento.jpg", label: "Autocuidado" }
  ],

  // ---------- DEPOIMENTOS ----------
  // ⚠️ DADOS DE DEMONSTRAÇÃO — substituir pelos depoimentos reais do cliente.
  testimonials: [
    { text: "Um espaço maravilhoso! Fui muito bem atendida e saí me sentindo renovada.", name: "Mariana S." },
    { text: "Ambiente lindo, atendimento acolhedor e uma experiência incrível.", name: "Camila R." },
    { text: "Adorei o cuidado em cada detalhe. Com certeza vou voltar.", name: "Juliana M." }
  ],

  // ---------- CONTATO (seção final) ----------
  contactSection: {
    title: "Vamos cuidar de você?",
    text: "Entre em contato e agende seu horário."
  },

  // ---------- RODAPÉ ----------
  footer: {
    text: "Beleza, cuidado e bem-estar.",
    copyright: "© 2026 Essenza Beauty & Wellness. Todos os direitos reservados."
  }
};
