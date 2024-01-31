/* init config */
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
/* init config */

import { resolve } from 'path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    //outDir: '../wwwroot', // Specify the output directory here
    outDir: '../wwwroot/_vue-dist', // Specify the output directory here
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        testpoo1: resolve(__dirname, 'test-pool-basic/index.html'),
        testpoo2: resolve(__dirname, 'test-pool-basic/map.html'),
        testpoo3: resolve(__dirname, 'test-pool-basic/leaflet-tpe-map.html'),
        testpoo4: resolve(__dirname, 'test-multiple-mounts/index.html'),
      },
    },
  },
});
