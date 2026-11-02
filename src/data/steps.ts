export interface Step {
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    title: "Crea tu negocio",
    description:
      "Descarga Credix y registra tu negocio con tu cuenta. En menos de un minuto ya estás listo para empezar.",
  },
  {
    title: "Registra a tus clientes",
    description:
      "Agrega a tus clientes de fiado con su nombre y teléfono. Quedan guardados para volver a usarlos cuando quieras.",
  },
  {
    title: "Crea la deuda",
    description:
      "Anota el monto, el plazo y listo. Credix calcula el vencimiento y deja todo organizado en el historial del cliente.",
  },
  {
    title: "Cobra a tiempo",
    description:
      "Recibe los recordatorios cuando toque cobrar. Registra el pago, envía el comprobante y el saldo queda al día solo.",
  },
];
