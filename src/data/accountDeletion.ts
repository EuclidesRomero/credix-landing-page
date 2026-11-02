export interface AccountDeletionSection {
  title: string;
  paragraphs: string[];
  items?: string[];
  steps?: string[];
}

export const accountDeletion: AccountDeletionSection[] = [
  {
    title: "Cómo eliminar tu cuenta",
    paragraphs: [
      "Puedes eliminar tu cuenta de Credix directamente desde la Aplicación. Para proteger tu información, te pediremos confirmar tu identidad antes de proceder.",
    ],
    steps: [
      "Abre la Aplicación y ve a tu perfil o ajustes.",
      "Selecciona la opción “Eliminar cuenta”.",
      "Ingresa tu contraseña actual para confirmar.",
      "Confirma la eliminación.",
    ],
  },
  {
    title: "Si iniciaste sesión con Google",
    paragraphs: [
      "Si tu cuenta se creó con Google Sign-In y no tiene contraseña, deberás volver a confirmar tu identidad con tu proveedor de acceso (Google) antes de eliminar la cuenta.",
    ],
  },
  {
    title: "Qué se elimina",
    paragraphs: [
      "La eliminación de la cuenta es definitiva e irreversible. Se borra de forma permanente la siguiente información:",
    ],
    items: [
      "Tus datos de cuenta y perfil.",
      "Todos tus negocios y su configuración.",
      "Todos tus clientes y su información.",
      "Todas las deudas, pagos y comprobantes.",
      "El historial de actividad y las notificaciones.",
      "Los tokens de acceso y de notificaciones.",
    ],
  },
  {
    title: "Qué pasa con tus archivos",
    paragraphs: [
      "Los archivos asociados a tu cuenta (fotos de perfil, iconos de negocio y comprobantes de pago) se programan para su eliminación del almacenamiento en la nube.",
    ],
  },
  {
    title: "Qué pasa con tu suscripción",
    paragraphs: [
      "Si tienes una suscripción Pro activa, esta se cancela al eliminar tu cuenta. Para evitar cargos futuros, te recomendamos cancelar la suscripción desde la tienda de aplicaciones antes de eliminar la cuenta.",
    ],
  },
  {
    title: "Contacto",
    paragraphs: [
      "Si tienes dudas sobre la eliminación de tu cuenta o necesitas ayuda, escríbenos a paramolabsinfo@gmail.com.",
    ],
  },
];
