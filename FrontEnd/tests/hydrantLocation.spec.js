import { test, expect } from "@playwright/test";

test.describe("HydrantLocation.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/hydrantlocation");
  });

  test("Das Grid wird korrekt angezeigt", async ({ page }) => {
    // Es sollten 32 * 18 = 576 Hotspot-Divs existieren
    const hotspots = page.locator(".hotspot-div");
    await expect(hotspots).toHaveCount(576);
  });

  test("Der Startspot ist rot hervorgehoben", async ({ page }) => {
    const highlighted = page.locator(".hotspot-div.highlighted");
    await expect(highlighted).toHaveCount(1);
    await expect(highlighted).toBeVisible();
  });

  test("Hover zeigt Grid-Position als Prompt an", async ({ page }) => {
    const firstHotspot = page.locator(".hotspot-div").first();
    await firstHotspot.hover();
    await expect(page.locator("text=Grid-Position: Zeile")).toBeVisible();
  });

  test("Zielspot wird grün hervorgehoben, wenn Werte gesetzt werden", async ({
    page,
  }) => {
    // Simuliere Werte von HydrantenschildKomponente
    // Hier wird angenommen, dass die Komponente ein Input-Feld für RichtungUnten (z.B. Index 7, 8, 9) hat
    // und dass die Werte korrekt durchgereicht werden.
    // Fülle RichtungUnten auf "2"
    const inputUnten1 = page.locator(".hydrantenschild input").nth(7);
    const inputUnten2 = page.locator(".hydrantenschild input").nth(8);
    const inputUnten3 = page.locator(".hydrantenschild input").nth(9);
    await inputUnten1.fill("0");
    await inputUnten2.fill("0");
    await inputUnten3.fill("2");
    // Es sollte jetzt ein Zielspot grün hervorgehoben sein
    const ziel = page.locator(".hotspot-div.ziel");
    await expect(ziel).toHaveCount(1);
    await expect(ziel).toBeVisible();
  });

  test("Tooltip zeigt nur eine Richtung (rechts oder links, nie beide)", async ({
    page,
  }) => {
    // Finde einen Hotspot rechts vom Startspot
    const highlighted = await page.locator(".hotspot-div.highlighted");
    const highlightedBox = await highlighted.boundingBox();
    // Suche einen Hotspot mit größerer col (rechts)
    const rightHotspot = page.locator(".hotspot-div").nth(20); // Annahme: einer rechts vom Startspot
    await rightHotspot.hover();
    const title = await rightHotspot.getAttribute("title");
    expect(title).toMatch(/Meter nach rechts/);
    expect(title).not.toMatch(/Meter nach links/);

    // Suche einen Hotspot mit kleinerer col (links)
    const leftHotspot = page.locator(".hotspot-div").nth(5); // Annahme: einer links vom Startspot
    await leftHotspot.hover();
    const titleLeft = await leftHotspot.getAttribute("title");
    expect(titleLeft).toMatch(/Meter nach links/);
    expect(titleLeft).not.toMatch(/Meter nach rechts/);
  });
});
