# Test info

- Name: Quiz_Template.vue >> Frage und Antwortmöglichkeiten werden angezeigt
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\quizTemplate.spec.js:9:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('.question-number')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.question-number')

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\quizTemplate.spec.js:10:52
```

# Page snapshot

```yaml
- main:
  - img
  - 'heading "404: Not found" [level=1]'
  - text: "Path: /quiz/allgemein"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("Quiz_Template.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/quiz/allgemein");
   7 |   });
   8 |
   9 |   test("Frage und Antwortmöglichkeiten werden angezeigt", async ({ page }) => {
> 10 |     await expect(page.locator(".question-number")).toBeVisible();
     |                                                    ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  11 |     await expect(page.locator(".question-text")).toBeVisible();
  12 |     const options = page.locator(".option-button");
  13 |     await expect(options.first()).toBeVisible();
  14 |     await expect(options).toHaveCountGreaterThan(1);
  15 |   });
  16 |
  17 |   test("Antwort kann ausgewählt werden und wird farblich markiert", async ({
  18 |     page,
  19 |   }) => {
  20 |     const options = page.locator(".option-button");
  21 |     await options.nth(0).click();
  22 |     // Nach Klick sollte die Option entweder .correct oder .incorrect haben
  23 |     const classes = await options.nth(0).getAttribute("class");
  24 |     expect(classes).toMatch(/correct|incorrect/);
  25 |     // Buttons sollten disabled sein
  26 |     await expect(options.nth(0)).toBeDisabled();
  27 |   });
  28 |
  29 |   test("Weiter-Button erscheint nach Auswahl", async ({ page }) => {
  30 |     const options = page.locator(".option-button");
  31 |     await options.nth(0).click();
  32 |     await expect(page.locator(".next-button")).toBeVisible();
  33 |   });
  34 |
  35 |   test("Quiz kann durchgeklickt werden und zeigt Ergebnis", async ({
  36 |     page,
  37 |   }) => {
  38 |     for (let i = 0; i < 3; i++) {
  39 |       const options = page.locator(".option-button");
  40 |       if ((await options.count()) === 0) break;
  41 |       await options.nth(0).click();
  42 |       const nextButton = page.locator(".next-button");
  43 |       if (await nextButton.isVisible()) {
  44 |         await nextButton.click();
  45 |       }
  46 |     }
  47 |     await expect(page.locator(".result-box")).toBeVisible();
  48 |     await expect(page.locator(".result-title")).toHaveText("Ergebnis");
  49 |     await expect(page.locator(".restart-button")).toBeVisible();
  50 |   });
  51 |
  52 |   test("Quiz kann neugestartet werden", async ({ page }) => {
  53 |     // Klicke durch das Quiz bis zum Ergebnis
  54 |     for (let i = 0; i < 3; i++) {
  55 |       const options = page.locator(".option-button");
  56 |       if ((await options.count()) === 0) break;
  57 |       await options.nth(0).click();
  58 |       const nextButton = page.locator(".next-button");
  59 |       if (await nextButton.isVisible()) {
  60 |         await nextButton.click();
  61 |       }
  62 |     }
  63 |     await expect(page.locator(".result-box")).toBeVisible();
  64 |     await page.locator(".restart-button").click();
  65 |     // Nach Neustart sollte wieder die erste Frage erscheinen
  66 |     await expect(page.locator(".question-number")).toBeVisible();
  67 |   });
  68 | });
  69 |
```