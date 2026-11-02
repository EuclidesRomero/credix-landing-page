export interface Feature {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
}

export const features: Feature[] = [
  {
    id: "registra",
    kicker: "Registra",
    title: "Adiós al cuaderno de fiado.",
    description:
      "Crea deudas y registra pagos en segundos. Cada cliente queda con su saldo, su historial y su fecha de vencimiento, siempre al día y sin papeles que se pierdan o se borren.",
    bullets: [
      "Crea una deuda con monto y plazo en un par de toques",
      "Registra pagos en efectivo o transferencia con comprobante",
      "Saldo, historial y vencimiento siempre actualizados",
    ],
    image: "/images/payment.png",
    imageAlt: "Pantalla de Credix para registrar un pago",
    secondaryImage: "/images/payment-ticket.jpeg",
    secondaryAlt: "Comprobante de pago generado por Credix",
  },
  {
    id: "cobra",
    kicker: "Cobra",
    title: "Que no se te olvide cobrar.",
    description:
      "Credix te avisa antes de que una deuda venza y te recuerda las que ya están vencidas. Con un toque, envías el recordatorio por WhatsApp a tu cliente.",
    bullets: [
      "Alertas de deudas por vencer y vencidas",
      "Recordatorios automáticos de cobro",
      "Contacto directo con el cliente por WhatsApp",
    ],
    image: "/images/deuda-info.png",
    imageAlt: "Detalle de una deuda con su fecha de vencimiento en Credix",
  },
  {
    id: "protege",
    kicker: "Protege",
    title: "Tu negocio, blindado con PIN.",
    description:
      "Bloquea las acciones sensibles con un PIN y revisa quién hizo qué con el registro de actividad completo. Nada se borra ni se modifica sin que lo sepas.",
    bullets: [
      "Protege acciones sensibles con un PIN",
      "Registro de actividad (auditoría completa)",
      "Límite de crédito por cliente con alertas",
    ],
    image: "/images/sensity-actions.png",
    imageAlt: "Pantalla de Credix para proteger acciones sensibles con PIN",
  },
];
