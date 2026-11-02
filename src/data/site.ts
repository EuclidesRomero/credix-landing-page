export const site = {
  name: "Credix",
  tagline: "Controla tus fiados y cobra a tiempo",
  description:
    "Credix es la app para negocios que venden fiado. Registra tus deudas, recibe recordatorios automáticos de cobro y recupera el control de lo que te deben, sin cuadernos ni papeles.",
  nav: [
    { label: "Producto", href: "/#producto" },
    { label: "Funciones", href: "/#funciones" },
    { label: "Cómo funciona", href: "/#como-funciona" },
    { label: "Planes", href: "/#planes" },
    { label: "Preguntas", href: "/#preguntas" },
    { label: "Cartón", href: "/carton" },
  ],
  cta: { label: "Empezar gratis", href: "/#planes" },
  contact: {
    email: "paramolabsinfo@gmail.com",
  },
  legal: {
    privacy: { label: "Política de Privacidad", href: "/privacidad" },
    terms: { label: "Términos y Condiciones", href: "/terminos" },
    accountDeletion: { label: "Eliminar cuenta", href: "/eliminar-cuenta" },
  },
} as const;
