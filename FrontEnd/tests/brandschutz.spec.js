import { test, expect } from "@playwright/test";

test.describe("Brandschutz.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/brandschutz");
  });

  test("Alle Videos haben ein korrektes Genre-Attribut", async ({ page }) => {
    // Prüfe, ob das Genre-Attribut korrekt gesetzt ist (falls vorhanden)
    const videoItems = await page.locator(
      '[data-testid="video-x-liste"] [data-genre]',
    );
    const count = await videoItems.count();
    for (let i = 0; i < count; i++) {
      await expect(videoItems.nth(i)).toHaveAttribute(
        "data-genre",
        "brandschutz",
      );
    }
  });
});
