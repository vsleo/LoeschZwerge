import { test, expect } from "@playwright/test";

test.describe("Start.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/");
  });

  test("Willkommensüberschrift wird angezeigt", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText(
      "Willkommen bei den Löschzwergen!",
    );
  });

  test('Box mit "Die Feuerwehr" und Beschreibung ist sichtbar', async ({
    page,
  }) => {
    await expect(page.locator(".box .heading")).toHaveText("Die Feuerwehr");
    await expect(page.locator(".box .paragraph")).toContainText(
      "Die Feuerwehr hat einige wichtige Aufgaben",
    );
  });

  test("Alle Slider-Bilder sind im DOM", async ({ page }) => {
    const slides = page.locator(".image-slider .slide");
    await expect(slides).toHaveCount(3);
    await expect(slides.nth(0)).toHaveAttribute("src", /img-1\.jpg$/);
    await expect(slides.nth(1)).toHaveAttribute("src", /img-2\.jpg$/);
    await expect(slides.nth(2)).toHaveAttribute("src", /img-3\.jpg$/);
  });

  test("Das erste Slider-Bild ist beim Laden aktiv", async ({ page }) => {
    const firstSlide = page.locator(".image-slider .slide").first();
    await expect(firstSlide).toHaveClass(/active/);
  });

  test("Slider wechselt das Bild automatisch", async ({ page }) => {
    const slides = page.locator(".image-slider .slide");
    // Warte etwas länger als das Intervall (3s)
    await page.waitForTimeout(3500);
    // Mindestens ein anderes Bild sollte jetzt aktiv sein
    const activeSlides = await slides.evaluateAll(
      (nodes) => nodes.filter((n) => n.classList.contains("active")).length,
    );
    expect(activeSlides).toBe(1);
    // Es sollte nicht immer das erste Bild aktiv sein

    const isFirstActive = await slides
      .nth(1)
      .evaluate((node) => node.classList.contains("active"));
    expect(isFirstActive).toBeFalsy();
  });
});
