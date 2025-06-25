# Test info

- Name: Welcome.astro >> Header wird angezeigt
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\welcome.spec.js:9:3

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('header') resolved to 2 elements:
    1) <header>…</header> aka locator('astro-island').filter({ hasText: 'Feuerwehrauto About us Quiz' }).getByRole('banner')
    2) <header>…</header> aka getByRole('banner').nth(1)

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('header')

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\welcome.spec.js:10:42
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
   3 | test.describe("Welcome.astro", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/");
   7 |   });
   8 |
   9 |   test("Header wird angezeigt", async ({ page }) => {
> 10 |     await expect(page.locator("header")).toBeVisible();
     |                                          ^ Error: expect.toBeVisible: Error: strict mode violation: locator('header') resolved to 2 elements:
  11 |   });
  12 |
  13 |   test("Start-Komponente wird angezeigt", async ({ page }) => {
  14 |     // Prüfe auf ein zentrales Element der Start-Komponente, z.B. die Willkommensüberschrift
  15 |     await expect(page.locator("h1")).toHaveText(
  16 |       "Willkommen bei den Löschzwergen!",
  17 |     );
  18 |   });
  19 |
  20 |   test("Layout-Elemente sind vorhanden", async ({ page }) => {
  21 |     // Prüfe, ob das Layout-Element (z.B. ein Wrapper-Div) existiert
  22 |     await expect(page.locator("body")).toBeVisible();
  23 |   });
  24 | });
  25 |
```