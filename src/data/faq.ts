export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "¿Qué es Credix y para quién es?",
    answer:
      "Credix es una app para dueños de negocios que venden fiado. Reemplaza el cuaderno de papel: registras las deudas, los pagos y los clientes, y la app te recuerda cuándo cobrar y te muestra cuánto te deben en total.",
  },
  {
    question: "¿Cómo me ayuda a no perder plata?",
    answer:
      "El cuaderno no avisa cuándo vence una deuda ni quién se atrasó. Credix te envía alertas de deudas por vencer y vencidas, te recuerda cobrar y deja todo el historial trazable para que ninguna deuda se quede en el olvido.",
  },
  {
    question: "¿Puedo usar Credix gratis?",
    answer:
      "Sí. El plan Gratis te permite manejar hasta 15 clientes, 15 deudas, 10 comprobantes y 1 negocio, sin pagar nada. Cuando necesites más, pasas a Pro con clientes, deudas y negocios ilimitados.",
  },
  {
    question: "¿Qué incluye el plan Pro?",
    answer:
      "Pro quita todos los límites y suma protección con PIN, registro de actividad, límite de crédito por cliente con alertas, panel de estadísticas, enlaces para compartir el estado de cuenta, recordatorios automáticos, historial avanzado y exportación a PDF.",
  },
  {
    question: "¿Puedo manejar más de un negocio?",
    answer:
      "Sí. En una misma cuenta puedes crear varios negocios y cambiar entre ellos en un toque. Cada negocio mantiene sus propios clientes, deudas e historial por separado.",
  },
  {
    question: "¿Cómo cobro a mis clientes?",
    answer:
      "Cuando una deuda está por vencer, Credix te avisa y te deja enviar el recordatorio por WhatsApp en un toque. Al recibir el pago, lo registras en efectivo o transferencia con su comprobante y el saldo queda al día.",
  },
  {
    question: "¿Mis clientes necesitan la app?",
    answer:
      "No. Puedes compartir el estado de cuenta de una deuda mediante un enlace web. Tu cliente lo abre desde el navegador y ve cuánto debe y qué ha pagado, sin instalar nada ni crear una cuenta.",
  },
  {
    question: "¿Qué pasa con mi información?",
    answer:
      "Los comprobantes y el historial quedan respaldados en la nube. Además, puedes activar un PIN para proteger las acciones sensibles de tu negocio y revisar el registro de actividad para saber quién hizo cada cambio.",
  },
];
