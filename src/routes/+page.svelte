<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import BackgroundEffects from '$lib/components/BackgroundEffects.svelte';
	import ReactIcon from '$lib/components/icons/ReactIcon.svelte';
	import VueIcon from '$lib/components/icons/VueIcon.svelte';
	import SvelteIcon from '$lib/components/icons/SvelteIcon.svelte';
	import AngularIcon from '$lib/components/icons/AngularIcon.svelte';
	import JavaScriptIcon from '$lib/components/icons/JavaScriptIcon.svelte';
	import {
		Play,
		Code,
		Sparkles,
		Zap,
		Palette,
		Globe,
		Smartphone,
		Gauge,
		Heart,
		Terminal,
		Copy,
		Package,
		Download
	} from 'lucide-svelte';

	let mounted = false;

	function navigateToAnimations() {
		goto('/animations');
	}

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Tailwind Animations Showcase - Multi-Framework Animation Library</title>
	<meta
		name="description"
		content="A comprehensive collection of Tailwind CSS animations with code examples for React, Vue, Svelte, Angular, and vanilla JavaScript."
	/>
</svelte:head>

<div class="relative min-h-screen bg-gray-900">
	<!-- Background Effects -->
	<BackgroundEffects />

	<!-- Simple header navigation -->
	<nav class="relative z-50 border-b border-gray-700 bg-gray-800/95 backdrop-blur-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex items-center">
					<h1 class="text-xl font-bold text-white">
						<span class="text-blue-400">Tailwind</span> Animations
					</h1>
				</div>
				<div class="flex items-center gap-4">
					<a
						href="/animations"
						class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
					>
						View Animations
					</a>
					<iframe
						src="https://ghbtns.com/github-btn.html?user=deadlyfire15&repo=tailwind-animations-showcase&type=star&count=true&size=large"
						frameborder="0"
						scrolling="0"
						width="150"
						height="30"
						title="GitHub"
					></iframe>
				</div>
			</div>
		</div>
	</nav>

	<main class="relative z-10">
		<!-- Hero Section -->
		<section class="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-5xl text-center">
				<h1
					class="animate-slide-up-fade mb-6 text-6xl leading-tight font-bold text-white md:text-7xl"
					style="animation-delay: 0.2s;"
				>
					Beautiful <br />
					<span
						class="animate-glow-pulse bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
						>Tailwind CSS</span
					> <br />
					Animations
				</h1>

				<p
					class="animate-slide-up-fade mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl"
					style="animation-delay: 0.4s;"
				>
					A constantly growing collection of <span class="font-semibold text-blue-400"
						>ready-to-use animations</span
					>, with practical examples for React, Vue, Svelte, Angular and pure JavaScript.
				</p>

				<div
					class="animate-slide-up-fade mb-12 flex flex-col justify-center gap-4 sm:flex-row"
					style="animation-delay: 0.6s;"
				>
					<button
						class="animate-shimmer flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
						on:click={navigateToAnimations}
					>
						<Play size={20} />
						Explore Animations
					</button>
					<a
						href="https://github.com/DeadlyFire15/tailwind-animations-showcase"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-8 py-4 text-lg font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-gray-800"
					>
						<Code size={20} />
						View on GitHub
					</a>
				</div>

				<!-- Feature Stats -->
			</div>
		</section>

		<!-- Features Section -->
		<section class="px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-6xl">
				<div class="mb-16 text-center">
					<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">
						Everything You Need to <span class="text-blue-400">Animate</span>
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-gray-300">
						Professional-grade animations with production-ready code examples for every major
						framework.
					</p>
				</div>

				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div
						class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400"
					>
						<div class="mb-4">
							<Zap class="mb-4 h-8 w-8 text-blue-400" />
							<h3 class="mb-2 text-xl font-bold text-white">Ready to Use</h3>
							<p class="text-gray-300">
								Copy and paste animations with zero configuration. Works with any Tailwind CSS
								setup.
							</p>
						</div>
					</div>

					<div
						class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-400"
					>
						<div class="mb-4">
							<Code class="mb-4 h-8 w-8 text-purple-400" />
							<h3 class="mb-2 text-xl font-bold text-white">Multi-Framework</h3>
							<p class="text-gray-300">
								Get code examples for React, Vue, Svelte, Angular, and vanilla JavaScript.
							</p>
						</div>
					</div>

					<div
						class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400"
					>
						<div class="mb-4">
							<Palette class="mb-4 h-8 w-8 text-cyan-400" />
							<h3 class="mb-2 text-xl font-bold text-white">Customizable</h3>
							<p class="text-gray-300">
								Easy to customize with Tailwind's utility classes. Change colors, timing, and
								effects.
							</p>
						</div>
					</div>

					<div
						class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-green-400"
					>
						<div class="mb-4">
							<Smartphone class="mb-4 h-8 w-8 text-green-400" />
							<h3 class="mb-2 text-xl font-bold text-white">Responsive</h3>
							<p class="text-gray-300">
								All animations work perfectly on mobile, tablet, and desktop devices.
							</p>
						</div>
					</div>

					<div
						class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400"
					>
						<div class="mb-4">
							<Gauge class="mb-4 h-8 w-8 text-yellow-400" />
							<h3 class="mb-2 text-xl font-bold text-white">Performance</h3>
							<p class="text-gray-300">
								Optimized CSS animations with hardware acceleration for smooth 60fps performance.
							</p>
						</div>
					</div>

					<div
						class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-pink-400"
					>
						<div class="mb-4">
							<Heart class="mb-4 h-8 w-8 text-pink-400" />
							<h3 class="mb-2 text-xl font-bold text-white">Open Source</h3>
							<p class="text-gray-300">
								MIT licensed, free to use in personal and commercial projects. Contribute on GitHub.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Frameworks Section -->
		<section class="bg-gray-800/30 px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-6xl">
				<div class="mb-16 text-center">
					<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">
						Works with Your <span class="text-purple-400">Framework</span>
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-gray-300">
						Get framework-specific code examples for seamless integration into your projects.
					</p>
				</div>

				<div class="grid grid-cols-2 gap-8 md:grid-cols-5">
					<div class="group text-center">
						<div
							class="mb-4 rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400"
						>
							<div class="mb-4 flex justify-center">
								<ReactIcon class_="w-12 h-12 transition-all duration-300 group-hover:scale-110" />
							</div>
							<h3 class="text-lg font-bold text-white">React</h3>
						</div>
					</div>

					<div class="group text-center">
						<div
							class="mb-4 rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-green-400"
						>
							<div class="mb-4 flex justify-center">
								<VueIcon class_="w-12 h-12 transition-all duration-300 group-hover:scale-110" />
							</div>
							<h3 class="text-lg font-bold text-white">Vue</h3>
						</div>
					</div>

					<div class="group text-center">
						<div
							class="mb-4 rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-orange-400"
						>
							<div class="mb-4 flex justify-center">
								<SvelteIcon class_="w-12 h-12 transition-all duration-300 group-hover:scale-110" />
							</div>
							<h3 class="text-lg font-bold text-white">Svelte</h3>
						</div>
					</div>

					<div class="group text-center">
						<div
							class="mb-4 rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-red-400"
						>
							<div class="mb-4 flex justify-center">
								<AngularIcon class_="w-12 h-12 transition-all duration-300 group-hover:scale-110" />
							</div>
							<h3 class="text-lg font-bold text-white">Angular</h3>
						</div>
					</div>

					<div class="group text-center">
						<div
							class="mb-4 rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-yellow-400"
						>
							<div class="mb-4 flex justify-center">
								<JavaScriptIcon
									class_="w-12 h-12 transition-all duration-300 group-hover:scale-110"
								/>
							</div>
							<h3 class="text-lg font-bold text-white">JavaScript</h3>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">
					Ready to <span class="text-blue-400">Animate</span>?
				</h2>
				<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
					Start exploring our collection of animations and bring your projects to life with
					beautiful, smooth transitions.
				</p>
				<button
					class="animate-shimmer mx-auto flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
					on:click={navigateToAnimations}
				>
					<Play size={24} />
					Start Exploring
				</button>
			</div>
		</section>

		<!-- Installation Section -->
		<section class="bg-gray-800/30 px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-6xl">
				<div class="mb-16 text-center">
					<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">
						Quick <span class="text-green-400">Installation</span>
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-gray-300">
						Get started in seconds. Choose your preferred method and start animating right away.
					</p>
				</div>

				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<!-- NPM Installation -->
					<div class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm">
						<div class="mb-6 flex items-center gap-3">
							<div class="rounded-lg bg-red-600/20 p-3">
								<Package class="h-6 w-6 text-red-400" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-white">NPM Package</h3>
								<p class="text-sm text-gray-400">Install via package manager</p>
							</div>
						</div>

						<div class="space-y-4">
							<div class="relative">
								<div class="flex items-center justify-between rounded-lg bg-gray-900 p-4">
									<div class="flex items-center gap-3">
										<Terminal class="h-4 w-4 text-gray-400" />
										<code class="text-sm text-green-400"
											>npm install tailwind-animations-showcase</code
										>
									</div>
									<button
										class="rounded-md bg-gray-700 p-2 text-gray-400 transition-colors hover:bg-gray-600 hover:text-white"
										on:click={() =>
											navigator.clipboard.writeText('npm install tailwind-animations')}
									>
										<Copy class="h-4 w-4" />
									</button>
								</div>
							</div>

							<div class="relative">
								<div class="flex items-center justify-between rounded-lg bg-gray-900 p-4">
									<div class="flex items-center gap-3">
										<Terminal class="h-4 w-4 text-gray-400" />
										<code class="text-sm text-yellow-400"
											>pnpm add tailwind-animations-showcase</code
										>
									</div>
									<button
										class="rounded-md bg-gray-700 p-2 text-gray-400 transition-colors hover:bg-gray-600 hover:text-white"
										on:click={() => navigator.clipboard.writeText('pnpm add tailwind-animations')}
									>
										<Copy class="h-4 w-4" />
									</button>
								</div>
							</div>

							<div class="relative">
								<div class="flex items-center justify-between rounded-lg bg-gray-900 p-4">
									<div class="flex items-center gap-3">
										<Terminal class="h-4 w-4 text-gray-400" />
										<code class="text-sm text-blue-400">yarn add tailwind-animations-showcase</code>
									</div>
									<button
										class="rounded-md bg-gray-700 p-2 text-gray-400 transition-colors hover:bg-gray-600 hover:text-white"
										on:click={() => navigator.clipboard.writeText('yarn add tailwind-animations')}
									>
										<Copy class="h-4 w-4" />
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- CDN Installation -->
					<div class="rounded-xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm">
						<div class="mb-6 flex items-center gap-3">
							<div class="rounded-lg bg-blue-600/20 p-3">
								<Download class="h-6 w-6 text-blue-400" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-white">CDN Link</h3>
								<p class="text-sm text-gray-400">Direct browser usage</p>
							</div>
						</div>

						<div class="space-y-4">
							<div class="relative">
								<div class="rounded-lg bg-gray-900 p-4">
									<div class="mb-3 flex items-center gap-2">
										<Code class="h-4 w-4 text-gray-400" />
										<span class="text-sm text-gray-400">Add to your HTML &lt;head&gt;</span>
									</div>
									<div class="flex items-start justify-between gap-4">
										<code class="text-xs leading-relaxed text-green-400">
											&lt;link rel="stylesheet"
											href="https://cdn.jsdelivr.net/npm/tailwind-animations@latest/dist/animations.css"&gt;
										</code>
										<button
											class="mt-1 flex-shrink-0 rounded-md bg-gray-700 p-2 text-gray-400 transition-colors hover:bg-gray-600 hover:text-white"
											on:click={() =>
												navigator.clipboard.writeText(
													'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwind-animations@latest/dist/animations.css">'
												)}
										>
											<Copy class="h-4 w-4" />
										</button>
									</div>
								</div>
							</div>

							<div
								class="rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4"
							>
								<div class="flex items-start gap-3">
									<Sparkles class="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
									<div>
										<h4 class="mb-1 font-semibold text-white">Pro Tip</h4>
										<p class="text-sm text-blue-100">
											No build step required! Just add the CDN link and start using animations
											immediately.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Quick Start Steps -->
				<div class="mt-16">
					<h3 class="mb-8 text-center text-2xl font-bold text-white">
						Quick Start in <span class="text-blue-400">3 Steps</span>
					</h3>

					<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
						<div class="text-center">
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600"
							>
								<span class="text-xl font-bold text-white">1</span>
							</div>
							<h4 class="mb-2 text-lg font-semibold text-white">Install</h4>
							<p class="text-sm text-gray-400">
								Choose your preferred installation method from above
							</p>
						</div>

						<div class="text-center">
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600"
							>
								<span class="text-xl font-bold text-white">2</span>
							</div>
							<h4 class="mb-2 text-lg font-semibold text-white">Copy</h4>
							<p class="text-sm text-gray-400">Browse animations and copy the classes you like</p>
						</div>

						<div class="text-center">
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600"
							>
								<span class="text-xl font-bold text-white">3</span>
							</div>
							<h4 class="mb-2 text-lg font-semibold text-white">Animate</h4>
							<p class="text-sm text-gray-400">
								Add classes to your elements and watch them come to life
							</p>
						</div>
					</div>
				</div>

				<!-- Example Usage -->
				<div class="mt-16 rounded-xl border border-gray-700 bg-gray-800/30 p-8">
					<h3 class="mb-6 text-center text-xl font-bold text-white">Example Usage</h3>

					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div>
							<h4 class="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
								<Code class="h-4 w-4 text-blue-400" />
								HTML
							</h4>
							<div class="rounded-lg bg-gray-900 p-4">
								<code class="text-sm text-gray-300">
									&lt;div class="<span class="text-blue-400">animate-slide-up-fade</span>"&gt;<br />
									&nbsp;&nbsp;Hello World!<br />
									&lt;/div&gt;
								</code>
							</div>
						</div>

						<div>
							<h4 class="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
								<Sparkles class="h-4 w-4 text-green-400" />
								React/Vue/Svelte
							</h4>
							<div class="rounded-lg bg-gray-900 p-4">
								<code class="text-sm text-gray-300">
									&lt;Button className="<span class="text-green-400">animate-bounce-attention</span
									>"&gt;<br />
									&nbsp;&nbsp;Click me!<br />
									&lt;/Button&gt;
								</code>
							</div>
						</div>
					</div>

					<div class="mt-6 text-center">
						<button
							class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
							on:click={navigateToAnimations}
						>
							<Play class="h-4 w-4" />
							Try It Now
						</button>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>

<style>
	/* Include all the animation keyframes */
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
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes scale-in {
		from {
			transform: scale(0.95);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
