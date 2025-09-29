<script>
	import { Search, Github, BookOpen, Download, Star, Package } from 'lucide-svelte';

	export let categories = [];
	export let activeCategory = 'entrance';
	export let searchTerm = '';
	export let onCategoryChange;
	export let onSearchChange;

	function handleCategoryClick(category) {
		if (onCategoryChange) {
			onCategoryChange(category);
		}
	}

	function handleSearchInput(event) {
		if (onSearchChange) {
			onSearchChange(event.target.value);
		}
	}
</script>

<nav class="sticky top-0 z-50 border-b border-gray-700 bg-gray-800/95 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<h1 class="text-xl font-bold text-white">
						<span class="text-blue-400">Tailwind</span> Animations
					</h1>
					<p class="-mt-1 text-xs text-gray-400">Multi-Framework Showcase</p>
				</div>
			</div>

			<!-- Search -->
			<div class="mx-8 max-w-lg flex-1">
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Search class="h-5 w-5 text-gray-400" />
					</div>
					<input
						type="text"
						value={searchTerm}
						on:input={handleSearchInput}
						placeholder="Search animations..."
						class="block w-full rounded-md border border-gray-600 bg-gray-700 py-2 pr-3 pl-10 leading-5 text-white placeholder-gray-400 focus:border-blue-400 focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-400 focus:outline-none"
					/>
				</div>
			</div>

			<!-- Actions -->
			<div class="flex items-center space-x-3">
				<!-- GitHub Stars -->
				<a
					href="https://github.com/DeadlyFire15/tailwind-animations-showcase/stargazers"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-700/50 px-3 py-1.5 text-sm text-gray-300 transition-all hover:border-yellow-500 hover:bg-gray-600/50 hover:text-yellow-400"
					title="Star on GitHub"
				>
					<Star size={14} />
					<span class="hidden sm:inline">Star</span>
				</a>

				<!-- NPM Package -->
				<a
					href="https://www.npmjs.com/package/tailwind-animations-showcase"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-700/50 px-3 py-1.5 text-sm text-gray-300 transition-all hover:border-red-500 hover:bg-gray-600/50 hover:text-red-400"
					title="View on NPM"
				>
					<Package size={14} />
					<span class="hidden sm:inline">NPM</span>
				</a>

				<!-- GitHub Repository -->
				<a
					href="https://github.com/DeadlyFire15/tailwind-animations-showcase"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-gray-200"
					title="GitHub Repository"
				>
					<Github size={20} />
				</a>

				<!-- Install Button -->
				<button
					class="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25"
					title="Install npm package"
					on:click={() => {
						navigator.clipboard.writeText('npm i tailwind-animations-showcase');
						// Opcional: mostrar toast de copiado
					}}
				>
					<Download size={16} />
					<span class="hidden sm:inline">Install</span>
				</button>
			</div>
		</div>

		<!-- Categories -->
		<div class="pb-4">
			<div class="scrollbar-hide flex space-x-1 overflow-x-auto">
				{#each categories as category}
					<button
						class="rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap capitalize transition-colors
                   {activeCategory === category
							? 'bg-blue-900 text-blue-300'
							: 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'}"
						on:click={() => handleCategoryClick(category)}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</div>
</nav>

<style>
	.scrollbar-hide {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
