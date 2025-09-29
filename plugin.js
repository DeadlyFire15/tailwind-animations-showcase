import plugin from 'tailwindcss/plugin';

// Load animations dynamically (in a real scenario you'd import from the module)
const animationsData = {
  keyframes: {
    // Attention Seekers
    'bounceAttention': {
      '0%, 20%, 53%, 80%, 100%': {
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'transform': 'translate3d(0, 0, 0)'
      },
      '40%, 43%': {
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'transform': 'translate3d(0, -30px, 0) scaleY(1.1)'
      },
      '70%': {
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'transform': 'translate3d(0, -15px, 0) scaleY(1.05)'
      },
      '90%': {
        'transform': 'translate3d(0, -4px, 0) scaleY(0.95)'
      }
    },
    'flash': {
      '0%, 50%, 100%': { 'opacity': '1' },
      '25%, 75%': { 'opacity': '0' }
    },
    'pulseAttention': {
      '0%, 100%': { 'transform': 'scale3d(1, 1, 1)' },
      '50%': { 'transform': 'scale3d(1.05, 1.05, 1.05)' }
    },
    'rubberBand': {
      '0%': { 'transform': 'scale3d(1, 1, 1)' },
      '30%': { 'transform': 'scale3d(1.25, 0.75, 1)' },
      '40%': { 'transform': 'scale3d(0.75, 1.25, 1)' },
      '50%': { 'transform': 'scale3d(1.15, 0.85, 1)' },
      '65%': { 'transform': 'scale3d(0.95, 1.05, 1)' },
      '75%': { 'transform': 'scale3d(1.05, 0.95, 1)' },
      '100%': { 'transform': 'scale3d(1, 1, 1)' }
    },
    'shakeX': {
      '0%, 100%': { 'transform': 'translate3d(0, 0, 0)' },
      '10%, 30%, 50%, 70%, 90%': { 'transform': 'translate3d(-10px, 0, 0)' },
      '20%, 40%, 60%, 80%': { 'transform': 'translate3d(10px, 0, 0)' }
    },
    'shakeY': {
      '0%, 100%': { 'transform': 'translate3d(0, 0, 0)' },
      '10%, 30%, 50%, 70%, 90%': { 'transform': 'translate3d(0, -10px, 0)' },
      '20%, 40%, 60%, 80%': { 'transform': 'translate3d(0, 10px, 0)' }
    },
    'headShake': {
      '0%': { 'transform': 'translateX(0)' },
      '6.5%': { 'transform': 'translateX(-6px) rotateY(-9deg)' },
      '18.5%': { 'transform': 'translateX(5px) rotateY(7deg)' },
      '31.5%': { 'transform': 'translateX(-3px) rotateY(-5deg)' },
      '43.5%': { 'transform': 'translateX(2px) rotateY(3deg)' },
      '50%': { 'transform': 'translateX(0)' }
    },
    'swing': {
      '20%': { 'transform': 'rotate3d(0, 0, 1, 15deg)' },
      '40%': { 'transform': 'rotate3d(0, 0, 1, -10deg)' },
      '60%': { 'transform': 'rotate3d(0, 0, 1, 5deg)' },
      '80%': { 'transform': 'rotate3d(0, 0, 1, -5deg)' },
      '100%': { 'transform': 'rotate3d(0, 0, 1, 0deg)' }
    },
    'tada': {
      '0%': { 'transform': 'scale3d(1, 1, 1)' },
      '10%, 20%': { 'transform': 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
      '30%, 50%, 70%, 90%': { 'transform': 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
      '40%, 60%, 80%': { 'transform': 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
      '100%': { 'transform': 'scale3d(1, 1, 1)' }
    },
    'wobble': {
      '0%': { 'transform': 'translate3d(0, 0, 0)' },
      '15%': { 'transform': 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
      '30%': { 'transform': 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
      '45%': { 'transform': 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
      '60%': { 'transform': 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
      '75%': { 'transform': 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
      '100%': { 'transform': 'translate3d(0, 0, 0)' }
    },
    'jello': {
      '0%, 11.1%, 100%': { 'transform': 'translate3d(0, 0, 0)' },
      '22.2%': { 'transform': 'skewX(-12.5deg) skewY(-12.5deg)' },
      '33.3%': { 'transform': 'skewX(6.25deg) skewY(6.25deg)' },
      '44.4%': { 'transform': 'skewX(-3.125deg) skewY(-3.125deg)' },
      '55.5%': { 'transform': 'skewX(1.5625deg) skewY(1.5625deg)' },
      '66.6%': { 'transform': 'skewX(-0.78125deg) skewY(-0.78125deg)' },
      '77.7%': { 'transform': 'skewX(0.390625deg) skewY(0.390625deg)' },
      '88.8%': { 'transform': 'skewX(-0.1953125deg) skewY(-0.1953125deg)' }
    },
    'heartBeat': {
      '0%': { 'transform': 'scale(1)' },
      '14%': { 'transform': 'scale(1.3)' },
      '28%': { 'transform': 'scale(1)' },
      '42%': { 'transform': 'scale(1.3)' },
      '70%': { 'transform': 'scale(1)' }
    },
    
    // Fading Entrances
    'fadeIn': {
      '0%': { 'opacity': '0' },
      '100%': { 'opacity': '1' }
    },
    'fadeInDown': {
      '0%': {
        'opacity': '0',
        'transform': 'translate3d(0, -100%, 0)'
      },
      '100%': {
        'opacity': '1',
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    'fadeInLeft': {
      '0%': {
        'opacity': '0',
        'transform': 'translate3d(-100%, 0, 0)'
      },
      '100%': {
        'opacity': '1',
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    'fadeInRight': {
      '0%': {
        'opacity': '0',
        'transform': 'translate3d(100%, 0, 0)'
      },
      '100%': {
        'opacity': '1',
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    'fadeInUp': {
      '0%': {
        'opacity': '0',
        'transform': 'translate3d(0, 100%, 0)'
      },
      '100%': {
        'opacity': '1',
        'transform': 'translate3d(0, 0, 0)'
      }
    },

    // Bounce Entrances
    'bounceIn': {
      '0%, 20%, 40%, 60%, 80%, 100%': {
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)'
      },
      '0%': {
        'opacity': '0',
        'transform': 'scale3d(0.3, 0.3, 0.3)'
      },
      '20%': {
        'transform': 'scale3d(1.1, 1.1, 1.1)'
      },
      '40%': {
        'transform': 'scale3d(0.9, 0.9, 0.9)'
      },
      '60%': {
        'opacity': '1',
        'transform': 'scale3d(1.03, 1.03, 1.03)'
      },
      '80%': {
        'transform': 'scale3d(0.97, 0.97, 0.97)'
      },
      '100%': {
        'opacity': '1',
        'transform': 'scale3d(1, 1, 1)'
      }
    },

    // Zoom animations
    'zoomIn': {
      '0%': {
        'opacity': '0',
        'transform': 'scale3d(0.3, 0.3, 0.3)'
      },
      '50%': {
        'opacity': '1'
      }
    },

    // Slide animations
    'slideInDown': {
      '0%': {
        'transform': 'translate3d(0, -100%, 0)',
        'visibility': 'visible'
      },
      '100%': {
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    'slideInLeft': {
      '0%': {
        'transform': 'translate3d(-100%, 0, 0)',
        'visibility': 'visible'
      },
      '100%': {
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    'slideInRight': {
      '0%': {
        'transform': 'translate3d(100%, 0, 0)',
        'visibility': 'visible'
      },
      '100%': {
        'transform': 'translate3d(0, 0, 0)'
      }
    },
    'slideInUp': {
      '0%': {
        'transform': 'translate3d(0, 100%, 0)',
        'visibility': 'visible'
      },
      '100%': {
        'transform': 'translate3d(0, 0, 0)'
      }
    },

    // Loading animations
    'spin-slow': {
      'from': { 'transform': 'rotate(0deg)' },
      'to': { 'transform': 'rotate(360deg)' }
    },
    'dots': {
      '0%, 20%': {
        'color': 'rgba(0,0,0,0)',
        'text-shadow': '.25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0)'
      },
      '40%': {
        'color': 'currentColor',
        'text-shadow': '.25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0)'
      },
      '60%': {
        'text-shadow': '.25em 0 0 currentColor, .5em 0 0 rgba(0,0,0,0)'
      },
      '80%, 100%': {
        'text-shadow': '.25em 0 0 currentColor, .5em 0 0 currentColor'
      }
    },
    'slide-in-bottom': {
      'from': {
        transform: 'translateY(100%)',
        opacity: '0'
      },
      'to': {
        transform: 'translateY(0)',
        opacity: '1'
      }
    },
    'scale-in': {
      'from': {
        transform: 'scale(0)',
        opacity: '0'
      },
      'to': {
        transform: 'scale(1)',
        opacity: '1'
      }
    },
    'rotate-in': {
      'from': {
        transform: 'rotate(-180deg) scale(0)',
        opacity: '0'
      },
      'to': {
        transform: 'rotate(0deg) scale(1)',
        opacity: '1'
      }
    },
    'fade-out': {
      'from': { opacity: '1' },
      'to': { opacity: '0' }
    },
    'slide-out-top': {
      'from': {
        transform: 'translateY(0)',
        opacity: '1'
      },
      'to': {
        transform: 'translateY(-100%)',
        opacity: '0'
      }
    },
    'bounce-custom': {
      '0%, 20%, 53%, 80%, 100%': {
        transform: 'translate3d(0,0,0)'
      },
      '40%, 43%': {
        transform: 'translate3d(0, -15px, 0)'
      },
      '70%': {
        transform: 'translate3d(0, -7px, 0)'
      },
      '90%': {
        transform: 'translate3d(0, -2px, 0)'
      }
    },
    'shake': {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' }
    },
    'pulse-glow': {
      '0%, 100%': {
        'box-shadow': '0 0 5px rgba(59, 130, 246, 0.5)'
      },
      '50%': {
        'box-shadow': '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)'
      }
    },
    'morph-square': {
      '0%': { 'border-radius': '50%' },
      '100%': { 'border-radius': '0%' }
    },
    'gradient-shift': {
      '0%': { 'background-position': '0% 50%' },
      '50%': { 'background-position': '100% 50%' },
      '100%': { 'background-position': '0% 50%' }
    },
    'flip-horizontal': {
      '0%': { transform: 'rotateY(0)' },
      '100%': { transform: 'rotateY(180deg)' }
    },
    'swing': {
      '15%': { transform: 'translateX(5px) rotate(5deg)' },
      '30%': { transform: 'translateX(-5px) rotate(-3deg)' },
      '45%': { transform: 'translateX(3px) rotate(2deg)' },
      '60%': { transform: 'translateX(-1px) rotate(-1deg)' },
      '75%': { transform: 'translateX(0px) rotate(0deg)' }
    }
  },
  animation: {
    // Attention seekers
    'bounce-attention': 'bounceAttention 1s ease-in-out',
    'flash': 'flash 1s ease-in-out',
    'pulse-attention': 'pulseAttention 1s ease-in-out',
    'rubber-band': 'rubberBand 1s ease-in-out',
    'shake-x': 'shakeX 1s ease-in-out',
    'shake-y': 'shakeY 1s ease-in-out',
    'head-shake': 'headShake 1s ease-in-out',
    'swing': 'swing 1s ease-in-out',
    'tada': 'tada 1s ease-in-out',
    'wobble': 'wobble 1s ease-in-out',
    'jello': 'jello 1s ease-in-out',
    'heart-beat': 'heartBeat 1.5s ease-in-out infinite',
    
    // Fading entrances
    'fade-in': 'fadeIn 1s ease-in-out',
    'fade-in-down': 'fadeInDown 1s ease-out',
    'fade-in-left': 'fadeInLeft 1s ease-out',
    'fade-in-right': 'fadeInRight 1s ease-out',
    'fade-in-up': 'fadeInUp 1s ease-out',
    
    // Bouncing entrances
    'bounce-in': 'bounceIn 0.75s ease-out',
    
    // Zoom animations
    'zoom-in': 'zoomIn 1s ease-out',
    
    // Slide animations
    'slide-in-down': 'slideInDown 1s ease-out',
    'slide-in-left': 'slideInLeft 1s ease-out',
    'slide-in-right': 'slideInRight 1s ease-out',
    'slide-in-up': 'slideInUp 1s ease-out',
    
    // Loading animations
    'spin-slow': 'spin-slow 2s linear infinite',
    'dots': 'dots 1.5s infinite'
  }
};

const animationsPlugin = plugin(
  function({ addUtilities, addKeyframes, theme }) {
    // Add keyframes
    addKeyframes(animationsData.keyframes);

    // Add animation utilities
    const animationUtilities = {};
    Object.entries(animationsData.animation).forEach(([name, value]) => {
      animationUtilities[`.animate-${name}`] = {
        animation: value
      };
    });

    addUtilities(animationUtilities);

    // Add special utilities for specific animations
    addUtilities({
      '.animate-dots::before': {
        content: '"•••"',
        animation: 'dots 1.5s infinite'
      },
      '.animate-gradient-shift': {
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        'background-size': '400% 400%',
        animation: 'gradient-shift 4s ease infinite'
      },
      '.animate-swing': {
        'transform-origin': 'top center'
      }
    });
  },
  {
    theme: {
      extend: {
        keyframes: animationsData.keyframes,
        animation: animationsData.animation
      }
    }
  }
);

export default animationsPlugin;