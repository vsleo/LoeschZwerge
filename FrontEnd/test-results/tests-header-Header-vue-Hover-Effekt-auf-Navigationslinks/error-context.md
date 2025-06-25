# Test info

- Name: Header.vue >> Hover-Effekt auf Navigationslinks
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\header.spec.js:46:3

# Error details

```
Error: locator.hover: Error: strict mode violation: locator('header nav a:has-text("Quiz")') resolved to 2 elements:
    1) <a class="" href="/LoeschZwerge/quiz"> Quiz</a> aka getByRole('link', { name: 'Quiz' }).first()
    2) <a class="" href="/LoeschZwerge/quiz"> Quiz</a> aka getByRole('link', { name: 'Quiz' }).nth(1)

Call log:
  - waiting for locator('header nav a:has-text("Quiz")')

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\header.spec.js:48:20
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
   3 | test.describe("Header.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     await page.goto("http://localhost:4321/LoeschZwerge/");
   6 |   });
   7 |
   8 |   test("Logo ist sichtbar und verlinkt zur Startseite", async ({ page }) => {
   9 |     const logo = page.locator("header .headline a img");
  10 |     await expect(logo).toBeVisible();
  11 |     await expect(page.locator("header .headline a")).toHaveAttribute(
  12 |       "href",
  13 |       "/LoeschZwerge/",
  14 |     );
  15 |   });
  16 |
  17 |   test("Alle Navigationslinks sind sichtbar", async ({ page }) => {
  18 |     const navLinks = [
  19 |       { text: "Feuerwehrauto", href: "/LoeschZwerge/car" },
  20 |       { text: "About us", href: "/LoeschZwerge/about" },
  21 |       { text: "Quiz", href: "/LoeschZwerge/quiz" },
  22 |       { text: "Brandschutz", href: "/LoeschZwerge/brandschutz" },
  23 |       { text: "Hydrantdemo", href: "/LoeschZwerge/hydrantdemo" },
  24 |     ];
  25 |     for (const link of navLinks) {
  26 |       const locator = page.locator(`header nav a:has-text("${link.text}")`);
  27 |       await expect(locator).toBeVisible();
  28 |       await expect(locator).toHaveAttribute("href", link.href);
  29 |     }
  30 |   });
  31 |
  32 |   test("Aktiver Link erhält die Klasse .active", async ({ page }) => {
  33 |     // Gehe zu Quiz
  34 |     await page.goto("/LoeschZwerge/quiz");
  35 |     const quizLink = page.locator('header nav a:has-text("Quiz")');
  36 |     await expect(quizLink).toHaveClass(/active/);
  37 |
  38 |     // Gehe zu Brandschutz
  39 |     await page.goto("/LoeschZwerge/brandschutz");
  40 |     const brandschutzLink = page.locator(
  41 |       'header nav a:has-text("Brandschutz")',
  42 |     );
  43 |     await expect(brandschutzLink).toHaveClass(/active/);
  44 |   });
  45 |
  46 |   test("Hover-Effekt auf Navigationslinks", async ({ page }) => {
  47 |     const quizLink = page.locator('header nav a:has-text("Quiz")');
> 48 |     await quizLink.hover();
     |                    ^ Error: locator.hover: Error: strict mode violation: locator('header nav a:has-text("Quiz")') resolved to 2 elements:
  49 |     // Prüfe, ob der Hover-Stil angewendet wird (z.B. Hintergrundfarbe)
  50 |     const bgColor = await quizLink.evaluate(
  51 |       (el) => getComputedStyle(el).backgroundColor,
  52 |     );
  53 |     expect(bgColor).not.toBe("rgba(0, 0, 0, 0)"); // Sollte nicht transparent
  54 |   });
  55 | });
  56 |
```