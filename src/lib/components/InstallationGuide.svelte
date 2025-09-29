<script>
	import { Copy, Download, ExternalLink, CheckCircle } from 'lucide-svelte';

	let copySuccess = {};

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

	const installationSteps = [
		{
			id: 'npm',
			title: 'Install via npm',
			code: 'npm install tailwind-animations-showcase'
		},
		{
			id: 'pnpm',
			title: 'Install via pnpm',
			code: 'pnpm add tailwind-animations-showcase'
		},
		{
			id: 'yarn',
			title: 'Install via Yarn',
			code: 'yarn add tailwind-animations-showcase'
		}
	];

	const configExamples = [
		{
			id: 'tailwind-config',
			title: 'Add to tailwind.config.js',
			language: 'javascript',
			code: `module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('tailwind-animations-showcase')
  ]
}`
		},
		{
			id: 'tailwind-config-esm',
			title: 'ESM Configuration',
			language: 'javascript',
			code: `import tailwindAnimations from 'tailwind-animations-showcase';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [tailwindAnimations]
};`
		}
	];

	const usageExamples = [
		{
			id: 'basic-usage',
			title: 'Basic Usage',
			language: 'html',
			code: `<div class="animate-fade-in">
  Fade in animation
</div>

<button class="animate-bounce-custom">
  Bouncing button
</button>`
		},
		{
			id: 'with-duration',
			title: 'With Custom Duration',
			language: 'html',
			code: `<div class="animate-fade-in duration-1000">
  Slow fade in (1 second)
</div>

<div class="animate-slide-in-bottom duration-300">
  Quick slide in (0.3 seconds)
</div>`
		},
		{
			id: 'with-delay',
			title: 'With Animation Delay',
			language: 'html',
			code: `<div class="animate-fade-in delay-200">
  Fade in with 200ms delay
</div>

<div class="animate-scale-in delay-500">
  Scale in with 500ms delay
</div>`
		}
	];
</script>

<div class="rounded-xl border border-gray-700 bg-gray-800 shadow-sm">
	<div class="border-b border-gray-700 p-6">
		<div class="flex items-center gap-3">
			<div class="rounded-lg bg-blue-900 p-2">
				<Download class="h-5 w-5 text-blue-400" />
			</div>
			<div>
				<h3 class="text-lg font-semibold text-white">Installation Guide</h3>
				<p class="text-sm text-gray-300">Get started with Tailwind Animations in your project</p>
			</div>
		</div>
	</div>

	<div class="space-y-8 p-6">
		<!-- Step 1: Installation -->
		<div>
			<h4 class="text-md mb-4 flex items-center gap-2 font-semibold text-white">
				<span
					class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white"
					>1</span
				>
				Install the Package
			</h4>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each installationSteps as step}
					<div class="rounded-lg border border-gray-600 bg-gray-700 p-4">
						<div class="mb-2 flex items-center justify-between">
							<h5 class="text-sm font-medium text-gray-200">{step.title}</h5>
							<button
								class="flex items-center gap-1 rounded px-2 py-1 text-xs text-gray-400 hover:text-gray-200"
								class:text-green-600={copySuccess[step.id]}
								on:click={() => copyToClipboard(step.code, step.id)}
							>
								{#if copySuccess[step.id]}
									<CheckCircle size={12} />
									Copied!
								{:else}
									<Copy size={12} />
									Copy
								{/if}
							</button>
						</div>
						<code class="block rounded bg-gray-900 p-2 text-xs text-gray-100">
							{step.code}
						</code>
					</div>
				{/each}
			</div>
		</div>

		<!-- Step 2: Configuration -->
		<div>
			<h4 class="text-md mb-4 flex items-center gap-2 font-semibold text-white">
				<span
					class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white"
					>2</span
				>
				Configure Tailwind CSS
			</h4>

			<div class="space-y-4">
				{#each configExamples as config}
					<div class="rounded-lg border border-gray-600 bg-gray-700 p-4">
						<div class="mb-3 flex items-center justify-between">
							<h5 class="text-sm font-medium text-gray-200">{config.title}</h5>
							<button
								class="flex items-center gap-1 rounded px-2 py-1 text-xs text-gray-400 hover:text-gray-200"
								class:text-green-400={copySuccess[config.id]}
								on:click={() => copyToClipboard(config.code, config.id)}
							>
								{#if copySuccess[config.id]}
									<CheckCircle size={12} />
									Copied!
								{:else}
									<Copy size={12} />
									Copy
								{/if}
							</button>
						</div>
						<pre class="overflow-x-auto rounded bg-gray-900 p-3 text-sm text-gray-100"><code
								>{config.code}</code
							></pre>
					</div>
				{/each}
			</div>
		</div>

		<!-- Step 3: Usage Examples -->
		<div>
			<h4 class="text-md mb-4 flex items-center gap-2 font-semibold text-white">
				<span
					class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white"
					>3</span
				>
				Start Using Animations
			</h4>

			<div class="space-y-4">
				{#each usageExamples as example}
					<div class="rounded-lg border border-gray-600 bg-gray-700 p-4">
						<div class="mb-3 flex items-center justify-between">
							<h5 class="text-sm font-medium text-gray-200">{example.title}</h5>
							<button
								class="flex items-center gap-1 rounded px-2 py-1 text-xs text-gray-400 hover:text-gray-200"
								class:text-green-400={copySuccess[example.id]}
								on:click={() => copyToClipboard(example.code, example.id)}
							>
								{#if copySuccess[example.id]}
									<CheckCircle size={12} />
									Copied!
								{:else}
									<Copy size={12} />
									Copy
								{/if}
							</button>
						</div>
						<pre class="overflow-x-auto rounded bg-gray-900 p-3 text-sm text-gray-100"><code
								>{example.code}</code
							></pre>
					</div>
				{/each}
			</div>
		</div>

		<!-- Additional Resources -->
		<div class="rounded-lg bg-gray-700 p-6">
			<h4 class="text-md mb-4 font-semibold text-white">Additional Resources</h4>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<a
					href="https://tailwindcss.com/docs/animation"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 rounded-lg border border-gray-600 bg-gray-800 p-3 transition-colors hover:border-blue-400"
				>
					<ExternalLink class="h-5 w-5 text-blue-400" />
					<div>
						<div class="text-sm font-medium text-white">Tailwind CSS Animation Docs</div>
						<div class="text-xs text-gray-400">Learn about animation utilities</div>
					</div>
				</a>

				<a
					href="https://github.com/DeadlyFire15/tailwind-animations-showcase/blob/main/CONTRIBUTING.md"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 rounded-lg border border-gray-600 bg-gray-800 p-3 transition-colors hover:border-blue-400"
				>
					<ExternalLink class="h-5 w-5 text-blue-400" />
					<div>
						<div class="text-sm font-medium text-white">Contributing Guide</div>
						<div class="text-xs text-gray-400">Add your own animations</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
