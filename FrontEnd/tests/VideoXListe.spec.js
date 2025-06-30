import { test, expect } from "@playwright/test";

test.describe("VideoXListe.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad und das Genre an
    await page.goto("http://localhost:4321/LoeschZwerge/brandschutz");
  });

  test("Das YoutubeVideo ist sichtbar", async ({ page }) => {
    // Annahme: Das YoutubeVideo-Component rendert ein iframe
    const iframe = page.locator(".video iframe");
    await expect(iframe).toBeVisible();
    // Standardvideo sollte geladen sein
    await expect(iframe).toHaveAttribute("src", /dQw4w9WgXcQ/);
  });

  test("Die Videoliste wird angezeigt", async ({ page }) => {
    const videoList = page.locator(".video-list");
    await expect(videoList).toBeVisible();
  });

  test("Klick auf einen Listeneintrag wechselt das Video", async ({ page }) => {
    const videoList = page.locator(".video-list");
    // Hole das zweite Video (falls vorhanden)
    if ((await videoList.count()) > 1) {
      const secondVideo = videoList.nth(1);
      await secondVideo.click();
      // Das iframe sollte jetzt ein anderes Video laden (id aus dem JS-Modul)
      const iframe = page.locator(".video iframe");
      // Warte kurz auf das neue Video
      await page.waitForTimeout(500);
      // Prüfe, dass das Video gewechselt hat (src enthält nicht mehr das Standardvideo)
      await expect(iframe).not.toHaveAttribute("src", /dQw4w9WgXcQ/);
    }
  });
});
