// Type definitions for @deadlyfire15/tailwind-animations-showcase

declare module '@deadlyfire15/tailwind-animations-showcase' {
	import { Config } from 'tailwindcss';

	interface Animation {
		id: string;
		name: string;
		description: string;
		classes: string;
		customCSS: string;
		isAlwaysActive?: boolean;
		customText?: string;
		preview?: boolean;
		category?: string;
	}

	interface AnimationCategory {
		[key: string]: Animation[];
	}

	interface Animations {
		attention: Animation[];
		'fading-entrances': Animation[];
		'fading-loops': Animation[];
		'bouncing-entrances': Animation[];
		'bouncing-loops': Animation[];
		'sliding-entrances': Animation[];
		'sliding-loops': Animation[];
		'zooming-entrances': Animation[];
		'zooming-loops': Animation[];
		'rotating-entrances': Animation[];
		'rotating-loops': Animation[];
		loading: Animation[];
	}

	interface Framework {
		svelte: string;
		react: string;
		vue: string;
		angular: string;
		vanilla: string;
		html: string;
	}

	interface GeneratedCode {
		component: string;
		css: string;
	}

	// Plugin function
	function tailwindAnimationsPlugin(): (api: any) => void;

	// Animation utilities
	export function createAnimation(config: Partial<Animation>): Animation;
	export function createKeyframeCSS(
		name: string,
		steps: Record<string, string>,
		animationClass: string,
		animationProps: string
	): string;
	export function createEntranceAnimation(config: Partial<Animation>): Animation;
	export function createLoopAnimation(config: Partial<Animation>): Animation;
	export function createLoadingAnimation(config: Partial<Animation>): Animation;
	export function validateAnimation(animation: Animation): boolean;
	export function getAnimationsByCategory(animations: Animations, category: string): Animation[];
	export function searchAnimations(animations: Animations, searchTerm: string): Animation[];

	// Code generation
	export function generateCode(animation: Animation, framework: keyof Framework): GeneratedCode;
	export const frameworks: Framework;

	// Data exports
	export const animations: Animations;

	// Default export (Tailwind plugin)
	const plugin: () => (api: any) => void;
	export default plugin;
}

declare module '@deadlyfire15/tailwind-animations-showcase/animations' {
	export * from '@deadlyfire15/tailwind-animations-showcase';
}

declare module '@deadlyfire15/tailwind-animations-showcase/utils' {
	export * from '@deadlyfire15/tailwind-animations-showcase';
}
