<script>
	import { Copy, Code } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	export let animation;
	export let category;

	const dispatch = createEventDispatcher();

	let isPlaying = false;
	let copySuccess = false;

	function triggerAnimation() {
		if (!animation.isAlwaysActive) {
			isPlaying = true;
			setTimeout(() => {
				isPlaying = false;
			}, 2000);
		}
	}

	// Para animaciones que siempre están activas o están siendo ejecutadas
	$: shouldAnimate = animation.isAlwaysActive || isPlaying;

	async function copyAnimationClass() {
		try {
			await navigator.clipboard.writeText(animation.classes);
			copySuccess = true;
			setTimeout(() => {
				copySuccess = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}

	function openModal() {
		dispatch('openModal', animation);
	}
</script>

<div
	class="rounded-xl border border-gray-700 bg-gray-800 shadow-sm transition-colors duration-200 hover:border-blue-500/50"
>
	<!-- Header -->
	<div class="border-b border-gray-700 p-6">
		<div class="mb-2 flex items-center justify-between">
			<h3 class="text-lg font-semibold text-white">{animation.name}</h3>
			<span class="rounded-full bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300">
				{category}
			</span>
		</div>
		<p class="text-sm text-gray-300">{animation.description}</p>
	</div>

	<!-- Preview Area -->
	<div class="relative flex min-h-32 items-center justify-center overflow-hidden bg-gray-900 p-6">
		<!-- Background gradient effect -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"
		></div>

		{#if animation.preview}
			{#if animation.customElement}
				{#if animation.id === 'spinner-ring'}
					<div class="animate-spinner-ring relative z-10"></div>
				{:else if animation.id === 'dots-bounce'}
					<div class="relative z-10 flex gap-2">
						<div class="animate-dots-bounce bg-blue-500"></div>
						<div class="animate-dots-bounce bg-blue-500"></div>
						<div class="animate-dots-bounce bg-blue-500"></div>
					</div>
				{/if}
			{:else}
				<div
					class="relative z-10 rounded-lg bg-blue-600 px-6 py-3 text-white transition-all duration-300 select-none
					{!animation.isAlwaysActive && !animation.isHover
						? 'cursor-pointer hover:scale-110 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50'
						: ''}
					{shouldAnimate && !animation.isHover ? animation.classes : ''} 
					{animation.isHover ? animation.classes : ''}"
					on:click={triggerAnimation}
					role="button"
					tabindex="0"
					on:keydown={(e) => e.key === 'Enter' && triggerAnimation()}
				>
					{#if animation.id === 'dots'}
						<span class="animate-dots">•</span>
					{:else if animation.id === 'typing'}
						<span class="animate-typing inline-block"
							>{animation.customText || 'Typing animation...'}</span
						>
					{:else if animation.customText}
						{animation.customText}
					{:else if animation.isAlwaysActive}
						{animation.name}
					{:else if animation.isHover}
						Hover me!
					{:else}
						Click to animate
					{/if}
				</div>
			{/if}
		{/if}
	</div>

	<!-- Controls -->
	<div class="border-t border-gray-700 p-6">
		<div class="space-y-3">
			<button
				class="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 font-mono text-sm text-white transition-colors hover:bg-blue-500
				       {copySuccess ? 'bg-green-600 hover:bg-green-500' : ''}"
				on:click={copyAnimationClass}
			>
				<Copy size={16} />
				{#if copySuccess}
					Copied!
				{:else}
					<span class="max-w-xs truncate">{animation.classes}</span>
				{/if}
			</button>

			<button
				class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 px-3 py-2 text-gray-300 transition-colors hover:bg-gray-700"
				on:click={openModal}
			>
				<Code size={16} />
				View Code Examples
			</button>
		</div>
	</div>
</div>

<style>
	/* Custom animations CSS will be injected here */
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-in-bottom {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes scale-in {
		from {
			transform: scale(0);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes rotate-in {
		from {
			transform: rotate(-180deg) scale(0);
			opacity: 0;
		}
		to {
			transform: rotate(0deg) scale(1);
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes slide-out-top {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-100%);
			opacity: 0;
		}
	}

	@keyframes bounce-custom {
		0%,
		20%,
		53%,
		80%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		40%,
		43% {
			transform: translate3d(0, -15px, 0);
		}
		70% {
			transform: translate3d(0, -7px, 0);
		}
		90% {
			transform: translate3d(0, -2px, 0);
		}
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		10%,
		30%,
		50%,
		70%,
		90% {
			transform: translateX(-5px);
		}
		20%,
		40%,
		60%,
		80% {
			transform: translateX(5px);
		}
	}

	@keyframes pulse-glow {
		0%,
		100% {
			box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
		}
		50% {
			box-shadow:
				0 0 20px rgba(59, 130, 246, 0.8),
				0 0 30px rgba(59, 130, 246, 0.6);
		}
	}

	@keyframes spin-slow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes dots {
		0%,
		20% {
			color: rgba(0, 0, 0, 0);
			text-shadow:
				0.25em 0 0 rgba(0, 0, 0, 0),
				0.5em 0 0 rgba(0, 0, 0, 0);
		}
		40% {
			color: white;
			text-shadow:
				0.25em 0 0 rgba(0, 0, 0, 0),
				0.5em 0 0 rgba(0, 0, 0, 0);
		}
		60% {
			text-shadow:
				0.25em 0 0 white,
				0.5em 0 0 rgba(0, 0, 0, 0);
		}
		80%,
		100% {
			text-shadow:
				0.25em 0 0 white,
				0.5em 0 0 white;
		}
	}

	@keyframes morph-square {
		0% {
			border-radius: 50%;
		}
		100% {
			border-radius: 0%;
		}
	}

	@keyframes gradient-shift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes flip-horizontal {
		0% {
			transform: rotateY(0);
		}
		100% {
			transform: rotateY(180deg);
		}
	}

	@keyframes swing {
		15% {
			transform: translateX(5px) rotate(5deg);
		}
		30% {
			transform: translateX(-5px) rotate(-3deg);
		}
		45% {
			transform: translateX(3px) rotate(2deg);
		}
		60% {
			transform: translateX(-1px) rotate(-1deg);
		}
		75% {
			transform: translateX(0px) rotate(0deg);
		}
	}

	/* Apply animations */
	.animate-fade-in {
		animation: fade-in 0.5s ease-out;
	}
	.animate-slide-in-bottom {
		animation: slide-in-bottom 0.6s ease-out;
	}
	.animate-scale-in {
		animation: scale-in 0.4s ease-out;
	}
	.animate-rotate-in {
		animation: rotate-in 0.6s ease-out;
	}
	.animate-fade-out {
		animation: fade-out 0.5s ease-out forwards;
	}
	.animate-slide-out-top {
		animation: slide-out-top 0.6s ease-out forwards;
	}
	.animate-bounce-custom {
		animation: bounce-custom 1s ease-in-out;
	}
	.animate-shake {
		animation: shake 0.8s ease-in-out;
	}
	.animate-pulse-glow {
		animation: pulse-glow 2s ease-in-out infinite;
	}
	.animate-spin-slow {
		animation: spin-slow 2s linear infinite;
	}
	.animate-dots::before {
		content: '•••';
		animation: dots 1.5s infinite;
	}
	.animate-morph-square {
		animation: morph-square 2s ease-in-out infinite alternate;
	}
	.animate-gradient-shift {
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		animation: gradient-shift 4s ease infinite;
	}
	.animate-flip-horizontal {
		animation: flip-horizontal 0.6s ease-in-out;
	}
	.animate-swing {
		transform-origin: top center;
		animation: swing 1s ease-in-out;
	}

	/* Hover effects */
	.hover-element:hover {
		transform: scale(1.1) translateY(-2px) rotate(5deg);
		transition: all 0.3s ease;
	}
</style>
