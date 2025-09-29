// Animation data organized by categories

export const animations = {
	attention: [
		{
			id: 'bounce',
			name: 'Bounce',
			description: 'Bouncing animation',
			classes: 'animate-bounce-attention',
			customCSS: `
@keyframes bounceAttention {
  0%, 20%, 53%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }
  90% {
    transform: translate3d(0, -4px, 0) scaleY(0.95);
  }
}
.animate-bounce-attention {
  animation: bounceAttention 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'flash',
			name: 'Flash',
			description: 'Flashing opacity animation',
			classes: 'animate-flash',
			customCSS: `
@keyframes flash {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
.animate-flash {
  animation: flash 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'pulse',
			name: 'Pulse',
			description: 'Pulsing scale animation',
			classes: 'animate-pulse-attention',
			customCSS: `
@keyframes pulseAttention {
  0%, 100% { transform: scale3d(1, 1, 1); }
  50% { transform: scale3d(1.05, 1.05, 1.05); }
}
.animate-pulse-attention {
  animation: pulseAttention 2s ease-in-out infinite;
}`,
			preview: true,
			isAlwaysActive: false
		},
		{
			id: 'rubberBand',
			name: 'Rubber Band',
			description: 'Elastic stretching animation',
			classes: 'animate-rubber-band',
			customCSS: `
@keyframes rubberBand {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
}
.animate-rubber-band {
  animation: rubberBand 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'shake',
			name: 'Shake',
			description: 'Horizontal shaking motion',
			classes: 'animate-shake-x',
			customCSS: `
@keyframes shakeX {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}
.animate-shake-x {
  animation: shakeX 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'swing',
			name: 'Swing',
			description: 'Swinging pendulum motion',
			classes: 'animate-swing',
			customCSS: `
@keyframes swing {
  20% { transform: rotate3d(0, 0, 1, 15deg); }
  40% { transform: rotate3d(0, 0, 1, -10deg); }
  60% { transform: rotate3d(0, 0, 1, 5deg); }
  80% { transform: rotate3d(0, 0, 1, -5deg); }
  100% { transform: rotate3d(0, 0, 1, 0deg); }
}
.animate-swing {
  animation: swing 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'tada',
			name: 'Tada',
			description: 'Celebration animation with scale and rotation',
			classes: 'animate-tada',
			customCSS: `
@keyframes tada {
  0% { transform: scale3d(1, 1, 1); }
  10%, 20% { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }
  30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }
  40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }
  100% { transform: scale3d(1, 1, 1); }
}
.animate-tada {
  animation: tada 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'heartbeat',
			name: 'Heartbeat',
			description: 'Rhythmic heartbeat animation',
			classes: 'animate-heartbeat',
			customCSS: `
@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}
.animate-heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}`,
			preview: true,
			isAlwaysActive: false
		},
		{
			id: 'float',
			name: 'Float',
			description: 'Gentle floating animation',
			classes: 'animate-float',
			customCSS: `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}`,
			preview: true,
			isAlwaysActive: false
		},
		{
			id: 'glow',
			name: 'Glow',
			description: 'Continuous glowing effect',
			classes: 'animate-glow',
			customCSS: `
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.8), 0 0 35px rgba(59, 130, 246, 0.6);
  }
}
.animate-glow {
  animation: glow 2s ease-in-out infinite;
}`,
			preview: true,
			isAlwaysActive: false
		},
		{
			id: 'wobble',
			name: 'Wobble',
			description: 'Wobbling motion with translation and rotation',
			classes: 'animate-wobble',
			customCSS: `
@keyframes wobble {
  0% { transform: translate3d(0, 0, 0); }
  15% { transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }
  30% { transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }
  45% { transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }
  60% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }
  75% { transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }
  100% { transform: translate3d(0, 0, 0); }
}
.animate-wobble {
  animation: wobble 1s ease-in-out;
}`,
			preview: true
		}
	],

	'fading-entrances': [
		{
			id: 'fadeIn',
			name: 'Fade In',
			description: 'Simple fade in animation',
			classes: 'animate-fade-in',
			customCSS: `
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'fadeInDown',
			name: 'Fade In Down',
			description: 'Fade in from top',
			classes: 'animate-fade-in-down',
			customCSS: `
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'fadeInLeft',
			name: 'Fade In Left',
			description: 'Fade in from left',
			classes: 'animate-fade-in-left',
			customCSS: `
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'fadeInRight',
			name: 'Fade In Right',
			description: 'Fade in from right',
			classes: 'animate-fade-in-right',
			customCSS: `
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-right {
  animation: fadeInRight 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'fadeInUp',
			name: 'Fade In Up',
			description: 'Fade in from bottom',
			classes: 'animate-fade-in-up',
			customCSS: `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}`,
			preview: true
		}
	],

	'fading-loops': [
		{
			id: 'fadeLoop',
			name: 'Fade Loop',
			description: 'Continuous fade in and out loop',
			classes: 'animate-fade-loop',
			customCSS: `
@keyframes fadeLoop {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}
.animate-fade-loop {
  animation: fadeLoop 2s ease-in-out infinite;
}`,
			preview: true
		},
		{
			id: 'fadeFloatLoop',
			name: 'Fade Float Loop',
			description: 'Floating fade animation with vertical movement',
			classes: 'animate-fade-float-loop',
			customCSS: `
@keyframes fadeFloatLoop {
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.3;
    transform: translateY(-20px);
  }
}
.animate-fade-float-loop {
  animation: fadeFloatLoop 3s ease-in-out infinite;
}`,
			preview: true
		},
		{
			id: 'fadePulseLoop',
			name: 'Fade Pulse Loop',
			description: 'Pulsing fade with scale effect',
			classes: 'animate-fade-pulse-loop',
			customCSS: `
@keyframes fadePulseLoop {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}
.animate-fade-pulse-loop {
  animation: fadePulseLoop 2.5s ease-in-out infinite;
}`,
			preview: true
		},
		{
			id: 'fadeGlowLoop',
			name: 'Fade Glow Loop',
			description: 'Glowing fade effect with blur',
			classes: 'animate-fade-glow-loop',
			customCSS: `
@keyframes fadeGlowLoop {
  0%, 100% {
    opacity: 1;
    filter: blur(0px) brightness(1);
  }
  50% {
    opacity: 0.5;
    filter: blur(1px) brightness(1.3);
  }
}
.animate-fade-glow-loop {
  animation: fadeGlowLoop 3.2s ease-in-out infinite;
}`,
			preview: true
		}
	],

	'bouncing-entrances': [
		{
			id: 'bounceIn',
			name: 'Bounce In',
			description: 'Bouncing entrance animation',
			classes: 'animate-bounce-in',
			customCSS: `
@keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
.animate-bounce-in {
  animation: bounceIn 0.75s ease-out;
}`,
			preview: true
		},
		{
			id: 'bounceInDown',
			name: 'Bounce In Down',
			description: 'Bounce in from top',
			classes: 'animate-bounce-in-down',
			customCSS: `
@keyframes bounceInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100px, 0) scale(0.3);
  }
  25% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scale(1.05);
  }
  50% {
    transform: translate3d(0, -10px, 0) scale(0.95);
  }
  75% {
    transform: translate3d(0, 5px, 0) scale(1.02);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}
.animate-bounce-in-down {
  animation: bounceInDown 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'bounceInLeft',
			name: 'Bounce In Left',
			description: 'Bounce in from left',
			classes: 'animate-bounce-in-left',
			customCSS: `
@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100px, 0, 0) scale(0.3);
  }
  25% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scale(1.05);
  }
  50% {
    transform: translate3d(-10px, 0, 0) scale(0.95);
  }
  75% {
    transform: translate3d(5px, 0, 0) scale(1.02);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}
.animate-bounce-in-left {
  animation: bounceInLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'bounceInRight',
			name: 'Bounce In Right',
			description: 'Bounce in from right',
			classes: 'animate-bounce-in-right',
			customCSS: `
@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translate3d(100px, 0, 0) scale(0.3);
  }
  25% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scale(1.05);
  }
  50% {
    transform: translate3d(10px, 0, 0) scale(0.95);
  }
  75% {
    transform: translate3d(-5px, 0, 0) scale(1.02);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}
.animate-bounce-in-right {
  animation: bounceInRight 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'bounceInUp',
			name: 'Bounce In Up',
			description: 'Bounce in from bottom',
			classes: 'animate-bounce-in-up',
			customCSS: `
@keyframes bounceInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100px, 0) scale(0.3);
  }
  25% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scale(1.05);
  }
  50% {
    transform: translate3d(0, 10px, 0) scale(0.95);
  }
  75% {
    transform: translate3d(0, -5px, 0) scale(1.02);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}
.animate-bounce-in-up {
  animation: bounceInUp 1s ease-out;
}`,
			preview: true
		}
	],

	'bouncing-loops': [
		{
			id: 'bounceLoop',
			name: 'Bounce Loop',
			description: 'Continuous bouncing animation loop',
			classes: 'animate-bounce-loop',
			customCSS: `
@keyframes bounceLoop {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  25% {
    transform: translateY(-10px) scale(1.05);
  }
  50% {
    transform: translateY(0) scale(1);
  }
  75% {
    transform: translateY(-5px) scale(1.02);
  }
}
.animate-bounce-loop {
  animation: bounceLoop 2s ease-in-out infinite;
}`,
			preview: true
		},
		{
			id: 'bounceScaleLoop',
			name: 'Bounce Scale Loop',
			description: 'Bouncing with scaling effect loop',
			classes: 'animate-bounce-scale-loop',
			customCSS: `
@keyframes bounceScaleLoop {
  0%, 100% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(1.1) translateY(-15px);
  }
}
.animate-bounce-scale-loop {
  animation: bounceScaleLoop 1.8s ease-in-out infinite;
}`,
			preview: true
		}
	],

	'sliding-entrances': [
		{
			id: 'slideInDown',
			name: 'Slide In Down',
			description: 'Slide in from top',
			classes: 'animate-slide-in-down',
			customCSS: `
