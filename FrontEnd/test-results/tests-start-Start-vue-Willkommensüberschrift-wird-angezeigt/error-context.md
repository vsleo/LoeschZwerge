# Test info

- Name: Start.vue >> Willkommensüberschrift wird angezeigt
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\start.spec.js:9:3

# Error details

```
Error: expect.toHaveText: Error: strict mode violation: locator('h1') resolved to 5 elements:
    1) <h1 data-v-72f4a0f5=""> Willkommen bei den Löschzwergen! </h1> aka getByRole('heading', { name: 'Willkommen bei den Lö' })
    2) <h1 class="heading" data-v-72f4a0f5=""> Die Feuerwehr </h1> aka getByRole('heading', { name: 'Die Feuerwehr' })
    3) <h1>Audit</h1> aka locator('#header-left').getByText('Audit')
    4) <h1>No accessibility or performance issues detected.</h1> aka getByText('No accessibility or')
    5) <h1>…</h1> aka locator('h1').filter({ hasText: 'Settings' })

Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('h1')

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\start.spec.js:10:38
```

# Page snapshot

```yaml
- banner:
  - link "Logo":
    - /url: /LoeschZwerge/
    - img "Logo"
  - navigation:
    - link "Feuerwehrauto":
      - /url: /LoeschZwerge/car
    - link "About us":
      - /url: /LoeschZwerge/about
    - link "Quiz":
      - /url: /LoeschZwerge/quiz
    - link "Brandschutz":
      - /url: /LoeschZwerge/brandschutz
    - link "Hydrantdemo":
      - /url: /LoeschZwerge/hydrantdemo
- banner:
  - link "Logo":
    - /url: /LoeschZwerge/
    - img "Logo"
  - navigation:
    - link "Feuerwehrauto":
      - /url: /LoeschZwerge/car
    - link "About us":
      - /url: /LoeschZwerge/about
    - link "Quiz":
      - /url: /LoeschZwerge/quiz
    - link "Brandschutz":
      - /url: /LoeschZwerge/brandschutz
    - link "Hydrantdemo":
      - /url: /LoeschZwerge/hydrantdemo
- heading "Willkommen bei den Löschzwergen!" [level=1]
- paragraph: Was genau ist die Feuerwehr? Und was macht sie überhaupt? Bei den Löschzwergen lernst du mit Spiel und Spaß alles rund ums Feuerwehrauto!
- heading "Die Feuerwehr" [level=1]
- paragraph: Die Feuerwehr hat einige wichtige Aufgaben zu erfüllen. Dazu gehören Brandschutz, technische Hilfeleistung und Katastrophenschutz - Dabei steht Menschenrettung immer an erster Stelle.
- img
- img
- img
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("Start.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/");
   7 |   });
   8 |
   9 |   test("Willkommensüberschrift wird angezeigt", async ({ page }) => {
> 10 |     await expect(page.locator("h1")).toHaveText(
     |                                      ^ Error: expect.toHaveText: Error: strict mode violation: locator('h1') resolved to 5 elements:
  11 |       "Willkommen bei den Löschzwergen!",
  12 |     );
  13 |   });
  14 |
  15 |   test("Einleitungstext ist sichtbar", async ({ page }) => {
  16 |     await expect(page.locator(".paragraph"))
  17 |       .first()
  18 |       .toContainText("Was genau ist die Feuerwehr?");
  19 |   });
  20 |
  21 |   test('Box mit "Die Feuerwehr" und Beschreibung ist sichtbar', async ({
  22 |     page,
  23 |   }) => {
  24 |     await expect(page.locator(".box .heading")).toHaveText("Die Feuerwehr");
  25 |     await expect(page.locator(".box .paragraph")).toContainText(
  26 |       "Die Feuerwehr hat einige wichtige Aufgaben",
  27 |     );
  28 |   });
  29 |
  30 |   test("Alle Slider-Bilder sind im DOM", async ({ page }) => {
  31 |     const slides = page.locator(".image-slider .slide");
  32 |     await expect(slides).toHaveCount(3);
  33 |     await expect(slides.nth(0)).toHaveAttribute("src", /img-1\.jpg$/);
  34 |     await expect(slides.nth(1)).toHaveAttribute("src", /img-2\.jpg$/);
  35 |     await expect(slides.nth(2)).toHaveAttribute("src", /img-3\.jpg$/);
  36 |   });
  37 |
  38 |   test("Das erste Slider-Bild ist beim Laden aktiv", async ({ page }) => {
  39 |     const firstSlide = page.locator(".image-slider .slide").first();
  40 |     await expect(firstSlide).toHaveClass(/active/);
  41 |   });
  42 |
  43 |   test("Slider wechselt das Bild automatisch", async ({ page }) => {
  44 |     const slides = page.locator(".image-slider .slide");
  45 |     // Warte etwas länger als das Intervall (3s)
  46 |     await page.waitForTimeout(3500);
  47 |     // Mindestens ein anderes Bild sollte jetzt aktiv sein
  48 |     const activeSlides = await slides.evaluateAll(
  49 |       (nodes) => nodes.filter((n) => n.classList.contains("active")).length,
  50 |     );
  51 |     expect(activeSlides).toBe(1);
  52 |     // Es sollte nicht immer das erste Bild aktiv sein
  53 |     const isFirstActive = await slides
  54 |       .first()
  55 |       .evaluate((node) => node.classList.contains("active"));
  56 |     expect(isFirstActive).toBeFalsy();
  57 |   });
  58 | });
  59 |
```