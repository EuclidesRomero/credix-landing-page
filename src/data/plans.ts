export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  popular: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Gratis",
    price: "$0",
    period: "para siempre",
    description: "Ideal para probar y organizar un negocio pequeño.",
    cta: "Empezar gratis",
    popular: false,
    features: [
      "Hasta 15 clientes",
      "Hasta 15 deudas",
      "Hasta 10 fotos o comprobantes",
      "1 negocio",
      "Registro de clientes y pagos",
      "Control básico de deudas",
      "Historial simplificado",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9.900",
    period: "por mes",
    description: "Para negocios que cobran fiado a diario y no pueden perder control ni plata.",
    cta: "Suscribirme a Pro",
    popular: true,
    features: [
      "Clientes, deudas y comprobantes ilimitados",
      "Varios negocios en la misma cuenta",
      "Protección con PIN en acciones sensibles",
      "Registro de actividad (auditoría completa)",
      "Congelar clientes con deuda bloqueada",
      "Límite de crédito por cliente con alertas",
      "Notificaciones de deudas por vencer y vencidas",
      "Panel de estadísticas: cobros, mora y vencimientos",
      "Enlaces para compartir el estado de cuenta",
      "Historial avanzado de deudas del negocio",
      "Comprobantes respaldados en la nube",
      "Recordatorios automáticos de cobro",
      "Exportar reportes en PDF",
    ],
  },
];
