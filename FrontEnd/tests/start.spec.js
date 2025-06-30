import { test, expect } from "@playwright/test";

test.describe("Löschzwerge Seite", () => {
  test("Seite lädt und zeigt Slider sowie Inhalte", async ({ page }) => {
    // URL anpassen, falls nötig
    await page.goto("http://localhost:4321/LoeschZwerge/");

    // Überschrift prüfen
    await expect(
      page.getByRole("heading", { name: "Willkommen bei den Löschzwergen!" }),
    ).toBeVisible();

    // Slider-Container prüfen
    const slider = page.locator(".top-slider");
    await expect(slider).toBeVisible();

    // Prüfen, ob Slider-Bilder existieren
    const sliderImages = slider.locator(".slider-track img");
    const numberOfImages = await sliderImages.count();
    await expect(numberOfImages).toBeGreaterThan(0);

    // Box-Überschriften prüfen
    await expect(
      page.locator(".box-heading", { hasText: "Feuerwehrauto" }),
    ).toBeVisible();

    await expect(
      page.locator(".box-heading", { hasText: "Quiz" }),
    ).toBeVisible();

    await expect(
      page.locator(".box-heading", { hasText: "Brandschutz" }),
    ).toBeVisible();

    // Links prüfen
    await expect(page.locator('a[href="/LoeschZwerge/car"]')).toHaveCount(1);
    await expect(page.locator('a[href="/LoeschZwerge/quiz"]')).toHaveCount(1);
    await expect(
      page.locator('a[href="/LoeschZwerge/brandschutz"]'),
    ).toHaveCount(1);

    // Optional: Klick-Test für einen der Links
    await page.locator('a[href="/LoeschZwerge/car"]').first().click();
    await expect(page).toHaveURL(/\/LoeschZwerge\/car/);
  });
});
