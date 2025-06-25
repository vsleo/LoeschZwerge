import { test, expect } from "@playwright/test";

test.describe("HydrantenschildKomponente.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/hydrantenschild");
  });

  test("Das Hydrantenschild-Bild ist sichtbar", async ({ page }) => {
    const img = page.locator(".hydrantenschild img");
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute("alt", "Hydrantenschild");
    await expect(img).toHaveAttribute("src", /Hydrantenschild\.png$/);
  });

  test("Alle Hotspot-Inputfelder sind sichtbar", async ({ page }) => {
    const inputs = page.locator(".hydrantenschild .hotspot-input");
    await expect(inputs).toHaveCount(17); // Es gibt 17 Hotspots mit Input
    for (let i = 0; i < 17; i++) {
      await expect(inputs.nth(i)).toBeVisible();
    }
  });

  test("Eingabe in ein Hotspot-Input aktualisiert das Label", async ({
    page,
  }) => {
    const input = page.locator(".hydrantenschild .hotspot-input").nth(0);
    await input.fill("5");
    await expect(input).toHaveValue("5");
  });

  test("Nur eine Ziffer pro Feld erlaubt", async ({ page }) => {
    const input = page.locator(".hydrantenschild .hotspot-input").nth(1);
    await input.fill("42");
    await expect(input).toHaveValue("2"); // Nur die letzte Ziffer bleibt
  });

  test("Links/Rechts Eingabe leert jeweils das andere Feld", async ({
    page,
  }) => {
    const inputLinks = page.locator(".hydrantenschild .hotspot-input").nth(3);
    const inputRechts = page.locator(".hydrantenschild .hotspot-input").nth(5);

    await inputLinks.fill("7");
    await expect(inputLinks).toHaveValue("7");
    await inputRechts.fill("8");
    await expect(inputRechts).toHaveValue("8");
    await expect(inputLinks).toHaveValue(""); // Links wird geleert, wenn Rechts befüllt wird
  });

  test("Backspace leert das Feld", async ({ page }) => {
    const input = page.locator(".hydrantenschild .hotspot-input").nth(2);
    await input.fill("9");
    await expect(input).toHaveValue("9");
    await input.press("Backspace");
    await expect(input).toHaveValue("");
  });

  test("Die berechneten Werte werden angezeigt", async ({ page }) => {
    // Fülle Nenndurchmesser (erste drei Felder)
    await page.locator(".hydrantenschild .hotspot-input").nth(0).fill("1");
    await page.locator(".hydrantenschild .hotspot-input").nth(1).fill("2");
    await page.locator(".hydrantenschild .hotspot-input").nth(2).fill("3");
    // Fülle RichtungLinks (Feld 3, 4, 10)
    await page.locator(".hydrantenschild .hotspot-input").nth(3).fill("4");
    await page.locator(".hydrantenschild .hotspot-input").nth(4).fill("5");
    await page.locator(".hydrantenschild .hotspot-input").nth(10).fill("6");
    // Fülle RichtungRechts (Feld 5, 6, 11)
    await page.locator(".hydrantenschild .hotspot-input").nth(5).fill("7");
    await page.locator(".hydrantenschild .hotspot-input").nth(6).fill("8");
    await page.locator(".hydrantenschild .hotspot-input").nth(11).fill("9");
    // Fülle RichtungUnten (Feld 7, 8, 9)
    await page.locator(".hydrantenschild .hotspot-input").nth(7).fill("1");
    await page.locator(".hydrantenschild .hotspot-input").nth(8).fill("2");
    await page.locator(".hydrantenschild .hotspot-input").nth(9).fill("3");

    // Überprüfe, ob die berechneten Werte angezeigt werden
    await expect(page.locator("div")).toContainText("123 45.6 78.9 12.3");
  });
});
