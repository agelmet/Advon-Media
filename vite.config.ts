import path, { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            kataskevi: resolve(__dirname, 'kataskevi-istoselidas/index.html'),
            google_reviews: resolve(__dirname, 'google-reviews-nfc/index.html'),
            social_media: resolve(__dirname, 'diaxeirisi-social-media/index.html'),
            faq: resolve(__dirname, 'faq/index.html'),
            blog: resolve(__dirname, 'blog/index.html'),
            privacy: resolve(__dirname, 'privacy-policy/index.html'),
            cookies: resolve(__dirname, 'cookies-policy/index.html'),
            terms: resolve(__dirname, 'terms-of-use/index.html')
          }
        }
      }
    };
});
