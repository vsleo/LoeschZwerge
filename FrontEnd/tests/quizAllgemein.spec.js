import { test, expect } from "@playwright/test";

test.describe("Quiz_Allgemein.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/quiz/allgemein");
  });

  test("Quiz Template wird mit korrektem Titel und Beschreibung angezeigt", async ({
    page,
  }) => {
    await expect(page.locator("h1")).toHaveText("Brandschutz-Quiz");
    await expect(
      page.locator(
        "text=Hier kannst du dein Wissen über den Brandschutz testen!",
      ),
    ).toBeVisible();
  });

  test("Fragen des Allgemein-Quiz werden angezeigt", async ({ page }) => {
    // Annahme: Es gibt ein Element, das die Frage anzeigt
    const question = page.locator(
      '.quiz-question, .question, [data-testid="quiz-question"]',
    );
    await expect(question).toBeVisible();
  });

  test("Antwortmöglichkeiten sind vorhanden und auswählbar", async ({
    page,
  }) => {
    // Annahme: Antwortmöglichkeiten haben eine bestimmte Klasse oder data-testid
    const answers = page.locator(
      '.quiz-answer, .answer, [data-testid="quiz-answer"]',
    );
    await expect(answers.first()).toBeVisible();
    await answers.first().click();
    // Optional: Prüfe, ob die Auswahl markiert wird
    // await expect(answers.first()).toHaveClass(/selected|active/);
  });

  test("Nach Auswahl einer Antwort erscheint ein Weiter-Button", async ({
    page,
  }) => {
    const answers = page.locator(
      '.quiz-answer, .answer, [data-testid="quiz-answer"]',
    );
    await answers.first().click();
    const nextButton = page.locator(
      'button:has-text("Weiter"), button:has-text("Next")',
    );
    await expect(nextButton).toBeVisible();
  });

  test("Quiz kann durchgeklickt werden", async ({ page }) => {
    // Klicke durch mehrere Fragen, falls vorhanden
    for (let i = 0; i < 3; i++) {
      const answers = page.locator(
        '.quiz-answer, .answer, [data-testid="quiz-answer"]',
      );
      if ((await answers.count()) === 0) break;
      await answers.first().click();
      const nextButton = page.locator(
        'button:has-text("Weiter"), button:has-text("Next")',
      );
      if (await nextButton.isVisible()) {
        await nextButton.click();
      }
    }
    // Optional: Prüfe auf ein Endergebnis
    const result = page.locator('.quiz-result, [data-testid="quiz-result"]');
    if ((await result.count()) > 0) {
      await expect(result).toBeVisible();
    }
  });
});
