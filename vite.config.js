import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.glb"],
  server: {
    port: 5173, // optional: तुम चाहो तो custom port रख सकते हो
    open: true, // dev server auto browser खोलेगा
  },
  build: {
    outDir: "dist",
  },
  base: "./", // 👈 ये बहुत important है refresh issue solve करने के लिए
});
