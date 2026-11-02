export type PrivacyBlock =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "group"; title: string; items: string[] };

export interface PrivacySection {
  title: string;
  blocks: PrivacyBlock[];
}

export const privacy: PrivacySection[] = [
  {
    title: "1. Introducción",
    blocks: [
      {
        kind: "text",
        text: "Credix (en adelante, “la Aplicación” o “el Servicio”) es una plataforma de gestión de negocios y control de deudas que permite a los propietarios de negocios administrar sus clientes, deudas y pagos de manera eficiente. Esta Política de Privacidad describe cómo recopilamos, utilizamos, protegemos y compartimos sus datos personales en cumplimiento con la Ley 1581 de 2012 y el Decreto 1074 de 2015 de Colombia.",
      },
    ],
  },
  {
    title: "2. Identificación del Responsable del Tratamiento",
    blocks: [
      {
        kind: "list",
        items: [
          "Nombre de la aplicación: Credix",
          "Contacto: paramolabsinfo@gmail.com",
          "Domicilio: No aplica",
          "Teléfono: No aplica",
        ],
      },
    ],
  },
  {
    title: "3. Datos Personales Recopilados",
    blocks: [
      {
        kind: "group",
        title: "3.1 Datos del Propietario",
        items: [
          "Datos de identificación: nombre, primer apellido, segundo apellido (opcional), número de identificación (DNI/CC)",
          "Datos de contacto: correo electrónico",
          "Datos de autenticación: contraseña (almacenada de forma encriptada mediante hash), PIN de seguridad (encriptado)",
          "Datos de suscripción: plan contratado, estado de suscripción, historial de pagos",
          "Datos de perfil: foto de perfil (avatar) opcional",
          "Datos técnicos: token de autenticación, token de notificaciones push (FCM)",
        ],
      },
      {
        kind: "group",
        title: "3.2 Datos del Negocio",
        items: [
          "Nombre del negocio",
          "Dirección del negocio (opcional)",
          "Descripción del negocio (opcional)",
          "Icono/logo del negocio (opcional)",
        ],
      },
      {
        kind: "group",
        title: "3.3 Datos de Clientes (gestionados por el propietario)",
        items: [
          "Nombre completo",
          "Apellido",
          "Dirección",
          "Teléfono",
          "Número de identificación (DNI)",
          "Foto de perfil (opcional)",
        ],
      },
      {
        kind: "group",
        title: "3.4 Datos Financieros y de Deudas",
        items: [
          "Información de deudas creadas",
          "Montos adeudados y pagos realizados",
          "Fechas de vencimiento",
          "Métodos de pago",
          "Comprobantes de pago",
          "Historial de transacciones",
        ],
      },
      {
        kind: "group",
        title: "3.5 Datos de Actividad y Notificaciones",
        items: [
          "Registro de actividades realizadas en la plataforma",
          "Historial de notificaciones enviadas",
          "Metadatos de uso del sistema",
        ],
      },
    ],
  },
  {
    title: "4. Finalidades del Tratamiento de Datos",
    blocks: [
      {
        kind: "text",
        text: "Sus datos personales serán utilizados para las siguientes finalidades:",
      },
      {
        kind: "group",
        title: "4.1 Finalidades Principales",
        items: [
          "Gestión de cuenta: creación, autenticación y mantenimiento de su cuenta de usuario",
          "Administración de negocio: gestión de la información de su negocio y configuración",
          "Gestión de clientes: administración de la información de sus clientes",
          "Control de deudas: registro, seguimiento y gestión de deudas y pagos",
          "Procesamiento de pagos: gestión de suscripciones y pagos a través de Google Play Billing",
          "Notificaciones: envío de alertas sobre deudas por vencer, vencidas y pagos realizados",
        ],
      },
      {
        kind: "group",
        title: "4.2 Finalidades Secundarias",
        items: [
          "Mejora del servicio: análisis de uso para mejorar la funcionalidad de la aplicación",
          "Seguridad: prevención de fraudes y protección de su cuenta",
          "Cumplimiento legal: cumplimiento con obligaciones legales y regulatorias",
          "Soporte técnico: atención de consultas y resolución de problemas",
        ],
      },
    ],
  },
  {
    title: "5. Base Legal para el Tratamiento",
    blocks: [
      {
        kind: "text",
        text: "El tratamiento de sus datos personales se fundamenta en:",
      },
      {
        kind: "list",
        items: [
          "Consentimiento expreso: usted ha autorizado expresamente el tratamiento de sus datos al registrarse en la aplicación",
          "Cumplimiento de obligaciones contractuales: necesario para la prestación de los servicios contratados",
          "Intereses legítimos: para la seguridad, prevención de fraudes y mejora del servicio",
        ],
      },
    ],
  },
  {
    title: "6. Derechos de los Titulares",
    blocks: [
      {
        kind: "text",
        text: "Como titular de sus datos personales, usted tiene los siguientes derechos reconocidos en la Ley 1581 de 2012:",
      },
      {
        kind: "group",
        title: "6.1 Derechos Principales",
        items: [
          "Derecho de acceso: conocer, actualizar y rectificar sus datos personales",
          "Derecho de consulta: solicitar información sobre el tratamiento de sus datos",
          "Derecho de reclamo: presentar reclamaciones por presuntas infracciones a la normativa",
          "Derecho de supresión: solicitar la eliminación de sus datos cuando ya no sean necesarios",
          "Derecho de revocación: revocar el consentimiento otorgado para el tratamiento de sus datos",
          "Derecho de oposición: oponerse al tratamiento de sus datos para fines específicos",
        ],
      },
      {
        kind: "group",
        title: "6.2 Procedimiento para Ejercer Derechos",
        items: [
          "Para ejercer sus derechos, puede enviar una solicitud a paramolabsinfo@gmail.com incluyendo:",
          "Nombre completo e identificación",
          "Descripción clara del derecho que desea ejercer",
          "Documentación que soporte su solicitud (si aplica)",
          "Responderemos su solicitud dentro de los 15 días hábiles siguientes a su recibo",
        ],
      },
    ],
  },
  {
    title: "7. Seguridad de los Datos",
    blocks: [
      {
        kind: "text",
        text: "Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales:",
      },
      {
        kind: "group",
        title: "7.1 Medidas Técnicas",
        items: [
          "Encriptación: contraseñas y PINs almacenados mediante hash con bcrypt",
          "Autenticación: tokens JWT para autenticación segura",
          "Rate limiting: limitación de solicitudes para prevenir ataques",
          "CORS: configuración de dominios permitidos para acceso",
          "PIN de seguridad: opcional para acciones sensibles",
        ],
      },
      {
        kind: "group",
        title: "7.2 Medidas de Almacenamiento",
        items: [
          "Base de datos: PostgreSQL con controles de acceso",
          "Almacenamiento de archivos: AWS S3 (Backblaze B2) para imágenes y documentos",
          "Notificaciones: Firebase Cloud Messaging para alertas push",
        ],
      },
      {
        kind: "group",
        title: "7.3 Medidas Administrativas",
        items: [
          "Acceso restringido al personal autorizado",
          "Capacitación en protección de datos",
          "Procedimientos de respuesta a incidentes",
        ],
      },
    ],
  },
  {
    title: "8. Transferencia Internacional de Datos",
    blocks: [
      {
        kind: "text",
        text: "Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de Colombia. En particular:",
      },
      {
        kind: "list",
        items: [
          "AWS/Backblaze B2: servicios de almacenamiento en la nube",
          "Firebase: servicios de notificaciones de Google",
          "Google Play Billing: procesamiento de pagos y suscripciones",
        ],
      },
      {
        kind: "text",
        text: "Estos proveedores cuentan con certificaciones de seguridad (SOC 2, ISO 27001) y garantizan niveles de protección equivalentes a los establecidos en la legislación colombiana.",
      },
    ],
  },
  {
    title: "9. Terceros con los que Compartimos Datos",
    blocks: [
      {
        kind: "text",
        text: "Compartimos sus datos personales únicamente con:",
      },
      {
        kind: "group",
        title: "9.1 Proveedores de Servicios Esenciales",
        items: [
          "Google Play Billing: procesamiento de pagos y suscripciones",
          "AWS/Backblaze B2: almacenamiento de archivos e imágenes",
          "Firebase: servicio de notificaciones push",
          "Proveedores de correo electrónico: para envío de notificaciones y verificaciones",
        ],
      },
      {
        kind: "group",
        title: "9.2 Autoridades Competentes",
        items: [
          "Podremos compartir sus datos cuando sea requerido por autoridades judiciales o administrativas competentes, en cumplimiento de obligaciones legales.",
        ],
      },
    ],
  },
  {
    title: "10. Retención de Datos",
    blocks: [
      {
        kind: "group",
        title: "10.1 Periodos de Retención",
        items: [
          "Datos de propietarios: mientras la cuenta esté activa y hasta 2 años después de su eliminación",
          "Datos de negocio: mientras el negocio esté activo y hasta 2 años después",
          "Datos de clientes: según definición del propietario, mínimo 2 años después de la última interacción",
          "Datos financieros: mínimo 5 años para cumplimiento de obligaciones fiscales",
          "Datos de actividad: 1 año para análisis y mejora del servicio",
        ],
      },
      {
        kind: "group",
        title: "10.2 Criterios de Eliminación",
        items: [
          "Los datos serán eliminados cuando:",
          "Ya no sean necesarios para las finalidades del tratamiento",
          "El titular solicite su supresión (salvo obligación legal de retención)",
          "Finalice el contrato de prestación de servicios",
        ],
      },
    ],
  },
  {
    title: "11. Cookies y Tecnologías Similares",
    blocks: [
      {
        kind: "text",
        text: "La aplicación utiliza:",
      },
      {
        kind: "list",
        items: [
          "Cookies de autenticación: para mantener su sesión activa",
          "Local storage: para almacenar preferencias y configuraciones",
          "Tokens de notificaciones: para envío de alertas push",
        ],
      },
      {
        kind: "text",
        text: "Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del servicio.",
      },
    ],
  },
  {
    title: "12. Cambios a la Política de Privacidad",
    blocks: [
      {
        kind: "text",
        text: "Nos reservamos el derecho de actualizar esta política de privacidad. Los cambios significativos serán notificados:",
      },
      {
        kind: "list",
        items: [
          "Mediante correo electrónico",
          "A través de la aplicación",
          "Con al menos 30 días de antelación a su entrada en vigencia",
        ],
      },
    ],
  },
  {
    title: "13. Contacto",
    blocks: [
      {
        kind: "text",
        text: "Para cualquier consulta, reclamo o solicitud relacionada con sus datos personales, puede contactarnos en:",
      },
      {
        kind: "list",
        items: [
          "Correo electrónico: paramolabsinfo@gmail.com",
          "Teléfono: No aplica",
          "Dirección: No aplica",
        ],
      },
    ],
  },
  {
    title: "14. Legislación Aplicable",
    blocks: [
      {
        kind: "text",
        text: "Esta política se rige por las disposiciones contenidas en:",
      },
      {
        kind: "list",
        items: [
          "Ley 1581 de 2012",
          "Decreto 1074 de 2015",
          "Decreto 1377 de 2013",
          "Y demás normas que las modifiquen, adicionen o sustituyan",
        ],
      },
      {
        kind: "text",
        text: "Fecha de entrada en vigencia: Agosto 2026. Al usar la aplicación Credix, usted declara haber leído, entendido y aceptado esta Política de Privacidad.",
      },
    ],
  },
];
