import { test, expect } from "@playwright/test";

test.describe("Brandschutz.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/brandschutz");
  });

  test("VideoXListe-Komponente ist sichtbar", async ({ page }) => {
    // Prüfe, ob ein Element mit dem VideoXListe-Container existiert
    // (z.B. eine Liste oder ein Container, der für Videos steht)
    const videoList = page.locator('[data-testid="video-x-liste"]');
    await expect(videoList).toBeVisible();
  });

  test("Es werden Videos zum Thema Brandschutz angezeigt", async ({ page }) => {
    // Prüfe, ob mindestens ein Video-Element für Brandschutz angezeigt wird
    // Passe den Selektor ggf. an die tatsächliche Struktur an
    const videos = page.locator(
      '[data-testid="video-x-liste"] video, [data-testid="video-x-liste"] .video-item',
    );
    await expect(videos.first()).toBeVisible();
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
