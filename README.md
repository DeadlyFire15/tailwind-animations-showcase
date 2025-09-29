# 🎨 Tailwind Animations Showcase

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/tailwind-animations-showcase)](https://www.npmjs.com/package/tailwind-animations-showcase)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub Stars](https://img.shields.io/github/stars/DeadlyFire15/tailwind-animations-showcase?style=social)](https://github.com/DeadlyFire15/tailwind-animations-showcase/stargazers)

Una colección completa y de código abierto de hermosas animaciones de Tailwind CSS con ejemplos de código listos para usar en **React**, **Vue**, **Svelte**, **Angular** y **JavaScript vanilla**.

[Demo en Vivo](https://tailwind-animations-showcase.vercel.app) • [Documentación](https://github.com/DeadlyFire15/tailwind-animations-showcase) • [Contribuir](CONTRIBUTING.md)

</div>

## ✨ Características

- 🎯 **100+ Animaciones Listas** - Entrada, salida, atención, hover y más
- 🚀 **Soporte Multi-Framework** - Funciona con React, Vue, Svelte, Angular y JS vanilla
- 📱 **Diseño Responsivo** - Todas las animaciones funcionan perfectamente en dispositivos móviles
- 🎨 **Copiar y Pegar Código** - Copiado con un clic para implementación rápida
- 📚 **Documentación Completa** - Ejemplos detallados y guías de personalización
- 🔧 **Personalizable** - Fácil modificación de timing, easing y otras propiedades
- 🌙 **Optimizado para Rendimiento** - Animaciones CSS aceleradas por hardware
- 📦 **Paquete NPM** - Instala como plugin de Tailwind
- 🎨 **Interfaz Moderna** - Diseño elegante con tema oscuro
- 🔍 **Búsqueda Inteligente** - Encuentra animaciones rápidamente

## 🚀 Inicio Rápido

### 📦 Instalación

#### Como Plugin de Tailwind (Recomendado)

```bash
npm install tailwind-animations-showcase
# o
yarn add tailwind-animations-showcase
# o
pnpm add tailwind-animations-showcase
```

Agrega a tu `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,jsx,tsx,vue}'],
	theme: {
		extend: {
			// tus personalizaciones
		}
	},
	plugins: [require('tailwind-animations-showcase')]
};
```

#### Via CDN

```html
<link
	href="https://cdn.jsdelivr.net/npm/tailwind-animations-showcase@latest/dist/animations.css"
	rel="stylesheet"
/>
```

### 🎨 Uso Básico

```html
<!-- Animación de entrada con fade -->
<div class="animate-fade-in">¡Hola Mundo!</div>

<!-- Animación de rebote -->
<button class="animate-bounce-in hover:animate-pulse-glow">¡Haz clic aquí!</button>

<!-- Animación de deslizamiento -->
<div class="animate-slide-in-left">Contenido deslizante</div>
```

### 🛠️ Desarrollo Local

```bash
# Clona el repositorio
git clone https://github.com/DeadlyFire15/tailwind-animations-showcase.git
cd tailwind-animations-showcase

# Instala dependencias
pnpm install

# Inicia servidor de desarrollo
pnpm dev

# Construye para producción
pnpm build

# Previsualiza build de producción
pnpm preview
```

## 📚 Categorías de Animaciones

| Categoría              | Descripción                  | Ejemplos                                        |
| ---------------------- | ---------------------------- | ----------------------------------------------- |
| **Attention**          | Llaman la atención           | `animate-bounce`, `animate-pulse`               |
| **Fading Entrances**   | Entradas con desvanecimiento | `animate-fade-in`, `animate-fade-in-up`         |
| **Fading Exits**       | Salidas con desvanecimiento  | `animate-fade-out`, `animate-fade-out-down`     |
| **Bouncing Entrances** | Entradas con rebote          | `animate-bounce-in`, `animate-bounce-in-left`   |
| **Sliding Entrances**  | Entradas deslizantes         | `animate-slide-in-right`, `animate-slide-in-up` |
| **Rotating Entrances** | Entradas rotativas           | `animate-rotate-in`, `animate-flip-in-x`        |
| **Hover Effects**      | Efectos de hover             | `hover:animate-float`, `hover:animate-glow`     |
| **Loading States**     | Estados de carga             | `animate-spin-pulse`, `animate-loading-dots`    |

## 🎯 Frameworks Soportados

<div align="center">

|   Framework    |    Estado    |            Ejemplo            |
| :------------: | :----------: | :---------------------------: |
|   **React**    | ✅ Soportado | `className="animate-fade-in"` |
|   **Vue.js**   | ✅ Soportado | `class="animate-slide-in-up"` |
|   **Svelte**   | ✅ Soportado |  `class="animate-bounce-in"`  |
|  **Angular**   | ✅ Soportado |  `class="animate-rotate-in"`  |
| **Vanilla JS** | ✅ Soportado |   `class="animate-fade-in"`   |

</div>

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Lee nuestra [guía de contribución](CONTRIBUTING.md) para empezar.

### 🌟 Contribuidores

Gracias a estas increíbles personas que han contribuido a este proyecto:

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=DeadlyFire15/tailwind-animations-showcase)](https://github.com/DeadlyFire15/tailwind-animations-showcase/graphs/contributors)

</div>

### 💡 Cómo Contribuir

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/nueva-animacion`)
3. 📝 Commit tus cambios (`git commit -m 'feat: agrega nueva animación'`)
4. 📤 Push a la rama (`git push origin feature/nueva-animacion`)
5. 🔄 Abre un Pull Request

## � Roadmap

- [ ] 🎨 Más animaciones de entrada y salida
- [ ] 🚀 Soporte para animaciones 3D
- [ ] 📱 Optimizaciones móviles mejoradas
- [ ] 🎵 Soporte para animaciones con sonido
- [ ] 🎮 Modo interactivo/playground
- [ ] 📚 Documentación interactiva mejorada

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Tailwind CSS](https://tailwindcss.com) por el increíble framework
- [Animate.css](https://animate.style/) por la inspiración
- [SVGL](https://svgl.app/) por los íconos de frameworks
- La comunidad de desarrolladores por el feedback y contribuciones

## 📞 Soporte

- 🐛 [Reportar Bug](https://github.com/DeadlyFire15/tailwind-animations-showcase/issues)
- 💡 [Solicitar Feature](https://github.com/DeadlyFire15/tailwind-animations-showcase/issues)
- 💬 [Discussions](https://github.com/DeadlyFire15/tailwind-animations-showcase/discussions)

---

<div align="center">

**¿Te gusta el proyecto? ¡Dale una ⭐ en [GitHub](https://github.com/DeadlyFire15/tailwind-animations-showcase)!**

Hecho con ❤️ por [DeadlyFire15](https://github.com/DeadlyFire15)

</div>
