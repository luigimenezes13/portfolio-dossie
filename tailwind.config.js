export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e50914',
        secondary: '#662222',
        tertiary: '#842A3B',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '3': '0.1875rem', // 3px
        '4': '0.25rem',   // 4px
        '5': '0.3125rem', // 5px
        '6': '0.375rem',  // 6px
        '7': '0.4375rem', // 7px
        '8': '0.5rem',    // 8px
        '12': '0.75rem',  // 12px
        '14': '0.875rem', // 14px
        '16': '1rem',     // 16px
        '48': '3rem',     // 48px
        '64': '4rem',     // 64px
      },
      width: {
        '3': '0.1875rem', // 3px
        '4': '0.25rem',   // 4px
        '5': '0.3125rem', // 5px
        '6': '0.375rem',  // 6px
        '7': '0.4375rem', // 7px
        '8': '0.5rem',    // 8px
        '12': '0.75rem',  // 12px
        '14': '0.875rem', // 14px
        '16': '1rem',     // 16px
        '48': '3rem',     // 48px
        '64': '4rem',     // 64px
      },
      height: {
        '3': '0.1875rem', // 3px
        '4': '0.25rem',   // 4px
        '5': '0.3125rem', // 5px
        '6': '0.375rem',  // 6px
        '7': '0.4375rem', // 7px
        '8': '0.5rem',    // 8px
        '12': '0.75rem',  // 12px
        '14': '0.875rem', // 14px
        '16': '1rem',     // 16px
        '48': '3rem',     // 48px
        '64': '4rem',     // 64px
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(191, 9, 47, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(191, 9, 47, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
