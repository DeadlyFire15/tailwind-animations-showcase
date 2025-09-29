<script>
	import { Copy, X, Code, Sparkles } from 'lucide-svelte';
	import { generateCode, frameworks } from '../utils/codeGenerator.js';

	export let isOpen = false;
	export let animation = null;

	let selectedFramework = 'svelte';
	let copySuccess = {};
	let generatedCode = null;
	let isGenerating = false;

	// Cache de código generado por framework
	let codeCache = {};

	// Generar código solo cuando cambian animation o selectedFramework
	$: if (animation && selectedFramework) {
		generateCodeAsync();
	}

	async function generateCodeAsync() {
		// Si ya está en cache, usar inmediatamente
		const cacheKey = `${animation.name}-${selectedFramework}`;
		if (codeCache[cacheKey]) {
			generatedCode = codeCache[cacheKey];
			return;
		}

		isGenerating = true;
		// Usar requestAnimationFrame para no bloquear el hilo principal
		await new Promise((resolve) => requestAnimationFrame(resolve));
		try {
			const code = generateCode(animation, selectedFramework);
			codeCache[cacheKey] = code;
			generatedCode = code;
		} catch (error) {
			console.error('Error generating code:', error);
		} finally {
			isGenerating = false;
		}
	}

	async function copyToClipboard(text, id) {
		try {
			await navigator.clipboard.writeText(text);
			copySuccess[id] = true;
			setTimeout(() => {
				copySuccess[id] = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}

	function closeModal() {
		isOpen = false;
		// Limpiar estado cuando se cierre
		setTimeout(() => {
			if (!isOpen) {
				generatedCode = null;
				isGenerating = false;
			}
		}, 300); // Después de la animación de cierre
	}

	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen && animation}
	<!-- Modal Backdrop -->
	<div
		class="animate-fade-in fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
		on:click={handleBackdropClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
	>
		<!-- Modal Content -->
		<div class="modal-content animate-scale-in relative mx-4 max-h-[95vh] w-full max-w-7xl">
			<div
				class="rounded-2xl border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl shadow-blue-500/30 backdrop-blur-sm"
			>
				<!-- Modal Header -->
				<div
					class="rounded-t-2xl border-b border-gray-700 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-3 shadow-lg">
								<Code class="h-6 w-6 text-white" />
							</div>
							<div>
								<h2
									id="modal-title"
									class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent"
								>
									{animation.name}
								</h2>
								<p class="mt-1 text-base text-gray-200">{animation.description}</p>
								<div class="mt-2 flex items-center gap-2">
									<span
										class="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300"
									>
										CSS Animation
									</span>
									<span
										class="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300"
									>
										Multi-Framework
									</span>
								</div>
							</div>
						</div>
						<button
							class="rounded-xl p-3 text-gray-300 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/10 hover:text-white"
							on:click={closeModal}
							aria-label="Close modal"
						>
							<X size={28} />
						</button>
					</div>
				</div>

				<!-- Modal Body -->
				<div class="max-h-[70vh] space-y-8 overflow-y-auto p-8">
					<!-- Framework Selector -->
					<div>
						<div class="mb-6 flex items-center gap-3">
							<Sparkles class="h-5 w-5 text-yellow-400" />
							<h3 class="text-xl font-semibold text-white">Choose Your Framework</h3>
						</div>
						<div class="grid grid-cols-2 gap-4 md:grid-cols-5">
							{#each Object.entries(frameworks) as [key, label]}
								<button
									class="group relative rounded-xl border px-6 py-4 text-sm font-medium transition-all hover:scale-105 hover:shadow-lg
									       {selectedFramework === key
										? 'border-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-xl shadow-blue-500/20'
										: 'border-gray-500 bg-gray-700/50 text-gray-300 hover:border-blue-400 hover:bg-gray-600/50'}"
									on:click={() => (selectedFramework = key)}
								>
									<div
										class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity {selectedFramework ===
										key
											? 'opacity-100'
											: 'group-hover:opacity-50'}"
									></div>
									<span class="relative z-10">{label}</span>
									{#if selectedFramework === key}
										<div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-400"></div>
									{/if}
								</button>
							{/each}
						</div>
					</div>

					{#if isGenerating}
						<!-- Loading State -->
						<div class="flex items-center justify-center py-12">
							<div class="flex items-center gap-3">
								<div
									class="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
								></div>
								<span class="text-gray-300">Generating code...</span>
							</div>
						</div>
					{:else if generatedCode}
						<!-- Code Examples -->
						<div class="grid gap-8 lg:grid-cols-2">
							<!-- Component/HTML Code -->
							<div class="group">
								<div class="mb-4 flex items-center justify-between">
									<div class="flex items-center gap-3">
										<div class="rounded-lg bg-blue-500/20 p-2">
											<Code class="h-5 w-5 text-blue-400" />
										</div>
										<h3 class="text-xl font-semibold text-white">
											{selectedFramework === 'html' ? 'HTML Code' : 'Component Code'}
										</h3>
									</div>
									<button
										class="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-lg
										       {copySuccess.component
											? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
											: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'}"
										on:click={() => copyToClipboard(generatedCode.component, 'component')}
									>
										<Copy size={16} />
										{copySuccess.component ? 'Copied!' : 'Copy Code'}
									</button>
								</div>
								<div
									class="relative rounded-xl border border-gray-600/50 bg-gray-900/80 p-1 backdrop-blur-sm"
								>
									<pre
										class="overflow-x-auto rounded-lg bg-gray-950/50 p-6 text-sm leading-relaxed"><code
											class="font-mono text-gray-100">{generatedCode.component}</code
										></pre>
								</div>
							</div>

							<!-- CSS Code (if applicable) -->
							{#if generatedCode.css && selectedFramework !== 'html'}
								<div class="group">
									<div class="mb-4 flex items-center justify-between">
										<div class="flex items-center gap-3">
											<div class="rounded-lg bg-purple-500/20 p-2">
												<Sparkles class="h-5 w-5 text-purple-400" />
											</div>
											<h3 class="text-xl font-semibold text-white">CSS Styles</h3>
										</div>
										<button
											class="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-lg
											       {copySuccess.css
												? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
												: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'}"
											on:click={() => copyToClipboard(generatedCode.css, 'css')}
										>
											<Copy size={16} />
											{copySuccess.css ? 'Copied!' : 'Copy CSS'}
										</button>
									</div>
									<div
										class="relative rounded-xl border border-gray-600/50 bg-gray-900/80 p-1 backdrop-blur-sm"
									>
										<pre
											class="overflow-x-auto rounded-lg bg-gray-950/50 p-6 text-sm leading-relaxed"><code
												class="font-mono text-gray-100">{generatedCode.css}</code
											></pre>
									</div>
								</div>
							{/if}

							<!-- Tailwind Class -->
							<div
								class="group {generatedCode.css && selectedFramework !== 'html'
									? ''
									: 'lg:col-span-2'}"
							>
								<div class="mb-4 flex items-center justify-between">
									<div class="flex items-center gap-3">
										<div class="rounded-lg bg-cyan-500/20 p-2">
											<Sparkles class="h-5 w-5 text-cyan-400" />
										</div>
										<h3 class="text-xl font-semibold text-white">Tailwind Class</h3>
									</div>
									<button
										class="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:shadow-lg
										       {copySuccess.class
											? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
											: 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700'}"
										on:click={() => copyToClipboard(animation.classes, 'class')}
									>
										<Copy size={16} />
										{copySuccess.class ? 'Copied!' : 'Copy Class'}
									</button>
								</div>
								<div
									class="relative rounded-xl border border-gray-600/50 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 backdrop-blur-sm"
								>
									<code class="font-mono text-lg break-all text-cyan-300">{animation.classes}</code>
								</div>
							</div>
						</div>
					{/if}
				</div>

				<!-- Modal Footer -->
				<div
					class="border-t border-gray-700/50 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 backdrop-blur-sm"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<p class="text-gray-300">
								<span class="font-medium text-blue-400">Need help?</span> Check our
								<a
									href="https://github.com/DeadlyFire15/tailwind-animations-showcase"
									target="_blank"
									class="text-blue-400 underline underline-offset-2 transition-colors hover:text-blue-300"
								>
									documentation
								</a>
								or GitHub repository
							</p>
							<div class="text-sm text-gray-500">
								Press <kbd
									class="rounded-lg border border-gray-600 bg-gray-800 px-3 py-1 font-mono text-xs"
									>Esc</kbd
								> to close
							</div>
						</div>
						<button
							class="rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:from-gray-600 hover:to-gray-500 hover:shadow-lg"
							on:click={closeModal}
						>
							Close Modal
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Enhanced scrollbar styling */
	.max-h-\[70vh\]::-webkit-scrollbar {
		width: 8px;
	}

	.max-h-\[70vh\]::-webkit-scrollbar-track {
		background: rgba(31, 41, 55, 0.5);
		border-radius: 6px;
	}

	.max-h-\[70vh\]::-webkit-scrollbar-thumb {
		background: linear-gradient(180deg, #6366f1, #3b82f6);
		border-radius: 6px;
		border: 1px solid rgba(75, 85, 99, 0.3);
	}

	.max-h-\[70vh\]::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(180deg, #7c3aed, #2563eb);
	}

	/* Code block enhancements */
	pre code {
		font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
		line-height: 1.6;
	}

	/* Modal animation enhancement - Optimized for speed */
	.modal-content {
		animation: modalSlideIn 0.15s ease-out;
		will-change: transform, opacity;
	}

	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: scale(0.98) translateY(-10px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	/* Optimize rendering */
	.animate-fade-in {
		animation: fadeIn 0.1s ease-out;
		will-change: opacity;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
