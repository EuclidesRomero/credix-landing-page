export interface TermsSection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

export const terms: TermsSection[] = [
  {
    title: "1. Aceptación de los Términos",
    paragraphs: [
      "Al descargar, instalar o usar la aplicación Credix (“la Aplicación”), aceptas estos Términos y Condiciones. Si no estás de acuerdo con ellos, no uses la Aplicación.",
    ],
  },
  {
    title: "2. Descripción del Servicio",
    paragraphs: [
      "Credix es una plataforma de gestión de negocios y control de deudas que permite a los propietarios de negocios administrar sus clientes, deudas y pagos de manera eficiente. La Aplicación permite registrar clientes, crear deudas, registrar pagos, consultar historiales y recibir notificaciones de vencimientos.",
    ],
  },
  {
    title: "3. Cuentas y Registro",
    paragraphs: [
      "Para usar Credix debes crear una cuenta. Eres responsable de mantener la confidencialidad de tu contraseña y de tu PIN de seguridad, así como de todas las actividades que ocurran en tu cuenta.",
    ],
    items: [
      "Debes proporcionar información veraz, actualizada y completa.",
      "Puedes iniciar sesión con correo y contraseña o con tu cuenta de Google.",
      "Eres responsable de la información de tus clientes que registres en la Aplicación.",
    ],
  },
  {
    title: "4. Planes y Pagos",
    paragraphs: [
      "Credix ofrece un plan Gratis y un plan Pro. El plan Gratis no tiene costo. El plan Pro tiene un costo de $9.900 COP al mes y se factura como suscripción a través de Google Play Billing.",
    ],
    items: [
      "Plan Gratis: hasta 15 clientes, 15 deudas, 10 comprobantes y 1 negocio.",
      "Plan Pro: clientes, deudas, comprobantes y negocios ilimitados, más funciones avanzadas.",
      "Las suscripciones se renuevan automáticamente y puedes cancelarlas en cualquier momento desde la tienda de aplicaciones.",
    ],
  },
  {
    title: "5. Uso Permitido",
    paragraphs: [
      "Aceptas usar Credix únicamente para la gestión de tu propio negocio y de forma lícita.",
    ],
    items: [
      "No usarás la Aplicación para actividades ilegales o fraudulentas.",
      "No accederás a cuentas o información que no te pertenezca.",
      "No intentarás eludir las medidas de seguridad de la Aplicación.",
    ],
  },
  {
    title: "6. Privacidad y Datos",
    paragraphs: [
      "El tratamiento de tus datos personales se rige por nuestra Política de Privacidad, que forma parte de estos Términos. Te recomendamos leerla.",
    ],
  },
  {
    title: "7. Eliminación de Cuenta",
    paragraphs: [
      "Puedes solicitar la eliminación de tu cuenta desde la Aplicación. La eliminación es definitiva e implica borrar tus negocios, clientes, deudas y pagos. Consulta la página de eliminación de cuenta para más detalle.",
    ],
  },
  {
    title: "8. Disponibilidad del Servicio",
    paragraphs: [
      "Trabajamos para que Credix esté disponible de forma continua, pero no garantizamos un funcionamiento ininterrumpido. Podemos realizar mantenimientos, actualizaciones o cambios que afecten temporalmente la disponibilidad.",
    ],
  },
  {
    title: "9. Modificaciones a los Términos",
    paragraphs: [
      "Podemos actualizar estos Términos. Los cambios significativos serán notificados a través de la Aplicación o por correo electrónico.",
    ],
  },
  {
    title: "10. Contacto",
    paragraphs: [
      "Para cualquier consulta sobre estos Términos, escríbenos a paramolabsinfo@gmail.com.",
    ],
  },
  {
    title: "11. Legislación Aplicable",
    paragraphs: [
      "Estos Términos se rigen por las leyes de la República de Colombia, incluyendo la Ley 1581 de 2012 y el Decreto 1074 de 2015.",
    ],
  },
];
