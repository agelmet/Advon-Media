
      tailwind.config = {
        theme: {
          extend: {
            maxWidth: {
              '7xl': '92vw',
            },
            fontFamily: {
              display: ['Playfair Display', 'serif'],
              body: ['Inter', 'sans-serif'],
            },
            colors: {
              'electric-cyan': '#47c8f5',
              'deep-void': '#050a0e',
              'space-black': '#0a1418',
            },
            animation: {
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'float': 'float 6s ease-in-out infinite',
              'shimmer': 'shimmer 3s linear infinite',
              'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
            },
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
              },
              shimmer: {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' },
              },
              'glow-pulse': {
                '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
                '50%': { opacity: 1, transform: 'scale(1.2)' },
              }
            }
          }
        }
      }
    