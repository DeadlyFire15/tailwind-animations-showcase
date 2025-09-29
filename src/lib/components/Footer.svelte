<script>
	import { Github, Heart, Code, Book } from 'lucide-svelte';
</script>

<footer class="border-t border-gray-700 bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- About -->
			<div class="col-span-1 md:col-span-2">
				<div class="mb-4 flex items-center">
					<h3 class="text-lg font-bold text-white">
						<span class="text-blue-400">Tailwind</span> Animations
					</h3>
				</div>
				<p class="mb-4 max-w-md text-gray-300">
					A comprehensive collection of beautiful Tailwind CSS animations with ready-to-use code
					examples for React, Vue, Svelte, Angular, and vanilla JavaScript.
				</p>
				<div class="flex items-center gap-4">
					<a
						href="https://github.com/DeadlyFire15/tailwind-animations-showcase"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-gray-400 transition-colors hover:text-gray-200"
					>
						<Github size={20} />
						<span>Star on GitHub</span>
					</a>
				</div>
			</div>

			<!-- Resources -->
			<div>
				<h4 class="mb-4 text-sm font-semibold tracking-wider text-gray-300 uppercase">Resources</h4>
				<ul class="space-y-3">
					<li>
						<a
							href="https://tailwindcss.com/docs"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 text-gray-400 transition-colors hover:text-gray-200"
						>
							<Book size={16} />
							Tailwind Docs
						</a>
					</li>
					<li>
						<a
							href="https://tailwindcss.com/docs/animation"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-gray-200"
						>
							Animation Utilities
						</a>
					</li>
					<li>
						<a
							href="https://tailwindcss.com/docs/customizing-colors"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-gray-200"
						>
							Customizing Colors
						</a>
					</li>
				</ul>
			</div>

			<!-- Frameworks -->
			<div>
				<h4 class="mb-4 text-sm font-semibold tracking-wider text-gray-300 uppercase">
					Frameworks
				</h4>
				<ul class="space-y-3">
					<li>
						<a
							href="https://svelte.dev"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-gray-200"
						>
							Svelte
						</a>
					</li>
					<li>
						<a
							href="https://react.dev"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-gray-200"
						>
							React
						</a>
					</li>
					<li>
						<a
							href="https://vuejs.org"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-gray-200"
						>
							Vue.js
						</a>
					</li>
					<li>
						<a
							href="https://angular.io"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-gray-200"
						>
							Angular
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom -->
		<div class="mt-12 border-t border-gray-700 pt-8">
			<div class="flex flex-col items-center justify-between md:flex-row">
				<p class="flex items-center gap-1 text-sm text-gray-400">
					Made with <Heart size={16} class="text-red-500" /> by the community
				</p>
				<div class="mt-4 flex items-center gap-4 md:mt-0">
					<span class="text-sm text-gray-400">Open Source</span>
					<span class="text-sm text-gray-400">MIT License</span>
					<a
						href="https://www.npmjs.com/package/tailwind-animations-showcase"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-200"
					>
						<Code size={16} />
						npm package
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
