<!-- Animation Test Page -->
<svelte:head>
	<title>Animation Test - Tailwind Animations Showcase</title>
</svelte:head>

<div class="min-h-screen bg-gray-900 p-8">
	<h1 class="mb-8 text-3xl font-bold text-white">Animation Test</h1>

	<div class="space-y-6">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<!-- Test Bounce Attention -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Bounce Attention</h3>
				<div
					class="animate-bounce-attention inline-block cursor-pointer rounded bg-blue-500 p-4 text-white"
				>
					Click me!
				</div>
			</div>

			<!-- Test Flash -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Flash</h3>
				<div class="animate-flash inline-block cursor-pointer rounded bg-red-500 p-4 text-white">
					Flashing!
				</div>
			</div>

			<!-- Test Pulse Attention -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Pulse Attention</h3>
				<div
					class="animate-pulse-attention inline-block cursor-pointer rounded bg-green-500 p-4 text-white"
				>
					Pulsing!
				</div>
			</div>

			<!-- Test Rubber Band -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Rubber Band</h3>
				<div
					class="animate-rubber-band inline-block cursor-pointer rounded bg-purple-500 p-4 text-white"
				>
					Stretchy!
				</div>
			</div>

			<!-- Test Tada -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Tada</h3>
				<div class="animate-tada inline-block cursor-pointer rounded bg-yellow-500 p-4 text-white">
					Tada!
				</div>
			</div>

			<!-- Test Heart Beat -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Heart Beat</h3>
				<div
					class="animate-heart-beat inline-block cursor-pointer rounded bg-pink-500 p-4 text-white"
				>
					❤️ Heart Beat
				</div>
			</div>

			<!-- Test Fade In Down -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Fade In Down</h3>
				<div
					class="animate-fade-in-down inline-block cursor-pointer rounded bg-indigo-500 p-4 text-white"
				>
					Fade Down
				</div>
			</div>

			<!-- Test Bounce In -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Bounce In</h3>
				<div
					class="animate-bounce-in inline-block cursor-pointer rounded bg-orange-500 p-4 text-white"
				>
					Bounce In
				</div>
			</div>

			<!-- Test Zoom In -->
			<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
				<h3 class="mb-4 font-semibold text-white">Zoom In</h3>
				<div class="animate-zoom-in inline-block cursor-pointer rounded bg-teal-500 p-4 text-white">
					Zoom In
				</div>
			</div>
		</div>

		<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
			<h3 class="mb-4 font-semibold text-green-400">New Loop Animations (Always Running)</h3>
			<p class="mb-4 text-sm text-gray-300">
				These animations loop continuously and never stop - perfect for showcases!
			</p>
			<div class="grid grid-cols-3 gap-4">
				<div class="animate-fade-loop rounded bg-purple-500 p-3 text-center text-white">
					Fade Loop
				</div>
				<div class="animate-bounce-loop rounded bg-indigo-500 p-3 text-center text-white">
					Bounce Loop
				</div>
				<div class="animate-slide-loop rounded bg-cyan-500 p-3 text-center text-white">
					Slide Loop
				</div>
				<div class="animate-zoom-loop rounded bg-emerald-500 p-3 text-center text-white">
					Zoom Loop
				</div>
				<div class="animate-rotate-wobble-loop rounded bg-rose-500 p-3 text-center text-white">
					Rotate Wobble
				</div>
				<div class="animate-fade-glow-loop rounded bg-yellow-500 p-3 text-center text-white">
					Fade Glow
				</div>
			</div>
		</div>

		<div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
			<h3 class="mb-4 font-semibold text-white">Built-in Animations (Should Work)</h3>
			<div class="space-x-4">
				<div class="inline-block animate-pulse rounded bg-blue-500 p-4 text-white">
					Built-in Pulse
				</div>
				<div class="inline-block animate-bounce rounded bg-green-500 p-4 text-white">
					Built-in Bounce
				</div>
				<div class="inline-block animate-spin rounded bg-red-500 p-4 text-white">Built-in Spin</div>
			</div>
		</div>
	</div>
</div>
