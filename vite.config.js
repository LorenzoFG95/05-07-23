import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/variables/colors.scss";
          @import "./src/scss/variables/margins.scss";
          @import "./src/scss/variables/elevations.scss";
          @import "./src/scss/variables/animations.scss";
          @import "./src/scss/variables/typography.scss";
          @import "./src/scss/variables/layout.scss";
          @import "./src/scss/helpers/extends.scss";
          @import "./src/scss/helpers/mixins.scss";
          @import "./src/scss/helpers/devices.scss";
          @import "./src/scss/helpers/functions.scss";
        `,
      },
    },
  },
});
