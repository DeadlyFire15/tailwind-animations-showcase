// Framework code generators
export const frameworks = {
	svelte: 'Svelte',
	react: 'React',
	vue: 'Vue.js',
	angular: 'Angular',
	vanilla: 'Vanilla JS',
	html: 'HTML/CSS'
};

// Templates reutilizables para reducir duplicación
const templates = {
	buttonClasses: 'px-4 py-2 bg-blue-500 text-white rounded',
	getConditionalClass: (classes, condition) => `${condition ? classes : ''}`,

	createButton: (framework, name, classes, customCSS) => {
		const baseClasses = templates.buttonClasses;

		switch (framework) {
			case 'svelte':
				return {
					component: `<script>
  let isVisible = false;
  
  function triggerAnimation() {
    isVisible = !isVisible;
  }
</script>

<button 
  class="${baseClasses} {isVisible ? '${classes}' : ''}"
  on:click={triggerAnimation}
>
  ${name}
</button>

<style>
${customCSS}
</style>`,
					css: customCSS
				};

			case 'react':
				return {
					component: `import React, { useState } from 'react';
import './animations.css';

function AnimatedButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <button 
      className={\`${baseClasses} \${isVisible ? '${classes}' : ''}\`}
      onClick={() => setIsVisible(!isVisible)}
    >
      ${name}
    </button>
  );
}

export default AnimatedButton;`,
					css: customCSS
				};

			case 'vue':
				return {
					component: `<template>
  <button 
    :class="['${baseClasses}', { '${classes}': isVisible }]"
    @click="isVisible = !isVisible"
  >
    ${name}
  </button>
</template>

<script>
export default {
  data: () => ({ isVisible: false })
}
</script>

<style scoped>
${customCSS}
</style>`,
					css: customCSS
				};

			default:
				return null;
		}
	}
};

export function generateCode(animation, framework) {
	const { name, classes, customCSS } = animation;

	// Usar templates reutilizables para frameworks principales
	const templateResult = templates.createButton(framework, name, classes, customCSS);
	if (templateResult) {
		return templateResult;
	}

	// Frameworks específicos que necesitan lógica diferente
	switch (framework) {
		case 'angular':
			return {
				component: `import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  template: \`
    <button 
      [class]="${templates.buttonClasses} + (isVisible ? ' ${classes}' : '')"
      (click)="triggerAnimation()"
    >
      ${name}
    </button>
  \`,
  styles: [\`${customCSS}\`]
})
export class AnimatedButtonComponent {
  isVisible = false;
  
  triggerAnimation() {
    this.isVisible = !this.isVisible;
  }
}`,
				css: customCSS
			};

		case 'vanilla':
			return {
				component: `// HTML
<button id="animatedBtn" class="${templates.buttonClasses}">
  ${name}
</button>

// JavaScript  
const btn = document.getElementById('animatedBtn');
let isVisible = false;

btn.addEventListener('click', () => {
  isVisible = !isVisible;
  btn.classList.toggle('${classes.split(' ')[0]}', isVisible);
});`,
				css: customCSS
			};

		case 'html':
			return {
				component: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${name} Animation</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>${customCSS}</style>
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
  <button class="${templates.buttonClasses} ${classes}">
    ${name}
  </button>
</body>
</html>`,
				css: customCSS
			};

		default:
			return {
				component: `<!-- Add this to your HTML -->
<div class="${classes}">
  ${name}
</div>`,
				css: customCSS
			};
	}
}
