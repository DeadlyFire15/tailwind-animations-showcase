<script>
	import { onMount } from 'svelte';
	import { Sparkles, Star } from 'lucide-svelte';

	let sparkles = [];
	let stars = [];

	onMount(() => {
		// Reducir significativamente los elementos para mejor rendimiento
		// Create fewer floating sparkles
		for (let i = 0; i < 5; i++) {
			sparkles.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				delay: Math.random() * 2,
				size: 12
			});
		}

		// Create fewer floating stars
		for (let i = 0; i < 3; i++) {
			stars.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				delay: Math.random() * 3,
				size: 8
			});
		}

		// Reducir frecuencia de actualización para menos carga en CPU
		const sparkleInterval = setInterval(() => {
			const randomSparkle = sparkles[Math.floor(Math.random() * sparkles.length)];
			if (randomSparkle) {
				randomSparkle.x = Math.random() * 100;
				randomSparkle.y = Math.random() * 100;
			}
		}, 8000); // Cambiado de 3s a 8s

		return () => {
			clearInterval(sparkleInterval);
		};
	});
</script>

<!-- Animated Background - Optimized -->
<div class="pointer-events-none fixed inset-0 overflow-hidden">
	<!-- Simplified Gradient Orbs - Reduced blur for better performance -->
	<div
		class="animate-float absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-500/8 blur-xl"
	></div>
	<div
		class="animate-float absolute right-20 bottom-20 h-48 w-48 rounded-full bg-purple-500/8 blur-xl"
		style="animation-delay: 2s;"
	></div>

	<!-- Floating Sparkles -->
	{#each sparkles as sparkle}
		<div
			class="animate-sparkle absolute text-blue-400/30"
			style="left: {sparkle.x}%; top: {sparkle.y}%; animation-delay: {sparkle.delay}s;"
		>
			<Sparkles size={sparkle.size} />
		</div>
	{/each}

	<!-- Floating Stars -->
	{#each stars as star}
		<div
			class="animate-float absolute text-purple-400/20"
			style="left: {star.x}%; top: {star.y}%; animation-delay: {star.delay}s;"
		>
			<Star size={star.size} />
		</div>
	{/each}
</div>

<style>
	/* Optimized animations with hardware acceleration */
	@keyframes float {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, -20px, 0);
		}
	}

	@keyframes sparkle {
		0%,
		100% {
			opacity: 0.2;
			transform: scale(0.8);
		}
		50% {
			opacity: 0.8;
			transform: scale(1.2);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
		will-change: transform;
	}

	.animate-sparkle {
		animation: sparkle 4s ease-in-out infinite;
		will-change: transform, opacity;
	}
</style>
