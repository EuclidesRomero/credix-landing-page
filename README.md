# Credix Web — Landing page comercial

Landing page estática y comercial para **Credix**, una app de control de fiados y cobranza para negocios pequeños. Incluye páginas legales dedicadas.

## Requisitos

- Node.js 20.19+ (recomendado 22)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7 (páginas dedicadas)
- Lucide React (iconografía)

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Landing comercial (hero, funciones, planes, FAQ…) |
| `/privacidad` | Política de Privacidad |
| `/terminos` | Términos y Condiciones |
| `/eliminar-cuenta` | Información de eliminación de cuenta |

## Estructura

```
src/
  components/
    layout/        Navbar, Footer, Layout, LegalPage
    mockups/       Mockups temporales (teléfono, libreta, estado de cuenta)
    sections/      Secciones de la landing
    ui/            Logo y primitivas reutilizables
  data/            Contenido estático (site, features, planes, faq, privacy, terms, accountDeletion…)
  pages/           Landing y páginas legales
  App.tsx          Enrutado (BrowserRouter)
  main.tsx
```

## Notas

- **Estático**: sin hooks, sin estado, sin peticiones HTTP, sin lógica de negocio. La navegación usa enlaces HTML nativos.
- **Mockups temporales**: los `components/mockups/*` son representaciones visuales en HTML/SVG. Reemplazar por capturas oficiales cuando estén disponibles.
- **Identidad de marca**: colores `#1E3A8A`, `#2F5BEA`, `#0EA5E9`; tipografía Inter.
- **Animaciones**: solo CSS (entrada al scroll y deriva), con respeto a `prefers-reduced-motion`.

## Despliegue (SPA fallback)

Las páginas usan rutas limpias (`/privacidad`, etc.). En producción, el servidor debe devolver `index.html` para cualquier ruta (SPA fallback):

- **Netlify / Vercel**: se maneja automáticamente.
- **Otros hosts estáticos**: agrega una regla de reescritura a `index.html` (por ejemplo, en Netlify un archivo `public/_redirects` con `/*  /index.html  200`).
