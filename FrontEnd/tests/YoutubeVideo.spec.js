import { test, expect } from "@playwright/test";

test.describe("YoutubeVideo.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad und die Einbindung an
    // Beispiel: /LoeschZwerge/brandschutz oder eine Seite, wo YoutubeVideo.vue verwendet wird
    await page.goto("http://localhost:4321/LoeschZwerge/brandschutz");
  });

  test("Das YouTube-Video-iframe ist sichtbar", async ({ page }) => {
    const iframe = page.locator(".video-container iframe");
    await expect(iframe).toBeVisible();
  });

  test("Das iframe hat die korrekte src-URL", async ({ page }) => {
    const iframe = page.locator(".video-container iframe");
    const src = await iframe.getAttribute("src");
    expect(src).toMatch(
      /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?rel=0$/,
    );
  });

  test("iframe hat die richtigen Attribute", async ({ page }) => {
    const iframe = page.locator(".video-container iframe");
    await expect(iframe).toHaveAttribute("title", "YouTube video player");
    await expect(iframe).toHaveAttribute("allowfullscreen", "");
    await expect(iframe).toHaveAttribute("allow", /accelerometer/);
  });

  test("iframe ist responsive", async ({ page }) => {
    const container = page.locator(".video-container");
    const width = await container.evaluate((el) => el.offsetWidth);
    const height = await container.evaluate((el) => el.offsetHeight);
    // Das Seitenverhältnis sollte etwa 16:9 sein
    expect(Math.round((width / height) * 100) / 100).toBeCloseTo(16 / 9, 1);
  });
});
