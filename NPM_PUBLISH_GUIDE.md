# 📦 Guía de Publicación NPM - Tailwind Animations Showcase

## ✅ Pre-requisitos

1. **Cuenta de NPM**: Asegúrate de tener una cuenta en [npmjs.com](https://www.npmjs.com)
2. **Login NPM**: Ejecuta `npm login` y autentícate
3. **Git Clean**: Asegúrate de que no haya cambios sin commit

## 🚀 Pasos para Publicar

### 1. Verificación Final

```bash
# Verificar que todos los tests pasen
npm run test

# Verificar la estructura del paquete
npm pack --dry-run
```

### 2. Publicación Primera Vez

```bash
# Publicar por primera vez (scoped package requiere --access public)
npm publish --access public
```

### 3. Actualizaciones Futuras

#### Patch (1.0.0 → 1.0.1)

```bash
npm run release:patch && npm run publish:npm
```

#### Minor (1.0.0 → 1.1.0)

```bash
npm run release:minor && npm run publish:npm
```

#### Major (1.0.0 → 2.0.0)

```bash
npm run release:major && npm run publish:npm
```

## 📋 Checklist Pre-Publicación

- [ ] ✅ Tests pasan (`npm run test`)
- [ ] ✅ Documentación actualizada
- [ ] ✅ Version correcta en package.json
- [ ] ✅ CHANGELOG.md actualizado (opcional)
- [ ] ✅ No hay archivos sensibles en .npmignore
- [ ] ✅ Plugin funciona correctamente
- [ ] ✅ TypeScript definitions válidas

## 🔄 Proceso de CI/CD (Futuro)

### GitHub Actions para publicación automática:

```yaml
name: Publish to NPM
on:
  push:
    tags:
      - 'v*'
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm test
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 📊 Post-Publicación

1. **Verificar en NPM**: Visita https://www.npmjs.com/package/@deadlyfire15/tailwind-animations-showcase
2. **Actualizar badges**: Los badges en README.md se actualizarán automáticamente
3. **Anunciar**: Comparte en redes sociales y comunidades
4. **Monitor**: Revisa descargas y issues

## 🔧 Comandos de Mantenimiento

```bash
# Ver información del paquete
npm view @deadlyfire15/tailwind-animations-showcase

# Ver versiones publicadas
npm view @deadlyfire15/tailwind-animations-showcase versions --json

# Deprecar una versión
npm deprecate @deadlyfire15/tailwind-animations-showcase@1.0.0 "Versión con bug crítico"

# Despublicar (solo en primeras 72 horas)
npm unpublish @deadlyfire15/tailwind-animations-showcase@1.0.0
```

## 🏷️ Semantic Versioning

- **PATCH** (1.0.X): Bug fixes, documentación, mejoras menores
- **MINOR** (1.X.0): Nuevas features, animaciones adicionales
- **MAJOR** (X.0.0): Breaking changes, API changes

## 📈 Promoción

1. **Product Hunt**: Lanzar en Product Hunt
2. **Dev.to**: Escribir artículo técnico
3. **Twitter**: Hilo sobre animaciones CSS
4. **Reddit**: r/webdev, r/tailwindcss
5. **Discord/Slack**: Comunidades de frontend

¡Listo para revolucionar las animaciones CSS! 🎨✨
