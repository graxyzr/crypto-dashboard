/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {

            colors: {
                dark: {
                    bg: '#0A0A0A',
                    card: '#1E1E2F',
                },
                light: {
                    bg: '#F8FAFC',
                    card: '#FFFFFF',
                },

                surface: {
                    base: '#0F0F1A',
                    100: '#13131F',
                    200: '#1A1A2E',
                    300: '#212135',
                    400: '#2A2A45',
                },

                crypto: {
                    50: '#F5F0FF',
                    100: '#EDE0FF',
                    200: '#D4BBFF',
                    300: '#C084FC',
                    400: '#A855F7',
                    500: '#9333EA',
                    600: '#7C3AED',
                    700: '#6B21A8',
                    800: '#4C1D95',
                    900: '#2E1065',
                    950: '#1A0A2E',
                },

                electric: {
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                },

                bull: {
                    DEFAULT: '#10B981',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                },

                bear: {
                    DEFAULT: '#EF4444',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                },

                warning: {
                    DEFAULT: '#F59E0B',
                    400: '#FBBF24',
                    500: '#F59E0B',
                    600: '#D97706',
                },

                positive: '#10B981',
                negative: '#EF4444',
                accent: '#9333EA',
            },

            fontFamily: {
                display: ['Sora', 'sans-serif'],
                body: ['Sora', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
                financial: ['JetBrains Mono', 'monospace'],
            },

            boxShadow: {
                'card': '0 4px 24px rgba(0, 0, 0, 0.40)',
                'card-hover': '0 8px 40px rgba(0, 0, 0, 0.55)',
                'glow-purple': '0 0 24px rgba(139, 92, 246, 0.40)',
                'glow-blue': '0 0 24px rgba(59, 130, 246, 0.40)',
                'glow-bull': '0 0 20px rgba(16, 185, 129, 0.45)',
                'glow-bear': '0 0 20px rgba(239, 68, 68, 0.45)',
                'glow-sm': '0 0 12px rgba(139, 92, 246, 0.30)',
            },

            backgroundImage: {
                'brand': 'linear-gradient(135deg, #6B21A8 0%, #3B82F6 100%)',
                'brand-alt': 'linear-gradient(135deg, #4C1D95 0%, #9333EA 50%, #3B82F6 100%)',
                'bull-gradient': 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
                'bear-gradient': 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
                'skeleton': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%)',
            },

            borderRadius: {
                'card': '18px',
                'button': '10px',
                'badge': '6px',
            },

            animation: {
                'fadeIn': 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) both',
                'slideIn': 'slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) both',
                'scaleIn': 'scaleIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both',
                'pulseBull': 'pulseBull 2.5s ease-in-out infinite',
                'pulseBear': 'pulseBear 2.5s ease-in-out infinite',
                'livePulse': 'livePulse 2s ease-out infinite',
                'priceUp': 'priceUp 1s ease-out',
                'priceDown': 'priceDown 1s ease-out',
                'dataFlash': 'dataFlash 0.8s ease-out',
                'shimmer': 'shimmer 1.8s ease-in-out infinite',
                'gradientShift': 'gradientShift 5s ease-in-out infinite',
                'ticker': 'ticker 30s linear infinite',
                'float': 'float 4s ease-in-out infinite',
                'spin-slow': 'spin 3s linear infinite',
            },

            keyframes: {
                fadeIn: {
                    from: { opacity: '0', transform: 'translateY(16px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    from: { opacity: '0', transform: 'translateX(-24px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.95)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                pulseBull: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(16,185,129,0)', borderColor: 'rgba(16,185,129,0.20)' },
                    '50%': { boxShadow: '0 0 8px 2px rgba(16,185,129,0.30)', borderColor: 'rgba(16,185,129,0.50)' },
                },
                pulseBear: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(239,68,68,0)', borderColor: 'rgba(239,68,68,0.20)' },
                    '50%': { boxShadow: '0 0 8px 2px rgba(239,68,68,0.30)', borderColor: 'rgba(239,68,68,0.50)' },
                },
                livePulse: {
                    '0%': { boxShadow: '0 0 0 0 rgba(16,185,129,0.35)' },
                    '70%': { boxShadow: '0 0 0 8px rgba(16,185,129,0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(16,185,129,0)' },
                },
                priceUp: {
                    '0%': { color: 'inherit' },
                    '30%': { color: '#10B981', textShadow: '0 0 12px rgba(16,185,129,0.50)' },
                    '100%': { color: 'inherit' },
                },
                priceDown: {
                    '0%': { color: 'inherit' },
                    '30%': { color: '#EF4444', textShadow: '0 0 12px rgba(239,68,68,0.50)' },
                    '100%': { color: 'inherit' },
                },
                dataFlash: {
                    '0%': { backgroundColor: 'transparent' },
                    '20%': { backgroundColor: 'rgba(139,92,246,0.18)' },
                    '100%': { backgroundColor: 'transparent' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                gradientShift: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                ticker: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },

            backdropBlur: {
                'glass': '12px',
                'heavy': '24px',
            },

            transitionTimingFunction: {
                'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
        },
    },

    plugins: [],
};