// Vite JS
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// Url
import { fileURLToPath, URL } from 'url';
// Style Tailwind
import tailwind from 'tailwindcss';

// dotenv.config();

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/variables.scss";`,
        },
      },
      postcss: {
        plugins: [tailwind],
      },
    },
  };
});