@keyframes slideInDown {
  0% {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.animate-slide-in-down {
  animation: slideInDown 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'slideInLeft',
			name: 'Slide In Left',
			description: 'Slide in from left',
			classes: 'animate-slide-in-left',
			customCSS: `
@keyframes slideInLeft {
  0% {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.animate-slide-in-left {
  animation: slideInLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'slideInRight',
			name: 'Slide In Right',
			description: 'Slide in from right',
			classes: 'animate-slide-in-right',
			customCSS: `
@keyframes slideInRight {
  0% {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.animate-slide-in-right {
  animation: slideInRight 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'slideInUp',
			name: 'Slide In Up',
			description: 'Slide in from bottom',
			classes: 'animate-slide-in-up',
			customCSS: `
@keyframes slideInUp {
  0% {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.animate-slide-in-up {
  animation: slideInUp 1s ease-out;
}`,
			preview: true
		}
	],

	'sliding-loops': [
		{
			id: 'slideLoop',
			name: 'Slide Loop',
			description: 'Continuous sliding motion loop',
			classes: 'animate-slide-loop',
			customCSS: `
@keyframes slideLoop {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15px);
  }
}
.animate-slide-loop {
  animation: slideLoop 2.5s ease-in-out infinite;
}`,
			preview: true
		},
		{
			id: 'slideWaveLoop',
			name: 'Slide Wave Loop',
			description: 'Wave-like sliding animation',
			classes: 'animate-slide-wave-loop',
			customCSS: `
@keyframes slideWaveLoop {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(2deg);
  }
  75% {
    transform: translateY(10px) rotate(-2deg);
  }
}
.animate-slide-wave-loop {
  animation: slideWaveLoop 3s ease-in-out infinite;
}`,
			preview: true
		}
	],

	'zooming-entrances': [
		{
			id: 'zoomIn',
			name: 'Zoom In',
			description: 'Zoom in animation',
			classes: 'animate-zoom-in',
			customCSS: `
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-zoom-in {
  animation: zoomIn 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'zoomInDown',
			name: 'Zoom In Down',
			description: 'Zoom in from top',
			classes: 'animate-zoom-in-down',
			customCSS: `
@keyframes zoomInDown {
  0% {
    opacity: 0;
    transform: scale(0.1) translateY(-60px);
  }
  50% {
    opacity: 1;
    transform: scale(0.8) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-zoom-in-down {
  animation: zoomInDown 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'zoomInLeft',
			name: 'Zoom In Left',
			description: 'Zoom in from left',
			classes: 'animate-zoom-in-left',
			customCSS: `
@keyframes zoomInLeft {
  0% {
    opacity: 0;
    transform: scale(0.1) translateX(-60px);
  }
  50% {
    opacity: 1;
    transform: scale(0.8) translateX(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}
.animate-zoom-in-left {
  animation: zoomInLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'zoomInRight',
			name: 'Zoom In Right',
			description: 'Zoom in from right',
			classes: 'animate-zoom-in-right',
			customCSS: `
@keyframes zoomInRight {
  0% {
    opacity: 0;
    transform: scale(0.1) translateX(60px);
  }
  50% {
    opacity: 1;
    transform: scale(0.8) translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}
.animate-zoom-in-right {
  animation: zoomInRight 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'zoomInUp',
			name: 'Zoom In Up',
			description: 'Zoom in from bottom',
			classes: 'animate-zoom-in-up',
			customCSS: `
@keyframes zoomInUp {
  0% {
    opacity: 0;
    transform: scale(0.1) translateY(60px);
  }
  50% {
    opacity: 1;
    transform: scale(0.8) translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-zoom-in-up {
  animation: zoomInUp 1s ease-out;
}`,
			preview: true
		}
	],

	'zooming-loops': [
		{
			id: 'zoomLoop',
			name: 'Zoom Loop',
			description: 'Continuous zoom in and out loop',
			classes: 'animate-zoom-loop',
			customCSS: `
@keyframes zoomLoop {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
.animate-zoom-loop {
  animation: zoomLoop 2s ease-in-out infinite;
}`,
			preview: true
		},
		{
			id: 'zoomPulseLoop',
			name: 'Zoom Pulse Loop',
			description: 'Pulsing zoom with opacity changes',
			classes: 'animate-zoom-pulse-loop',
			customCSS: `
@keyframes zoomPulseLoop {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}
.animate-zoom-pulse-loop {
  animation: zoomPulseLoop 2.5s ease-in-out infinite;
}`,
			preview: true
		}
	],

	'rotating-entrances': [
		{
			id: 'rotateIn',
			name: 'Rotate In',
			description: 'Rotating entrance animation',
			classes: 'animate-rotate-in',
			customCSS: `
@keyframes rotateIn {
  0% {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate-rotate-in {
  animation: rotateIn 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'rotateInDownLeft',
			name: 'Rotate In Down Left',
			description: 'Rotate in from top right corner',
			classes: 'animate-rotate-in-down-left',
			customCSS: `
@keyframes rotateInDownLeft {
  0% {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate-rotate-in-down-left {
  animation: rotateInDownLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'rotateInDownRight',
			name: 'Rotate In Down Right',
			description: 'Rotate in from top left corner',
			classes: 'animate-rotate-in-down-right',
			customCSS: `
@keyframes rotateInDownRight {
  0% {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate-rotate-in-down-right {
  animation: rotateInDownRight 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'rotateInUpLeft',
			name: 'Rotate In Up Left',
			description: 'Rotate in from bottom right corner',
			classes: 'animate-rotate-in-up-left',
			customCSS: `
@keyframes rotateInUpLeft {
  0% {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate-rotate-in-up-left {
  animation: rotateInUpLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'rotateInUpRight',
			name: 'Rotate In Up Right',
			description: 'Rotate in from bottom left corner',
			classes: 'animate-rotate-in-up-right',
			customCSS: `
@keyframes rotateInUpRight {
  0% {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate-rotate-in-up-right {
  animation: rotateInUpRight 1s ease-out;
}`,
			preview: true
		}
	],

	'rotating-loops': [
		{
			id: 'rotateLoop',
			name: 'Rotate Loop',
			description: 'Continuous rotation loop',
			classes: 'animate-rotate-loop',
			customCSS: `
@keyframes rotateLoop {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-rotate-loop {
  animation: rotateLoop 4s linear infinite;
}`,
			preview: true
		},
		{
			id: 'rotateWobbleLoop',
			name: 'Rotate Wobble Loop',
			description: 'Wobbling rotation effect',
			classes: 'animate-rotate-wobble-loop',
			customCSS: `
@keyframes rotateWobbleLoop {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}
.animate-rotate-wobble-loop {
  animation: rotateWobbleLoop 2.5s ease-in-out infinite;
}`,
			preview: true
		}
	],

	loading: [
		{
			id: 'pulse',
			name: 'Pulse Loading',
			description: 'Pulsing loader animation',
			classes: 'animate-pulse-glow',
			customCSS: `
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6);
  }
}
.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}`,
			preview: true,
			isAlwaysActive: true
		},
		{
			id: 'spinner-ring',
			name: 'Spinner Ring',
			description: 'Ring spinner with rotating border',
			classes: 'animate-spinner-ring',
			customCSS: `
@keyframes spinner-ring {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spinner-ring {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(59, 130, 246, 0.3);
  border-left-color: #3b82f6;
  border-radius: 50%;
  animation: spinner-ring 1s linear infinite;
}`,
			preview: true,
			isAlwaysActive: true,
			customElement: true
		},
		{
			id: 'dots-bounce',
			name: 'Bouncing Dots',
			description: 'Three dots bouncing in sequence',
			classes: 'animate-dots-bounce',
			customCSS: `
@keyframes dots-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
.animate-dots-bounce {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: currentColor;
  border-radius: 100%;
  animation: dots-bounce 1.4s ease-in-out infinite both;
}
.animate-dots-bounce:nth-child(1) { animation-delay: -0.32s; }
.animate-dots-bounce:nth-child(2) { animation-delay: -0.16s; }
.animate-dots-bounce:nth-child(3) { animation-delay: 0s; }`,
			preview: true,
			isAlwaysActive: true,
			customElement: true,
			multipleElements: true
		},
		{
			id: 'typing',
			name: 'Typing Effect',
			description: 'Simulated typing animation with cursor',
			classes: 'animate-typing',
			customCSS: `
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: currentColor; }
}
.animate-typing {
  display: inline-block;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid currentColor;
  animation: 
    typing 3s steps(20, end) infinite,
    blink-caret 0.75s step-end infinite;
}`,
			preview: true,
			isAlwaysActive: true,
			customText: 'Hello World!'
		}
	]
};
