import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Directory where Playwright looks for test files
  testDir: "./tests",

  // Timeout for each test in milliseconds
  timeout: 30 * 1000, // 30 seconds

  // Retry configuration for failed tests
  retries: 2,

  // Directory for storing screenshots and videos
  outputDir: "test-results/",

  // Configure different projects for different browsers and devices
  projects: [
    // Desktop Browsers
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "WebKit",
      use: { browserName: "webkit" },
    },

    // Mobile Browsers/Devices
    {
      name: "Mobile Chrome",
      use: devices["Pixel 5"],
    },
    {
      name: "Mobile Safari",
      use: devices["iPhone 12"],
    },
  ],

  // Browser launch configurations
  use: {
    headless: true, // Run tests in headless mode
    baseURL: "http://localhost:3000", // Default base URL for tests
    video: "retain-on-failure", // Record videos on failure
    screenshot: "only-on-failure", // Capture screenshot on failure
    trace: "on-first-retry", // Capture traces on first retry
  },

  // Configure reporter (e.g., dot, line, json, etc.)
  reporter: [["html", { outputFolder: "playwright-report" }]],

  // Global hooks if required
  globalSetup: "./global-setup.js",
  globalTeardown: "./global-teardown.js",
});
