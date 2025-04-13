// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// // import tailwindcss from "@tailwindcss/vite";  // No longer needed
// import tailwindcss from "tailwindcss"; // Correct usage for PostCSS

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [
//         tailwindcss(), // Add tailwindcss here as a PostCSS plugin
//       ],
//     },
//   },
//   server: {
//     port: 3000,
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
