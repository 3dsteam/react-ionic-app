import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@icons": "/src/assets/icons",
            "@models": "/src/models",
            "@pages": "/src/pages",
            "@store": "/src/store",
            "@utils": "/src/utils",
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./tests/setup.ts"],
    },
});
