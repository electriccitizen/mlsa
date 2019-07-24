// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
  	colors: {
  		green: {
  			default: '#239c4a',
        light: "#99cdbb",
  			dark: '#14662e',
  			trans6: 'rgba(35,156,74,.6)',
  		},
  		blue: {
  			default: '#1155cc',
  			dark: '#0c3e96',
  			trans0: 'rgba(17,114,204,0)',
  		},
  		white: {
  			default: '#ffffff',
  			blue: '#eff6f8',
  			green: '#f0f8f3',
  			pine: '#e4f0e2', 
  		},
  		grey: {
  			default: '#77787c',
  			light: '#eeeeee',
        mid: '#979797',
  			dark: '#646569',
  		},
  		black: {
  			default: '#1f2225',
        light: '#262626',
        dark: '#000000',
  		},
      transparent: 'transparent',
  	},
  	fontFamily: {
  		'sans': ['pt-sans', 'Helvetica', 'sans-serif'],
  		'header': ['akagi-pro', 'Arial', 'sans-serif'],
  	},
  	fontSize: {
  		base: '18px',
  		'13': '13px',
  		'15': '15px',
  		'16': '16px',
  		'20': '20px',
  		'22': '22px',
  		'23': '23px',
  		'24': '24px',
  		'28': '28px',
      '48': '48px',
      '56': '56px',
  		'60': '60px',
      '64': '64px',
  	},
  	lineHeight: {
  		none: 1,
  		tight: 1.06,
  		normal: 1.25,
  		wide: 1.29,
  	},
    gradients: theme => ({
      // Array definition (defaults to linear gradients).
      'pineWhite': ['to bottom', theme('colors.white.pine'), theme('colors.white.default')],
      'greenBlue': ['to bottom', theme('colors.green.trans6'), theme('colors.green.light')],
    }),
    extend: {
      width: {
        '7': '1.75rem',
        '38': '9.5rem',
        '48': '48px',
      },
      height:{
        '48': '48px',
      },
      screens: {
        'xs': '500px',
        'cmax': '1140px',
      },
      inset: {
        '100': '100%',
      },
      maxHeight: {
        '0': '0'
      },
      maxWidth: {
        '1080px': '1080px',
      },
      spacing: {
        '7': '1.75rem',
        '20px': '20px',
      }
    },
  },
  variants: {
    gradients: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('./theme-plugins/gradients'),
  ],
};
