import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import tailwind from 'tailwindcss';
// import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  // const env = dotenv.config({
  //   path: `.env.${mode}`,
  // }).parsed;

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
    // define: {
    //   'process.env': Object.keys(env)?.reduce((acc, key) => {
    //     acc[key] = JSON.stringify(env[key])?.replace(/^"(.+(?="$))"$/, '$1');
    //     return acc;
    //   }, {}),
    // },
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
