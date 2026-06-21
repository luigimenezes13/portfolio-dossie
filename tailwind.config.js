export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMÁRIAS — Vermelho contido como acento editorial
        primary: '#e50914',
        'primary-light': '#ff1f2d',
        'primary-deep': '#b30710',
        secondary: '#842A3B',
        tertiary: '#662222',

        // PIFE — vocabulário Red Book
        pife: {
          professional: '#e50914',
          intelectual: '#d97706',
          fitness: '#16a34a',
          emocional: '#8b5cf6',
        },

        // Acentos editoriais
        accent: {
          orange: '#d97706',  // âmbar mais sóbrio
          amber: '#f59e0b',
          rose: '#e11d48',
          purple: '#8b5cf6',
          green: '#16a34a',
        },

        // Estados
        success: '#16a34a',
        warning: '#d97706',
        error: '#ef4444',

        // EDITORIAL DARK — paleta warm/tinta sobre fundo escuro quente
        dossie: {
          black: '#000000',
          deeper: '#0a0807',   // mais profundo, ligeiramente warm
          deep: '#0d0b09',     // fundo padrão
          default: '#100d0b',  // base preferencial (warm)
          card: '#161210',     // card sólido (sem blur agressivo)
          rule: '#3a342e',     // bordas finas (rule)
          ruleSoft: '#241f1a', // bordas muito sutis
        },

        // TINTA — texto editorial (off-white quente, não branco puro)
        ink: {
          DEFAULT: '#e8dfd2',  // texto principal — branco creme
          soft: '#a89e8e',     // texto secundário
          mute: '#6b6359',     // microcopy
          dim: '#403a33',      // muito mute
        },

        // Neutros legados (compatibilidade)
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
        // SERIF DOMINANTE editorial
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Instrument Serif', 'Georgia', 'serif'],
        editorial: ['Instrument Serif', 'Fraunces', 'Georgia', 'serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'], // legacy
      },
      fontSize: {
        // Escalas fluid editoriais (mais contidas que o atual)
        'fluid-masthead': ['clamp(56px, 9vw, 132px)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'fluid-hero': ['clamp(64px, 10vw, 160px)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'fluid-letter': ['clamp(120px, 16vw, 200px)', { lineHeight: '0.85', letterSpacing: '-0.03em' }],
        'fluid-h1': ['clamp(40px, 5.5vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'fluid-h2': ['clamp(32px, 4.2vw, 60px)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'fluid-h3': ['clamp(22px, 2.4vw, 34px)', { lineHeight: '1.2' }],
        'fluid-quote': ['clamp(20px, 2.4vw, 32px)', { lineHeight: '1.4' }],
        'fluid-deck': ['clamp(18px, 1.9vw, 24px)', { lineHeight: '1.45' }],
        'fluid-body': ['clamp(15px, 1.1vw, 17px)', { lineHeight: '1.7' }],
        'fluid-small': ['clamp(12px, 0.9vw, 14px)', { lineHeight: '1.55' }],

        // Legados mantidos
        display: ['4rem', { lineHeight: '1.1', fontWeight: '900' }],
        hero: ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        title: ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        subtitle: ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      letterSpacing: {
        'widest-2': '0.22em',
        'widest-3': '0.3em',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-down': 'fadeInDown 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-left': 'fadeInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-right': 'fadeInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'scroll-cue': 'scrollCue 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInDown: { '0%': { opacity: '0', transform: 'translateY(-30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInLeft: { '0%': { opacity: '0', transform: 'translateX(-30px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        fadeInRight: { '0%': { opacity: '0', transform: 'translateX(30px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        scrollCue: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
