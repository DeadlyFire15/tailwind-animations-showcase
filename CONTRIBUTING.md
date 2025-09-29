# Contributing to Tailwind Animations Showcase

¡Gracias por tu interés en contribuir! Este proyecto es de código abierto y damos la bienvenida a las contribuciones de la comunidad.

## 🚀 Pasos para Contribuir

### 1. Configuración Inicial

1. **Fork el repositorio**
   - Ve a [https://github.com/DeadlyFire15/tailwind-animations-showcase](https://github.com/DeadlyFire15/tailwind-animations-showcase)
   - Haz clic en el botón "Fork" en la esquina superior derecha

2. **Clona tu fork**

   ```bash
   git clone https://github.com/TU_USUARIO/tailwind-animations-showcase.git
   cd tailwind-animations-showcase
   ```

3. **Agrega el repositorio original como upstream**

   ```bash
   git remote add upstream https://github.com/DeadlyFire15/tailwind-animations-showcase.git
   ```

4. **Instala las dependencias**

   ```bash
   pnpm install
   ```

5. **Inicia el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

   Abre [http://localhost:5174](http://localhost:5174) en tu navegador

### 2. Flujo de Trabajo

1. **Crea una nueva rama para tu contribución**

   ```bash
   git checkout -b feature/nueva-animacion
   # o
   git checkout -b fix/correccion-bug
   ```

2. **Mantén tu fork actualizado**

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

3. **Haz tus cambios y commits**

   ```bash
   git add .
   git commit -m "feat: agrega nueva animación bounce-rotate"
   ```

4. **Push a tu fork**

   ```bash
   git push origin feature/nueva-animacion
   ```

5. **Crea un Pull Request**
   - Ve a tu fork en GitHub
   - Haz clic en "Compare & pull request"
   - Describe tus cambios detalladamente

## 🎨 Cómo Agregar Nuevas Animaciones

### 1. Estructura de Animación

Agrega tu animación en `src/lib/animations/index.js` siguiendo esta estructura:

```javascript
{
  id: 'unique-animation-id',
  name: 'Nombre de la Animación',
  description: 'Breve descripción de la animación',
  classes: 'animate-tu-clase-animacion',
  customCSS: `
@keyframes tus-keyframes {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-tu-clase {
  animation: tus-keyframes 1s ease-out;
}`,
  preview: true,
  isHover: false, // true para animaciones de hover
  category: 'fading-entrances' // categoría apropiada
}
```

### 2. Mejores Prácticas

- **Rendimiento**: Usa propiedades `transform` y `opacity` para aceleración por hardware
- **Nomenclatura**: Usa nombres semánticos y descriptivos (ej: `fade-in`, `slide-up`)
- **Duración**: Mantén las animaciones entre 0.2s - 2s para buena UX
- **Easing**: Usa funciones de suavizado apropiadas (`ease-out` para entradas, `ease-in` para salidas)
- **Accesibilidad**: Considera `prefers-reduced-motion` para usuarios sensibles al movimiento
- **Compatibilidad**: Testa en diferentes navegadores y dispositivos

### 3. Categorías Disponibles

Elige la categoría apropiada para tu animación:

- **attention**: Animaciones para llamar la atención
- **fading-entrances**: Entradas con efectos de desvanecimiento
- **fading-exits**: Salidas con efectos de desvanecimiento
- **bouncing-entrances**: Entradas con efectos de rebote
- **bouncing-exits**: Salidas con efectos de rebote
- **sliding-entrances**: Entradas deslizantes
- **sliding-exits**: Salidas deslizantes
- **rotating-entrances**: Entradas rotativas
- **rotating-exits**: Salidas rotativas
- **lightspeed**: Animaciones de velocidad de luz
- **specials**: Animaciones especiales
- **hover**: Animaciones de hover
- **loading**: Estados de carga
- **morphing**: Transformaciones de forma

### 4. Ejemplo Completo

```javascript
// En src/lib/animations/index.js
{
  id: 'pulse-glow',
  name: 'Pulse Glow',
  description: 'Un efecto de pulso con brillo suave',
  classes: 'animate-pulse-glow',
  customCSS: `
@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
}
.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}`,
  preview: true,
  isHover: false,
  category: 'attention'
}
```

### 5. Testing en Frameworks

Asegúrate de que tu animación funciona en todos los frameworks soportados:

- ✅ Svelte (principal)
- ✅ React
- ✅ Vue.js
- ✅ Angular
- ✅ JavaScript vanilla

## 🐛 Reporte de Bugs

Al reportar bugs, incluye:

- ✅ Navegador y versión
- ✅ Pasos para reproducir
- ✅ Comportamiento esperado vs actual
- ✅ Screenshots/videos si es aplicable
- ✅ Console logs si hay errores

## 💡 Sugerencias de Características

Antes de sugerir nuevas características:

1. ✅ Revisa issues existentes
2. ✅ Explica el caso de uso
3. ✅ Proporciona ejemplos si es posible
4. ✅ Considera si encaja en el scope del proyecto

## 🔧 Guías de Desarrollo

### Estilo de Código

- ✅ Usa Prettier para formateo (configurado automáticamente)
- ✅ Sigue las convenciones de nomenclatura existentes
- ✅ Agrega comentarios para animaciones complejas
- ✅ Mantén los componentes pequeños y enfocados

### Testing

- ✅ Testa animaciones en múltiples navegadores
- ✅ Verifica responsividad móvil
- ✅ Revisa accesibilidad con screen readers
- ✅ Testa rendimiento en dispositivos lentos

### Mensajes de Commit

Usa commits convencionales:

- `feat:` para nuevas características
- `fix:` para corrección de bugs
- `docs:` para documentación
- `style:` para cambios de formato
- `refactor:` para refactorización de código
- `test:` para agregar tests

Ejemplos:

```
feat: agrega animación bounce con easing elástico
fix: corrige timing de fade-out en Safari
docs: actualiza instrucciones de instalación
```

## 📦 Proceso de Pull Request

### Pasos Detallados:

1. **Crea una rama descriptiva**

   ```bash
   git checkout -b feature/nombre-de-tu-animacion
   # o
   git checkout -b fix/descripcion-del-bug
   ```

2. **Haz tus cambios siguiendo las guías**
   - Agrega tu animación en `src/lib/animations/index.js`
   - Testa en múltiples navegadores
   - Verifica que funcione en móvil

3. **Commit con mensajes descriptivos**

   ```bash
   git add .
   git commit -m "feat: agrega animación slide-bounce para entradas"
   ```

4. **Push a tu fork**

   ```bash
   git push origin feature/nombre-de-tu-animacion
   ```

5. **Crea el Pull Request**
   - Ve a GitHub y haz clic en "Compare & pull request"
   - Usa este template:

```markdown
## 📝 Descripción

Breve descripción de qué hace tu contribución.

## 🎯 Tipo de Cambio

- [ ] Nueva animación
- [ ] Corrección de bug
- [ ] Mejora de documentación
- [ ] Mejora de rendimiento

## ✅ Checklist

- [ ] La animación funciona en todos los frameworks soportados
- [ ] CSS optimizado para rendimiento
- [ ] Testado en móvil y desktop
- [ ] Documentación actualizada si es necesario
- [ ] Commits siguen convención establecida

## 🖼️ Screenshots/GIFs

Si es aplicable, agrega screenshots o GIFs mostrando la animación.
```

### Lista de Verificación PR

- [ ] ✅ Animación funciona en todos los frameworks soportados
- [ ] ✅ CSS optimizado para rendimiento usando `transform` y `opacity`
- [ ] ✅ El código sigue las guías de estilo del proyecto
- [ ] ✅ Documentación actualizada si es necesario
- [ ] ✅ Animación es accesible (respeta preferencias de movimiento)
- [ ] ✅ Sin errores o warnings en la consola
- [ ] ✅ Testado en móvil y desktop
- [ ] ✅ Funciona en diferentes navegadores

## 🌟 Reconocimiento

Los contribuidores serán:

- ✅ Listados en el README
- ✅ Acreditados en las notas de lanzamiento
- ✅ Dados badges apropiados de GitHub
- ✅ Mencionados en redes sociales del proyecto

## 🤝 Guías de Comunidad

- 🤝 Sé respetuoso e inclusivo
- 📚 Ayuda a otros a aprender y crecer
- 💡 Proporciona feedback constructivo
- 👥 Enfócate en el código, no en la persona
- 🎯 Mantén las discusiones relevantes al proyecto

## 🚀 Proceso de Release

Los maintainers manejan los releases:

1. ✅ Version bump siguiendo semantic versioning
2. ✅ Generar changelog
3. ✅ Crear GitHub release
4. ✅ Publicar en npm
5. ✅ Actualizar sitio de documentación

## 📞 Obtener Ayuda

- 🐛 Abre un issue para bugs/características
- 💬 Usa discussions para preguntas
- 📚 Revisa la documentación primero
- 📧 Contacta a @DeadlyFire15 para preguntas específicas

## 🎉 ¡Empezando!

### Tu Primera Contribución

1. **Busca un "good first issue"** en el repositorio
2. **Comenta en el issue** que quieres trabajar en él
3. **Sigue esta guía** para hacer tu contribución
4. **Pide ayuda** si la necesitas - ¡estamos aquí para ayudar!

### Ideas para Contribuir

- 🎨 Agregar nuevas animaciones
- 🐛 Reportar o corregir bugs
- 📚 Mejorar documentación
- 🚀 Optimizar rendimiento
- 🎯 Agregar soporte para más frameworks
- 🎨 Mejorar el diseño de la interfaz

¡Gracias por contribuir a hacer las animaciones web más accesibles! 🎉
