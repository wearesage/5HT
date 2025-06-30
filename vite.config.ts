import { defineConfig } from "vite";
import { getPluginsWithSageRouter, css, optimizeDeps } from "@wearesage/vue/vite";
import { resolve } from "path";

export default defineConfig(async () => {
  const plugins = await getPluginsWithSageRouter();
  
  return {
    plugins,
    css,
    optimizeDeps,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  };
});
