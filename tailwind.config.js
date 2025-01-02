/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to match your project structure
    "./public/index.html",
  ],
  theme: {
  	container: {
  		center: true,
  		screens: {
  			'2xl': '1520px'
  		},
  		padding: {
  			DEFAULT: '16px',
  			sm: '1rem',
  			lg: '2rem',
  			'2xl': '24px'
  		}
  	},
  	extend: {
  		boxShadow: {
  			custom: '4px 4px 20px 0px rgba(0, 0, 0, 0.08)'
  		},
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			textBlack: '#050505',
  			textWhite: '#FFF',
  			textGrayPrimary: '#7F7F7F',
  			textGraySecondary: '#5A5C5F'
  		},
  		backgroundImage: {
  			'banner-gradient': 'linear-gradient(98deg, #F1FBFF 0%, #F1EDEB 49.68%, #F8DAB0 95.53%)',
  			'offers-gradient': 'linear-gradient(180deg, #FFF -18.59%, #EBEBEB 100%)'
  		},
  		screens: {
  			xs: '375px',
  			sm: '480px',
  			md: '576px',
  			lg: '768px',
  			xlg: '992px',
  			xl: '1200px',
  			'2xl': '1520px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
