// Utilidades para crear y manejar animaciones de manera consistente

/**
 * Crea una animación estándar con propiedades consistentes
 * @param {Object} config - Configuración de la animación
 * @returns {Object} - Objeto de animación estandarizado
 */
export function createAnimation({
	id,
	name,
	description,
	classes,
	customCSS,
	isAlwaysActive = false,
	customText = null,
	preview = true,
	category = null
}) {
	return {
		id,
		name,
		description,
		classes,
		customCSS,
		isAlwaysActive,
		customText: customText || name,
		preview,
		category
	};
}

/**
 * Crea CSS de keyframes de manera consistente
 * @param {string} name - Nombre del keyframe
 * @param {Object} steps - Pasos del keyframe (ej: { '0%': 'transform: scale(1)', '100%': 'transform: scale(1.1)' })
 * @param {string} animationClass - Nombre de la clase de animación
 * @param {string} animationProps - Propiedades de la animación (duración, easing, etc.)
 * @returns {string} - CSS completo
 */
export function createKeyframeCSS(name, steps, animationClass, animationProps) {
	const keyframes = Object.entries(steps)
		.map(([percentage, properties]) => `  ${percentage} { ${properties}; }`)
		.join('\n');

	return `@keyframes ${name} {
${keyframes}
}
.${animationClass} {
  animation: ${name} ${animationProps};
}`;
}

/**
 * Crea una animación de entrada estándar
 * @param {Object} config - Configuración específica
 * @returns {Object} - Animación de entrada
 */
export function createEntranceAnimation(config) {
	return createAnimation({
		...config,
		category: 'entrance',
		isAlwaysActive: false
	});
}

/**
 * Crea una animación de loop estándar
 * @param {Object} config - Configuración específica
 * @returns {Object} - Animación de loop
 */
export function createLoopAnimation(config) {
	return createAnimation({
		...config,
		category: 'loop',
		isAlwaysActive: true
	});
}

/**
 * Crea una animación de loading estándar
 * @param {Object} config - Configuración específica
 * @returns {Object} - Animación de loading
 */
export function createLoadingAnimation(config) {
	return createAnimation({
		...config,
		category: 'loading',
		isAlwaysActive: true,
		customText: config.customText || 'Loading'
	});
}

/**
 * Valida que una animación tenga todas las propiedades requeridas
 * @param {Object} animation - Animación a validar
 * @returns {boolean} - Si la animación es válida
 */
export function validateAnimation(animation) {
	const required = ['id', 'name', 'description', 'classes', 'customCSS'];
	return required.every((prop) => animation.hasOwnProperty(prop) && animation[prop]);
}

/**
 * Filtra animaciones por categoría
 * @param {Object} animations - Objeto de animaciones
 * @param {string} category - Categoría a filtrar
 * @returns {Array} - Array de animaciones filtradas
 */
export function getAnimationsByCategory(animations, category) {
	return animations[category] || [];
}

/**
 * Busca animaciones por término
 * @param {Object} animations - Objeto de animaciones
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} - Array de animaciones que coinciden
 */
export function searchAnimations(animations, searchTerm) {
	const term = searchTerm.toLowerCase();
	return Object.values(animations)
		.flat()
		.filter(
			(animation) =>
				animation.name.toLowerCase().includes(term) ||
				animation.description?.toLowerCase().includes(term)
		);
}
