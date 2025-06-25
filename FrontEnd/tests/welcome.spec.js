import { test, expect } from "@playwright/test";

test.describe("Welcome.astro", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/");
  });

  test("Header wird angezeigt", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
  });

  test("Start-Komponente wird angezeigt", async ({ page }) => {
    // Prüfe auf ein zentrales Element der Start-Komponente, z.B. die Willkommensüberschrift
    await expect(page.locator("h1")).toHaveText(
      "Willkommen bei den Löschzwergen!",
    );
  });

  test("Layout-Elemente sind vorhanden", async ({ page }) => {
    // Prüfe, ob das Layout-Element (z.B. ein Wrapper-Div) existiert
    await expect(page.locator("body")).toBeVisible();
  });
});
