<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import AnimationCard from '$lib/components/AnimationCard.svelte';
	import CodeModal from '$lib/components/CodeModal.svelte';
	import InstallationGuide from '$lib/components/InstallationGuide.svelte';
	import BackgroundEffects from '$lib/components/BackgroundEffects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { animations } from '$lib/animations/index.js';
	import { searchAnimations, getAnimationsByCategory } from '$lib/utils/animationHelpers.js';
	import { Search, BookOpen, Home, Menu, X } from 'lucide-svelte';

	let searchTerm = '';
	let activeCategory = 'attention';
	let selectedAnimation = null;
	let showInstallation = false;
	let mounted = false;
	let sidebarOpen = false;
	let showModal = false;

	// Calcular categorías una sola vez en lugar de reactive statement
	const categories = [
		{ id: 'attention', name: 'Attention', count: animations.attention?.length || 0 },
		{
			id: 'fading-entrances',
			name: 'Fading Entrances',
			count: animations['fading-entrances']?.length || 0
		},
		{ id: 'fading-loops', name: 'Fading Loops', count: animations['fading-loops']?.length || 0 },
		{
			id: 'bouncing-entrances',
			name: 'Bouncing Entrances',
			count: animations['bouncing-entrances']?.length || 0
		},
		{
			id: 'bouncing-loops',
			name: 'Bouncing Loops',
			count: animations['bouncing-loops']?.length || 0
		},
		{
			id: 'sliding-entrances',
			name: 'Sliding Entrances',
			count: animations['sliding-entrances']?.length || 0
		},
		{ id: 'sliding-loops', name: 'Sliding Loops', count: animations['sliding-loops']?.length || 0 },
		{
			id: 'zooming-entrances',
			name: 'Zooming Entrances',
			count: animations['zooming-entrances']?.length || 0
		},
		{ id: 'zooming-loops', name: 'Zooming Loops', count: animations['zooming-loops']?.length || 0 },
		{
			id: 'rotating-entrances',
			name: 'Rotating Entrances',
			count: animations['rotating-entrances']?.length || 0
		},
		{
			id: 'rotating-loops',
			name: 'Rotating Loops',
			count: animations['rotating-loops']?.length || 0
		},
		{ id: 'loading', name: 'Loading', count: animations.loading?.length || 0 }
	];

	// Optimizar filtrado usando utilidades
	let filteredAnimations = [];

	$: {
		if (searchTerm) {
			filteredAnimations = searchAnimations(animations, searchTerm);
		} else {
			filteredAnimations = getAnimationsByCategory(animations, activeCategory);
		}
	}
	function handleCategoryChange(categoryId) {
		activeCategory = categoryId;
		searchTerm = '';
		sidebarOpen = false; // Close sidebar on mobile after selection
	}

	function openModal(animation) {
		// Abrir modal inmediatamente
		selectedAnimation = animation;
		showModal = true;
	}

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Animations - Tailwind CSS Animations Showcase</title>
	<meta
		name="description"
		content="Explore 100+ beautiful Tailwind CSS animations with code examples for React, Vue, Svelte, Angular, and vanilla JavaScript."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<BackgroundEffects />

	<!-- Mobile Header -->
	<header
		class="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm lg:hidden"
	>
		<div class="flex items-center justify-between px-4 py-3">
			<div class="flex items-center gap-3">
				<button
					class="rounded-lg bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
					on:click={toggleSidebar}
				>
					{#if sidebarOpen}
						<X size={20} />
					{:else}
						<Menu size={20} />
					{/if}
				</button>
				<h1 class="text-xl font-bold">Animations</h1>
			</div>
			<button
				class="flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
				on:click={() => goto('/')}
			>
				<Home size={16} />
				Home
			</button>
		</div>
	</header>

	<div class="flex">
		<!-- Sidebar -->
		<aside
			class="fixed inset-y-0 left-0 z-40 w-64 transform border-r border-gray-800 bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 {sidebarOpen
				? 'translate-x-0'
				: '-translate-x-full'}"
		>
			<div class="flex h-full flex-col">
				<!-- Desktop Header -->
				<div class="hidden border-b border-gray-800 p-6 lg:block">
					<div class="mb-4 flex items-center gap-3">
						<button
							class="flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
							on:click={() => goto('/')}
						>
							<Home size={16} />
							Home
						</button>
					</div>
					<h1 class="text-2xl font-bold">Animations</h1>
					<p class="mt-1 text-sm text-gray-400">Explore our collection</p>
				</div>

				<!-- Search -->
				<div class="border-b border-gray-800 p-4">
					<div class="relative">
						<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
						<input
							type="text"
							placeholder="Search animations..."
							bind:value={searchTerm}
							class="w-full rounded-lg border border-gray-700 bg-gray-800/50 py-2 pr-4 pl-10 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
						/>
					</div>
					{#if searchTerm}
						<p class="mt-2 text-xs text-gray-400">
							Found {filteredAnimations.length} result{filteredAnimations.length !== 1 ? 's' : ''}
						</p>
					{/if}
				</div>

				<!-- Categories -->
				<nav class="flex-1 overflow-y-auto p-4">
					<div class="space-y-1">
						{#each categories as category}
							<button
								class="w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200 {activeCategory ===
								category.id
									? 'bg-blue-600 text-white'
									: 'text-gray-300 hover:bg-gray-800 hover:text-white'}"
								on:click={() => handleCategoryChange(category.id)}
							>
								<div class="flex items-center justify-between">
									<span class="capitalize">{category.name}</span>
									<span class="text-xs opacity-75">{category.count}</span>
								</div>
							</button>
						{/each}
					</div>

					<!-- Installation Guide Button -->
					<div class="mt-6 border-t border-gray-800 pt-4">
						<button
							class="flex w-full items-center gap-2 rounded-lg border border-green-600/20 bg-green-600/10 px-3 py-2 text-sm font-medium text-green-400 transition-all duration-200 hover:bg-green-600/20"
							on:click={() => (showInstallation = true)}
						>
							<BookOpen size={16} />
							Installation Guide
						</button>
					</div>
				</nav>
			</div>
		</aside>

		<!-- Overlay for mobile sidebar -->
		{#if sidebarOpen}
			<div
				class="fixed inset-0 z-30 bg-black/50 lg:hidden"
				role="button"
				tabindex="0"
				on:click={toggleSidebar}
				on:keydown={(e) => e.key === 'Escape' && toggleSidebar()}
			></div>
		{/if}

		<!-- Main Content -->
		<main class="flex-1 lg:ml-0">
			<div class="relative z-10 p-4 sm:p-6 lg:p-8">
				<!-- Content Header -->
				<div class="mb-8">
					{#if searchTerm}
						<h2 class="mb-2 text-2xl font-bold text-white">
							Search Results for "{searchTerm}"
						</h2>
						<p class="text-gray-300">
							Found {filteredAnimations.length} animation{filteredAnimations.length !== 1
								? 's'
								: ''}
						</p>
					{:else}
						<h2 class="mb-2 text-3xl font-bold text-white capitalize">
							{activeCategory} Animations
						</h2>
						<p class="text-gray-400">
							{filteredAnimations.length} animation{filteredAnimations.length !== 1 ? 's' : ''} available
						</p>
					{/if}
				</div>

				<!-- Animations Grid -->
				{#if filteredAnimations.length > 0}
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{#each filteredAnimations as animation (animation.id)}
							<AnimationCard
								{animation}
								category={animation.category}
								on:openModal={(e) => openModal(e.detail)}
							/>
						{/each}
					</div>
				{:else if searchTerm}
					<!-- No Search Results -->
					<div class="py-16 text-center">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800"
						>
							<Search class="h-8 w-8 text-gray-400" />
						</div>
						<h3 class="mb-2 text-xl font-semibold text-white">No animations found</h3>
						<p class="mb-4 text-gray-400">
							Try searching for different keywords or explore our categories.
						</p>
						<button
							class="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
							on:click={() => (searchTerm = '')}
						>
							Clear Search
						</button>
					</div>
				{:else}
					<!-- No Animations in Category -->
					<div class="py-16 text-center">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800"
						>
							<span class="text-2xl">🎭</span>
						</div>
						<h3 class="mb-2 text-xl font-semibold text-white">No animations yet</h3>
						<p class="text-gray-400">
							This category doesn't have any animations yet. Check back soon!
						</p>
					</div>
				{/if}
			</div>
		</main>
	</div>

	<!-- Footer -->
	<Footer />
</div>

<!-- Modals -->
{#if selectedAnimation}
	<CodeModal animation={selectedAnimation} on:close={() => (selectedAnimation = null)} />
{/if}

{#if showInstallation}
	<InstallationGuide on:close={() => (showInstallation = false)} />
{/if}

<!-- Global Modal -->
{#if showModal && selectedAnimation}
	<CodeModal bind:isOpen={showModal} animation={selectedAnimation} />
{/if}
