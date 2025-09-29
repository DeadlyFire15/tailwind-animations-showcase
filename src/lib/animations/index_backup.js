// Animation categories and data
export const animationCategories = [
	'attention',
	'fading-entrances',
	'fading-loops',
	'bouncing-entrances',
	'bouncing-loops',
	'sliding-entrances',
	'sliding-loops',
	'zooming-entrances',
	'zooming-loops',
	'rotating-entrances',
	'rotating-loops',
	'back-entrances',
	'back-loops',
	'flippers',
	'lightspeed',
	'specials',
	'hover',
	'loading'
];

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
  animation: pulseAttention 1s ease-in-out;
}`,
			preview: true
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
			id: 'shakeX',
			name: 'Shake X',
			description: 'Horizontal shake animation',
			classes: 'animate-shake-x',
			customCSS: `
@keyframes shakeX {
  0%, 100% { transform: translate3d(0, 0, 0); }
  10%, 30%, 50%, 70%, 90% { transform: translate3d(-10px, 0, 0); }
  20%, 40%, 60%, 80% { transform: translate3d(10px, 0, 0); }
}
.animate-shake-x {
  animation: shakeX 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'shakeY',
			name: 'Shake Y',
			description: 'Vertical shake animation',
			classes: 'animate-shake-y',
			customCSS: `
@keyframes shakeY {
  0%, 100% { transform: translate3d(0, 0, 0); }
  10%, 30%, 50%, 70%, 90% { transform: translate3d(0, -10px, 0); }
  20%, 40%, 60%, 80% { transform: translate3d(0, 10px, 0); }
}
.animate-shake-y {
  animation: shakeY 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'headShake',
			name: 'Head Shake',
			description: 'Head shaking animation',
			classes: 'animate-head-shake',
			customCSS: `
@keyframes headShake {
  0% { transform: translateX(0); }
  6.5% { transform: translateX(-6px) rotateY(-9deg); }
  18.5% { transform: translateX(5px) rotateY(7deg); }
  31.5% { transform: translateX(-3px) rotateY(-5deg); }
  43.5% { transform: translateX(2px) rotateY(3deg); }
  50% { transform: translateX(0); }
}
.animate-head-shake {
  animation: headShake 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'swing',
			name: 'Swing',
			description: 'Swinging animation',
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
  transform-origin: top center;
  animation: swing 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'tada',
			name: 'Tada',
			description: 'Celebration animation',
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
			id: 'wobble',
			name: 'Wobble',
			description: 'Wobbling animation',
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
		},
		{
			id: 'jello',
			name: 'Jello',
			description: 'Jello-like wobbling animation',
			classes: 'animate-jello',
			customCSS: `
@keyframes jello {
  0%, 11.1%, 100% { transform: translate3d(0, 0, 0); }
  22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); }
  33.3% { transform: skewX(6.25deg) skewY(6.25deg); }
  44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); }
  55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); }
  66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
  77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); }
  88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); }
}
.animate-jello {
  animation: jello 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'heartBeat',
			name: 'Heart Beat',
			description: 'Heart beating animation',
			classes: 'animate-heart-beat',
			customCSS: `
@keyframes heartBeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}
.animate-heart-beat {
  animation: heartBeat 1.5s ease-in-out infinite;
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
			id: 'fadeInDownBig',
			name: 'Fade In Down Big',
			description: 'Fade in from far top',
			classes: 'animate-fade-in-down-big',
			customCSS: `
@keyframes fadeInDownBig {
  0% {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-down-big {
  animation: fadeInDownBig 1.3s ease-out;
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
			id: 'fadeInLeftBig',
			name: 'Fade In Left Big',
			description: 'Fade in from far left',
			classes: 'animate-fade-in-left-big',
			customCSS: `
@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-left-big {
  animation: fadeInLeftBig 1.3s ease-out;
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
			id: 'fadeInRightBig',
			name: 'Fade In Right Big',
			description: 'Fade in from far right',
			classes: 'animate-fade-in-right-big',
			customCSS: `
@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-right-big {
  animation: fadeInRightBig 1.3s ease-out;
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
		},
		{
			id: 'fadeInUpBig',
			name: 'Fade In Up Big',
			description: 'Fade in from far bottom',
			classes: 'animate-fade-in-up-big',
			customCSS: `
@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-up-big {
  animation: fadeInUpBig 1.3s ease-out;
}`,
			preview: true
		},
		{
			id: 'fadeInTopLeft',
			name: 'Fade In Top Left',
			description: 'Fade in from top left corner',
			classes: 'animate-fade-in-top-left',
			customCSS: `
@keyframes fadeInTopLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-top-left {
  animation: fadeInTopLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'fadeInTopRight',
			name: 'Fade In Top Right',
			description: 'Fade in from top right corner',
			classes: 'animate-fade-in-top-right',
			customCSS: `
@keyframes fadeInTopRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-top-right {
  animation: fadeInTopRight 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'fadeInBottomLeft',
			name: 'Fade In Bottom Left',
			description: 'Fade in from bottom left corner',
			classes: 'animate-fade-in-bottom-left',
			customCSS: `
@keyframes fadeInBottomLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-bottom-left {
  animation: fadeInBottomLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'fadeInBottomRight',
			name: 'Fade In Bottom Right',
			description: 'Fade in from bottom right corner',
			classes: 'animate-fade-in-bottom-right',
			customCSS: `
@keyframes fadeInBottomRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-fade-in-bottom-right {
  animation: fadeInBottomRight 1s ease-out;
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
}
`,
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
			id: 'fadeSlideLoop',
			name: 'Fade Slide Loop',
			description: 'Fading with horizontal sliding motion',
			classes: 'animate-fade-slide-loop',
			customCSS: `
@keyframes fadeSlideLoop {
  0%, 100% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0.3;
    transform: translateX(20px);
  }
}
.animate-fade-slide-loop {
  animation: fadeSlideLoop 2.8s ease-in-out infinite;
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
  0%, 60%, 75%, 90%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }
  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }
  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }
  100% {
    transform: translate3d(0, 0, 0);
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
  0%, 60%, 75%, 90%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }
  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }
  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }
  100% {
    transform: translate3d(0, 0, 0);
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
  0%, 60%, 75%, 90%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }
  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }
  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }
  100% {
    transform: translate3d(0, 0, 0);
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
  0%, 60%, 75%, 90%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }
  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }
  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }
  100% {
    transform: translate3d(0, 0, 0);
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
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
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
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
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
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
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
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
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
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate-zoom-in-up {
  animation: zoomInUp 1s ease-out;
}`,
			preview: true
		}
	],

	'zooming-exits': [
		{
			id: 'zoomOut',
			name: 'Zoom Out',
			description: 'Zoom out animation',
			classes: 'animate-zoom-out',
			customCSS: `
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
.animate-zoom-out {
  animation: zoomOut 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'zoomOutDown',
			name: 'Zoom Out Down',
			description: 'Zoom out to bottom',
			classes: 'animate-zoom-out-down',
			customCSS: `
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  100% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate-zoom-out-down {
  animation: zoomOutDown 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'zoomOutLeft',
			name: 'Zoom Out Left',
			description: 'Zoom out to left',
			classes: 'animate-zoom-out-left',
			customCSS: `
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  100% {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}
.animate-zoom-out-left {
  animation: zoomOutLeft 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'zoomOutRight',
			name: 'Zoom Out Right',
			description: 'Zoom out to right',
			classes: 'animate-zoom-out-right',
			customCSS: `
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  100% {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}
.animate-zoom-out-right {
  animation: zoomOutRight 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'zoomOutUp',
			name: 'Zoom Out Up',
			description: 'Zoom out to top',
			classes: 'animate-zoom-out-up',
			customCSS: `
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  100% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate-zoom-out-up {
  animation: zoomOutUp 1s ease-in;
}`,
			preview: true
		}
	],

	'rotating-entrances': [
		{
			id: 'rotateIn',
			name: 'Rotate In',
			description: 'Rotate in animation',
			classes: 'animate-rotate-in',
			customCSS: `
@keyframes rotateIn {
  0% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, -200deg);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
			description: 'Rotate in from bottom left',
			classes: 'animate-rotate-in-down-left',
			customCSS: `
@keyframes rotateInDownLeft {
  0% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, -45deg);
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transform-origin: left bottom;
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
			description: 'Rotate in from bottom right',
			classes: 'animate-rotate-in-down-right',
			customCSS: `
@keyframes rotateInDownRight {
  0% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, 45deg);
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transform-origin: right bottom;
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
			description: 'Rotate in from top left',
			classes: 'animate-rotate-in-up-left',
			customCSS: `
@keyframes rotateInUpLeft {
  0% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, 45deg);
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transform-origin: left bottom;
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
			description: 'Rotate in from top right',
			classes: 'animate-rotate-in-up-right',
			customCSS: `
@keyframes rotateInUpRight {
  0% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, -90deg);
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transform-origin: right bottom;
  }
}
.animate-rotate-in-up-right {
  animation: rotateInUpRight 1s ease-out;
}`,
			preview: true
		}
	],

	'rotating-exits': [
		{
			id: 'rotateOut',
			name: 'Rotate Out',
			description: 'Rotate out animation',
			classes: 'animate-rotate-out',
			customCSS: `
@keyframes rotateOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, 200deg);
  }
}
.animate-rotate-out {
  animation: rotateOut 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'rotateOutDownLeft',
			name: 'Rotate Out Down Left',
			description: 'Rotate out to bottom left',
			classes: 'animate-rotate-out-down-left',
			customCSS: `
@keyframes rotateOutDownLeft {
  0% {
    opacity: 1;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, 45deg);
    transform-origin: left bottom;
  }
}
.animate-rotate-out-down-left {
  animation: rotateOutDownLeft 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'rotateOutDownRight',
			name: 'Rotate Out Down Right',
			description: 'Rotate out to bottom right',
			classes: 'animate-rotate-out-down-right',
			customCSS: `
@keyframes rotateOutDownRight {
  0% {
    opacity: 1;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, -45deg);
    transform-origin: right bottom;
  }
}
.animate-rotate-out-down-right {
  animation: rotateOutDownRight 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'rotateOutUpLeft',
			name: 'Rotate Out Up Left',
			description: 'Rotate out to top left',
			classes: 'animate-rotate-out-up-left',
			customCSS: `
@keyframes rotateOutUpLeft {
  0% {
    opacity: 1;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, -45deg);
    transform-origin: left bottom;
  }
}
.animate-rotate-out-up-left {
  animation: rotateOutUpLeft 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'rotateOutUpRight',
			name: 'Rotate Out Up Right',
			description: 'Rotate out to top right',
			classes: 'animate-rotate-out-up-right',
			customCSS: `
@keyframes rotateOutUpRight {
  0% {
    opacity: 1;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    transform: rotate3d(0, 0, 1, 90deg);
    transform-origin: right bottom;
  }
}
.animate-rotate-out-up-right {
  animation: rotateOutUpRight 1s ease-in;
}`,
			preview: true
		}
	],

	'back-entrances': [
		{
			id: 'backInDown',
			name: 'Back In Down',
			description: 'Back entrance from top',
			classes: 'animate-back-in-down',
			customCSS: `
@keyframes backInDown {
  0% {
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }
  80% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-back-in-down {
  animation: backInDown 1.2s ease-out;
}`,
			preview: true
		},
		{
			id: 'backInLeft',
			name: 'Back In Left',
			description: 'Back entrance from left',
			classes: 'animate-back-in-left',
			customCSS: `
@keyframes backInLeft {
  0% {
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-back-in-left {
  animation: backInLeft 1.2s ease-out;
}`,
			preview: true
		},
		{
			id: 'backInRight',
			name: 'Back In Right',
			description: 'Back entrance from right',
			classes: 'animate-back-in-right',
			customCSS: `
@keyframes backInRight {
  0% {
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-back-in-right {
  animation: backInRight 1.2s ease-out;
}`,
			preview: true
		},
		{
			id: 'backInUp',
			name: 'Back In Up',
			description: 'Back entrance from bottom',
			classes: 'animate-back-in-up',
			customCSS: `
@keyframes backInUp {
  0% {
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }
  80% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-back-in-up {
  animation: backInUp 1.2s ease-out;
}`,
			preview: true
		}
	],

	'back-exits': [
		{
			id: 'backOutDown',
			name: 'Back Out Down',
			description: 'Back exit to bottom',
			classes: 'animate-back-out-down',
			customCSS: `
@keyframes backOutDown {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate-back-out-down {
  animation: backOutDown 1.2s ease-in;
}`,
			preview: true
		},
		{
			id: 'backOutLeft',
			name: 'Back Out Left',
			description: 'Back exit to left',
			classes: 'animate-back-out-left',
			customCSS: `
@keyframes backOutLeft {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate-back-out-left {
  animation: backOutLeft 1.2s ease-in;
}`,
			preview: true
		},
		{
			id: 'backOutRight',
			name: 'Back Out Right',
			description: 'Back exit to right',
			classes: 'animate-back-out-right',
			customCSS: `
@keyframes backOutRight {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate-back-out-right {
  animation: backOutRight 1.2s ease-in;
}`,
			preview: true
		},
		{
			id: 'backOutUp',
			name: 'Back Out Up',
			description: 'Back exit to top',
			classes: 'animate-back-out-up',
			customCSS: `
@keyframes backOutUp {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate-back-out-up {
  animation: backOutUp 1.2s ease-in;
}`,
			preview: true
		}
	],

	flippers: [
		{
			id: 'flip',
			name: 'Flip',
			description: 'Flip animation',
			classes: 'animate-flip',
			customCSS: `
@keyframes flip {
  0% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }
  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
}
.animate-flip {
  backface-visibility: visible;
  animation: flip 1s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'flipInX',
			name: 'Flip In X',
			description: 'Flip in on X axis',
			classes: 'animate-flip-in-x',
			customCSS: `
@keyframes flipInX {
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
.animate-flip-in-x {
  backface-visibility: visible !important;
  animation: flipInX 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'flipInY',
			name: 'Flip In Y',
			description: 'Flip in on Y axis',
			classes: 'animate-flip-in-y',
			customCSS: `
@keyframes flipInY {
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
.animate-flip-in-y {
  backface-visibility: visible !important;
  animation: flipInY 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'flipOutX',
			name: 'Flip Out X',
			description: 'Flip out on X axis',
			classes: 'animate-flip-out-x',
			customCSS: `
@keyframes flipOutX {
  0% {
    transform: perspective(400px);
  }
  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  100% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
.animate-flip-out-x {
  animation: flipOutX 0.75s ease-in;
  backface-visibility: visible !important;
}`,
			preview: true
		},
		{
			id: 'flipOutY',
			name: 'Flip Out Y',
			description: 'Flip out on Y axis',
			classes: 'animate-flip-out-y',
			customCSS: `
@keyframes flipOutY {
  0% {
    transform: perspective(400px);
  }
  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }
  100% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
.animate-flip-out-y {
  animation: flipOutY 0.75s ease-in;
  backface-visibility: visible !important;
}`,
			preview: true
		}
	],

	lightspeed: [
		{
			id: 'lightSpeedInRight',
			name: 'Light Speed In Right',
			description: 'Light speed entrance from right',
			classes: 'animate-light-speed-in-right',
			customCSS: `
@keyframes lightSpeedInRight {
  0% {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(-5deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.animate-light-speed-in-right {
  animation: lightSpeedInRight 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'lightSpeedInLeft',
			name: 'Light Speed In Left',
			description: 'Light speed entrance from left',
			classes: 'animate-light-speed-in-left',
			customCSS: `
@keyframes lightSpeedInLeft {
  0% {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(-20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(5deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.animate-light-speed-in-left {
  animation: lightSpeedInLeft 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'lightSpeedOutRight',
			name: 'Light Speed Out Right',
			description: 'Light speed exit to right',
			classes: 'animate-light-speed-out-right',
			customCSS: `
@keyframes lightSpeedOutRight {
  0% {
    opacity: 1;
  }
  100% {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
.animate-light-speed-out-right {
  animation: lightSpeedOutRight 1s ease-in;
}`,
			preview: true
		},
		{
			id: 'lightSpeedOutLeft',
			name: 'Light Speed Out Left',
			description: 'Light speed exit to left',
			classes: 'animate-light-speed-out-left',
			customCSS: `
@keyframes lightSpeedOutLeft {
  0% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
}
.animate-light-speed-out-left {
  animation: lightSpeedOutLeft 1s ease-in;
}`,
			preview: true
		}
	],

	specials: [
		{
			id: 'hinge',
			name: 'Hinge',
			description: 'Hinge falling animation',
			classes: 'animate-hinge',
			customCSS: `
@keyframes hinge {
  0% {
    animation-timing-function: ease-in-out;
  }
  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }
  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
.animate-hinge {
  animation: hinge 2s ease-in-out;
  transform-origin: top left;
}`,
			preview: true
		},
		{
			id: 'jackInTheBox',
			name: 'Jack In The Box',
			description: 'Jack in the box animation',
			classes: 'animate-jack-in-the-box',
			customCSS: `
@keyframes jackInTheBox {
  0% {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(3deg);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-jack-in-the-box {
  animation: jackInTheBox 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'rollIn',
			name: 'Roll In',
			description: 'Rolling entrance animation',
			classes: 'animate-roll-in',
			customCSS: `
@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.animate-roll-in {
  animation: rollIn 1s ease-out;
}`,
			preview: true
		},
		{
			id: 'rollOut',
			name: 'Roll Out',
			description: 'Rolling exit animation',
			classes: 'animate-roll-out',
			customCSS: `
@keyframes rollOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
.animate-roll-out {
  animation: rollOut 1s ease-in;
}`,
			preview: true
		}
	],

	hover: [
		{
			id: 'hover-grow',
			name: 'Hover Grow',
			description: 'Scale up on hover',
			classes: 'hover:scale-110 transition-transform duration-300',
			customCSS: `
.hover-grow {
  transition: transform 0.3s ease;
}
.hover-grow:hover {
  transform: scale(1.1);
}`,
			preview: true,
			isHover: true
		},
		{
			id: 'hover-float',
			name: 'Hover Float',
			description: 'Float up on hover',
			classes: 'hover:-translate-y-2 transition-transform duration-300',
			customCSS: `
.hover-float {
  transition: transform 0.3s ease;
}
.hover-float:hover {
  transform: translateY(-8px);
}`,
			preview: true,
			isHover: true
		},
		{
			id: 'hover-rotate',
			name: 'Hover Rotate',
			description: 'Rotate on hover',
			classes: 'hover:rotate-12 transition-transform duration-300',
			customCSS: `
.hover-rotate {
  transition: transform 0.3s ease;
}
.hover-rotate:hover {
  transform: rotate(12deg);
}`,
			preview: true,
			isHover: true
		}
	],

	loading: [
		{
			id: 'spin-slow',
			name: 'Spin Slow',
			description: 'Slow spinning animation',
			classes: 'animate-spin-slow',
			customCSS: `
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 2s linear infinite;
}`,
			preview: true
		},
		{
			id: 'dots-loading',
			name: 'Dots Loading',
			description: 'Three dots loading animation',
			classes: 'animate-dots',
			customCSS: `
@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: black;
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow: .25em 0 0 black, .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow: .25em 0 0 black, .5em 0 0 black;
  }
}
.animate-dots::before {
  content: '•••';
  animation: dots 1.5s infinite;
}`,
			preview: true
		}
	],

	morphing: [
		{
			id: 'morph-circle-square',
			name: 'Circle to Square',
			description: 'Morph from circle to square',
			classes: 'animate-morph-square',
			customCSS: `
@keyframes morph-square {
  0% { border-radius: 50%; }
  100% { border-radius: 0%; }
}
.animate-morph-square {
  animation: morph-square 2s ease-in-out infinite alternate;
}`,
			preview: true
		}
	],

	background: [
		{
			id: 'gradient-shift',
			name: 'Gradient Shift',
			description: 'Animated gradient background',
			classes: 'animate-gradient-shift',
			customCSS: `
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-shift {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 4s ease infinite;
}`,
			preview: true
		}
	],

	transform: [
		{
			id: 'flip-horizontal',
			name: 'Flip Horizontal',
			description: 'Flip animation on horizontal axis',
			classes: 'animate-flip-horizontal',
			customCSS: `
@keyframes flip-horizontal {
  0% { transform: rotateY(0); }
  100% { transform: rotateY(180deg); }
}
.animate-flip-horizontal {
  animation: flip-horizontal 0.6s ease-in-out;
}`,
			preview: true
		},
		{
			id: 'swing',
			name: 'Swing',
			description: 'Swing animation like a pendulum',
			classes: 'animate-swing',
			customCSS: `
@keyframes swing {
  15% { transform: translateX(5px) rotate(5deg); }
  30% { transform: translateX(-5px) rotate(-3deg); }
  45% { transform: translateX(3px) rotate(2deg); }
  60% { transform: translateX(-1px) rotate(-1deg); }
  75% { transform: translateX(0px) rotate(0deg); }
}
.animate-swing {
  transform-origin: top center;
  animation: swing 1s ease-in-out;
}`,
			preview: true
		}
	],

	hover: [
		{
			id: 'hover-grow',
			name: 'Hover Grow',
			description: 'Scale up on hover',
			classes: 'hover:scale-110 transition-transform duration-300',
			customCSS: `
.hover-grow {
  transition: transform 0.3s ease;
}
.hover-grow:hover {
  transform: scale(1.1);
}`,
			preview: true,
			isHover: true
		},
		{
			id: 'hover-float',
			name: 'Hover Float',
			description: 'Float up on hover',
			classes: 'hover:-translate-y-2 transition-transform duration-300',
			customCSS: `
.hover-float {
  transition: transform 0.3s ease;
}
.hover-float:hover {
  transform: translateY(-8px);
}`,
			preview: true,
			isHover: true
		},
		{
			id: 'hover-rotate',
			name: 'Hover Rotate',
			description: 'Rotate on hover',
			classes: 'hover:rotate-12 transition-transform duration-300',
			customCSS: `
.hover-rotate {
  transition: transform 0.3s ease;
}
.hover-rotate:hover {
  transform: rotate(12deg);
}`,
			preview: true,
			isHover: true
		}
	],

	loading: [
		{
			id: 'spin-slow',
			name: 'Spin Slow',
			description: 'Slow spinning animation',
			classes: 'animate-spin-slow',
			customCSS: `
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 2s linear infinite;
}`,
			preview: true
		},
		{
			id: 'dots-loading',
			name: 'Dots Loading',
			description: 'Three dots loading animation',
			classes: 'animate-dots',
			customCSS: `
@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: black;
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow: .25em 0 0 black, .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow: .25em 0 0 black, .5em 0 0 black;
  }
}
.animate-dots::before {
  content: '•••';
  animation: dots 1.5s infinite;
}`,
			preview: true
		}
	]
};
