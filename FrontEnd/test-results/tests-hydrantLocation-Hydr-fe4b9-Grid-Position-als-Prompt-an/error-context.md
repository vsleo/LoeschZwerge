# Test info

- Name: HydrantLocation.vue >> Hover zeigt Grid-Position als Prompt an
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\hydrantLocation.spec.js:21:3

# Error details

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.hotspot-div').first()

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\hydrantLocation.spec.js:23:24
```

# Page snapshot

```yaml
- main:
  - img
  - 'heading "404: Not found" [level=1]'
  - text: "Path: /hydrantlocation"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("HydrantLocation.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/hydrantlocation");
   7 |   });
   8 |
   9 |   test("Das Grid wird korrekt angezeigt", async ({ page }) => {
  10 |     // Es sollten 32 * 18 = 576 Hotspot-Divs existieren
  11 |     const hotspots = page.locator(".hotspot-div");
  12 |     await expect(hotspots).toHaveCount(576);
  13 |   });
  14 |
  15 |   test("Der Startspot ist rot hervorgehoben", async ({ page }) => {
  16 |     const highlighted = page.locator(".hotspot-div.highlighted");
  17 |     await expect(highlighted).toHaveCount(1);
  18 |     await expect(highlighted).toBeVisible();
  19 |   });
  20 |
  21 |   test("Hover zeigt Grid-Position als Prompt an", async ({ page }) => {
  22 |     const firstHotspot = page.locator(".hotspot-div").first();
> 23 |     await firstHotspot.hover();
     |                        ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  24 |     await expect(page.locator("text=Grid-Position: Zeile")).toBeVisible();
  25 |   });
  26 |
  27 |   test("Zielspot wird grün hervorgehoben, wenn Werte gesetzt werden", async ({
  28 |     page,
  29 |   }) => {
  30 |     // Simuliere Werte von HydrantenschildKomponente
  31 |     // Hier wird angenommen, dass die Komponente ein Input-Feld für RichtungUnten (z.B. Index 7, 8, 9) hat
  32 |     // und dass die Werte korrekt durchgereicht werden.
  33 |     // Fülle RichtungUnten auf "2"
  34 |     const inputUnten1 = page.locator(".hydrantenschild input").nth(7);
  35 |     const inputUnten2 = page.locator(".hydrantenschild input").nth(8);
  36 |     const inputUnten3 = page.locator(".hydrantenschild input").nth(9);
  37 |     await inputUnten1.fill("0");
  38 |     await inputUnten2.fill("0");
  39 |     await inputUnten3.fill("2");
  40 |     // Es sollte jetzt ein Zielspot grün hervorgehoben sein
  41 |     const ziel = page.locator(".hotspot-div.ziel");
  42 |     await expect(ziel).toHaveCount(1);
  43 |     await expect(ziel).toBeVisible();
  44 |   });
  45 |
  46 |   test("Tooltip zeigt nur eine Richtung (rechts oder links, nie beide)", async ({
  47 |     page,
  48 |   }) => {
  49 |     // Finde einen Hotspot rechts vom Startspot
  50 |     const highlighted = await page.locator(".hotspot-div.highlighted");
  51 |     const highlightedBox = await highlighted.boundingBox();
  52 |     // Suche einen Hotspot mit größerer col (rechts)
  53 |     const rightHotspot = page.locator(".hotspot-div").nth(20); // Annahme: einer rechts vom Startspot
  54 |     await rightHotspot.hover();
  55 |     const title = await rightHotspot.getAttribute("title");
  56 |     expect(title).toMatch(/Meter nach rechts/);
  57 |     expect(title).not.toMatch(/Meter nach links/);
  58 |
  59 |     // Suche einen Hotspot mit kleinerer col (links)
  60 |     const leftHotspot = page.locator(".hotspot-div").nth(5); // Annahme: einer links vom Startspot
  61 |     await leftHotspot.hover();
  62 |     const titleLeft = await leftHotspot.getAttribute("title");
  63 |     expect(titleLeft).toMatch(/Meter nach links/);
  64 |     expect(titleLeft).not.toMatch(/Meter nach rechts/);
  65 |   });
  66 | });
  67 |
```