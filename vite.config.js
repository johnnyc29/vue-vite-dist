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

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig({
  base:'./',  // <=================新增這行
  plugins: [vue()],
  build: {
    outDir: 'docs',
    //outDir: '../wwwroot', // Specify the output directory here
    //outDir: '../wwwroot/_vue-dist', // Specify the output directory here
    //outDir: './vue-vite-dist/dist', // Specify the output directory here
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        testpoo1: resolve(__dirname, 'test-pool-basic/index.html'),
        testpoo2: resolve(__dirname, 'test-pool-basic/map.html'),
        testpoo3: resolve(__dirname, 'test-pool-basic/leaflet-tpe-map.html'),
        testpoo4: resolve(__dirname, 'test-multiple-mounts/index.html'),
      },
      output: {
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : '';
          // substr 是被淘汰語法，因此要改 slice
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          );
        },
      }
    },
  },
});
