export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: "shield",
    title: "Tu plata, protegida",
    description:
      "Bloquea acciones sensibles con un PIN y revisa quién hizo qué con el registro de actividad completo. Tu negocio queda auditado.",
  },
  {
    icon: "cloud",
    title: "Nada se pierde",
    description:
      "Los comprobantes de pago y el historial quedan respaldados en la nube. Ya no dependes de un cuaderno que se moja, se rompe o se extravía.",
  },
  {
    icon: "layers",
    title: "Varios negocios, una cuenta",
    description:
      "Maneja todos tus negocios desde la misma cuenta y cambia entre ellos en un toque. Cada uno con sus clientes y sus deudas por separado.",
  },
  {
    icon: "share",
    title: "Cuentas claras con tus clientes",
    description:
      "Comparte el estado de cuenta de una deuda por enlace. Tu cliente ve cuánto debe y qué ha pagado, sin llamadas ni malentendidos.",
  },
];
