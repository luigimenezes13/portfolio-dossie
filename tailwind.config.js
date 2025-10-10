export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primárias - Tom Netflix Red
        primary: '#e50914',           // Netflix Red - Destaque principal
        'primary-light': '#f43f5e',   // Vermelho claro para hovers
        'primary-dark': '#be123c',    // Vermelho escuro para textos
        secondary: '#662222',         // Vermelho escuro profundo
        tertiary: '#842A3B',          // Borgonha
        
        // Acentos Quentes (SEM AZUL)
        accent: {
          orange: '#ea580c',   // Laranja energético (orange-600)
          amber: '#f59e0b',    // Âmbar dourado (amber-500)
          rose: '#e11d48',     // Rosa vibrante (rose-600)
          gold: '#FFD700',     // Dourado
          green: '#10B981',    // Verde (emerald-500)
          purple: '#A855F7',   // Roxo (purple-500)
        },
        
        // Estados e Feedback (SEM AZUL)
        success: '#10b981',    // Verde (emerald-500) - Sucesso, métricas positivas
        warning: '#f59e0b',    // Âmbar (amber-500) - Avisos, atenção
        error: '#ef4444',      // Vermelho (red-500) - Erros, crítico
        info: '#8b5cf6',       // Roxo (purple-500) - Informação (SUBSTITUI AZUL)
        
        // Paleta Monocromática Vermelha PIFE (Pessoal, Intelectual, Físico, Espiritual)
        pife: {
          pessoal: '#dc2626',         // red-600 - Vermelho puro intenso
          intelectual: '#e11d48',     // rose-600 - Rose vibrante
          fisico: '#be123c',          // rose-700 - Rose profundo
          espiritual: '#ea580c',      // orange-600 - Laranja quente
          // Variações para hover e backgrounds
          pessoalLight: '#f87171',    // red-400
          intelectualLight: '#fb7185',// rose-400
          fisicoLight: '#fb923c',     // orange-400
          espiritualLight: '#fbbf24', // amber-400
        },
        
        // Cinzas com melhor contraste (Escala Neutra Completa)
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '900' }],
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'title': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'subtitle': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
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
