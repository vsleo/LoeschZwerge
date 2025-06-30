import { defineConfig } from "@playwright/test";

export default defineConfig({
  // Run your local dev server before starting the tests
  webServer: {
    command: "npm run build && npm run preview",
    url: "http://localhost:4321/LoeschZwerge/",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
    timeout: 1200 * 1000,
  },
});
