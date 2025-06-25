# Test info

- Name: Quiz_Feuerwehrauto.vue >> Fragen des Feuerwehrauto-Quiz werden angezeigt
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\quizFeuerwehrauto.spec.js:20:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('.quiz-question, .question, [data-testid="quiz-question"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.quiz-question, .question, [data-testid="quiz-question"]')

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\quizFeuerwehrauto.spec.js:25:28
```

# Page snapshot

```yaml
- main:
  - img
  - 'heading "404: Not found" [level=1]'
  - text: "Path: /quiz/feuerwehrauto"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("Quiz_Feuerwehrauto.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/quiz/feuerwehrauto");
   7 |   });
   8 |
   9 |   test("Quiz Template zeigt korrekten Titel und Beschreibung", async ({
  10 |     page,
  11 |   }) => {
  12 |     await expect(page.locator("h1")).toHaveText("Brandschutz-Quiz");
  13 |     await expect(
  14 |       page.locator(
  15 |         "text=Hier kannst du dein Wissen über den Brandschutz testen!",
  16 |       ),
  17 |     ).toBeVisible();
  18 |   });
  19 |
  20 |   test("Fragen des Feuerwehrauto-Quiz werden angezeigt", async ({ page }) => {
  21 |     // Annahme: Es gibt ein Element, das die Frage anzeigt
  22 |     const question = page.locator(
  23 |       '.quiz-question, .question, [data-testid="quiz-question"]',
  24 |     );
> 25 |     await expect(question).toBeVisible();
     |                            ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  26 |   });
  27 |
  28 |   test("Antwortmöglichkeiten sind vorhanden und auswählbar", async ({
  29 |     page,
  30 |   }) => {
  31 |     // Annahme: Antwortmöglichkeiten haben eine bestimmte Klasse oder data-testid
  32 |     const answers = page.locator(
  33 |       '.quiz-answer, .answer, [data-testid="quiz-answer"]',
  34 |     );
  35 |     await expect(answers.first()).toBeVisible();
  36 |     await answers.first().click();
  37 |     // Optional: Prüfe, ob die Auswahl markiert wird
  38 |     // await expect(answers.first()).toHaveClass(/selected|active/);
  39 |   });
  40 |
  41 |   test("Nach Auswahl einer Antwort erscheint ein Weiter-Button", async ({
  42 |     page,
  43 |   }) => {
  44 |     const answers = page.locator(
  45 |       '.quiz-answer, .answer, [data-testid="quiz-answer"]',
  46 |     );
  47 |     await answers.first().click();
  48 |     const nextButton = page.locator(
  49 |       'button:has-text("Weiter"), button:has-text("Next")',
  50 |     );
  51 |     await expect(nextButton).toBeVisible();
  52 |   });
  53 |
  54 |   test("Quiz kann durchgeklickt werden", async ({ page }) => {
  55 |     // Klicke durch mehrere Fragen, falls vorhanden
  56 |     for (let i = 0; i < 3; i++) {
  57 |       const answers = page.locator(
  58 |         '.quiz-answer, .answer, [data-testid="quiz-answer"]',
  59 |       );
  60 |       if ((await answers.count()) === 0) break;
  61 |       await answers.first().click();
  62 |       const nextButton = page.locator(
  63 |         'button:has-text("Weiter"), button:has-text("Next")',
  64 |       );
  65 |       if (await nextButton.isVisible()) {
  66 |         await nextButton.click();
  67 |       }
  68 |     }
  69 |     // Optional: Prüfe auf ein Endergebnis
  70 |     const result = page.locator('.quiz-result, [data-testid="quiz-result"]');
  71 |     if ((await result.count()) > 0) {
  72 |       await expect(result).toBeVisible();
  73 |     }
  74 |   });
  75 | });
  76 |
```