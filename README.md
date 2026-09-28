# Tapicería San Pedro

> Página web de Tapicería San Pedro

## Descripcion

Sitio web para una empresa de tapicería, cortinas y toldos a medida. La aplicación presenta una landing page comercial con catálogo de servicios, información de contacto, ubicación y llamadas a la acción dirigidas a clientes potenciales.

## Funcionalidades

- Landing page principal con hero visual y texto promocional
- Sección de servicios con catálogo y enlaces a detalles
- Páginas individuales por servicio con contenido y galería
- Diseño responsive para móvil y escritorio
- Integración con WhatsApp para pedir presupuesto
- Mapa de ubicación con Google Maps
- Banner de cookies y footer institucional
- Optimización para despliegue estático con Astro

## Tecnologias

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- JavaScript ES modules
- HTML5 y CSS3

## Requisitos

- Node.js 22.12.0 o superior
- npm

## Instalacion y desarrollo

```bash
git clone <URL_DEL_REPOSITORIO>
cd tapiceriasanpedro
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) para ver el sitio en el navegador.

## Scripts disponibles

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Astro. |
| `npm run build` | Genera la versión de producción del proyecto. |
| `npm run preview` | Sirve la compilación de producción localmente. |
| `npm run astro` | Ejecuta comandos de Astro directamente. |

## Estructura del proyecto

```text
.
├── public/
│   ├── img/                       Imágenes del negocio y servicios
│   ├── i18n.js                   Script de idioma / cookies
│   └── marcas/                   Logotipos o marcas asociadas
├── src/
│   ├── components/               Componentes reutilizables
│   │   ├── BannerCookies.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── data/
│   │   └── servicios.json        Datos de los servicios del catálogo
│   ├── layouts/
│   │   └── Layout.astro          Layout global de la web
│   ├── pages/
│   │   ├── servicios/
│   │   │   └── [id].astro        Páginas dinámicas por servicio
│   │   ├── aviso-legal.astro
│   │   ├── index.astro
│   │   ├── politica-cookies.astro
│   │   ├── politica-privacidad.astro
│   │   └── sobre-nosotros.astro
│   ├── global.css                Estilos globales y variables
│   └──
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tailwind.config.mjs
├── tsconfig.json
├── .gitignore
├── .vscode/
└── README.md
```

## Despliegue

La aplicación puede desplegarse en plataformas estáticas compatibles con Astro, como [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) o cualquier hosting statico.

1. Haz push del repositorio a tu plataforma de despliegue.
2. Configura el proyecto como sitio estático o con soporte de Astro.
3. Ejecuta el comando de compilación: `npm run build`.
4. Publica la carpeta generada por Astro (`dist/`).

URL de produccion: pendiente de configurar

## Contribuciones

1. Crea una rama para tus cambios.
2. Realiza y prueba las modificaciones.
3. Comprueba que el proyecto sigue funcionando con `npm run build`.
4. Abre un pull request con una descripción clara del cambio.
