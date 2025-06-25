# Test info

- Name: Header has the right picture
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\home.spec.js:8:1

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('img[alt=\'Logo\']') resolved to 2 elements:
    1) <img alt="Logo" src="images/Loeschzwerge_Logo_lightblue.svg"/> aka locator('astro-island').filter({ hasText: 'Feuerwehrauto About us Quiz' }).getByRole('img')
    2) <img alt="Logo" src="images/Loeschzwerge_Logo_lightblue.svg"/> aka getByRole('img', { name: 'Logo' }).nth(1)

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('img[alt=\'Logo\']')

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\home.spec.js:13:22
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
   3 | test("Webpage name", async ({ page }) => {
   4 |   await page.goto("http://localhost:4321/LoeschZwerge/");
   5 |   await expect(page).toHaveTitle("Löschzwerge");
   6 | });
   7 |
   8 | test("Header has the right picture", async ({ page }) => {
   9 |   await page.goto("http://localhost:4321/LoeschZwerge/");
  10 |
  11 |   const logo = page.locator("img[alt='Logo']");
  12 |
> 13 |   await expect(logo).toBeVisible();
     |                      ^ Error: expect.toBeVisible: Error: strict mode violation: locator('img[alt=\'Logo\']') resolved to 2 elements:
  14 |   await expect(logo).toHaveAttribute(
  15 |     "src",
  16 |     "images/Loeschzwerge_Logo_lightblue.svg",
  17 |   );
  18 |   await expect(logo).toHaveAttribute("alt", "Logo");
  19 | });
  20 |
  21 | test("firetruck has the right picture", async ({ page }) => {
  22 |   await page.goto("http://localhost:4321/LoeschZwerge/car");
  23 |
  24 |   const fireEngine = page.locator("img[alt='Feuerwehrauto']");
  25 |
  26 |   await expect(fireEngine).toBeVisible();
  27 |   await expect(fireEngine).toHaveAttribute(
  28 |     "src",
  29 |     "images/Feuerwehrauto-LF10.svg",
  30 |   );
  31 |   await expect(fireEngine).toHaveAttribute("alt", "Feuerwehrauto");
  32 | });
  33 |
```