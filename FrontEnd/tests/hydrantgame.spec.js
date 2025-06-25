import { test, expect } from "@playwright/test";

test.describe("HydrantenGame.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/hydrantgame");
  });

  test("Überschrift und Werteanzeige sind sichtbar", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("Hydranten Game");
    await expect(page.locator("text=Values received:")).toBeVisible();
  });

  test("HydrantenschildKomponente ist eingebunden", async ({ page }) => {
    // Prüfe, ob ein Element aus der HydrantenschildKomponente sichtbar ist
    // Passe den Selektor ggf. an die tatsächliche Struktur an
    await expect(page.locator(".hydrantenschild")).toBeVisible();
  });

  test("Empfangene Werte werden angezeigt", async ({ page }) => {
    // Simuliere eine Eingabe in ein Feld der HydrantenschildKomponente
    const input = page.locator(".hydrantenschild input").first();
    await input.fill("5");
    // Es sollte sich jetzt der "Values received:"-Text ändern
    await expect(page.locator("text=Values received:")).toBeVisible();
    // Optional: Prüfe, ob die Zahl im Text erscheint
    await expect(page.locator(".hydranten-game")).toContainText("5");
  });
});
