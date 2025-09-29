import { join } from 'path';
import animationsPlugin from './plugin.js';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			keyframes: {
				// Additional custom keyframes will be added by plugin
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-down': {
					'0%': {
						transform: 'translateY(-100%)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				// Additional custom animations will be added by plugin
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'slide-down': 'slide-down 0.3s ease-out'
			},
			colors: {
				// Custom color palette for the showcase
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a'
				}
			},
			spacing: {
				18: '4.5rem',
				88: '22rem'
			},
			zIndex: {
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100'
			}
		}
	},
	plugins: [animationsPlugin]
};
