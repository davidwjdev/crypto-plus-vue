import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { config } from "dotenv";

export default defineConfig(({ mode }) => {
    const env = config().parsed;

    return {
        plugins: [vue()],
        define: {
            "process.env": env
        }
    };
});
