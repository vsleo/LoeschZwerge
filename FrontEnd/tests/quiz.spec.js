import { test, expect } from "@playwright/test";

test.describe("Quiz.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/quiz");
  });

  test("Alle Quiz-Kacheln werden angezeigt", async ({ page }) => {
    // Warte, bis mindestens eine Quiz-Kachel geladen ist
    await expect(page.locator(".quiz-container a")).toHaveCountGreaterThan(0);
    // Jede Kachel sollte ein Bild und einen Titel enthalten
    const quizzes = page.locator(".quiz-container a");
    const count = await quizzes.count();
    for (let i = 0; i < count; i++) {
      const quiz = quizzes.nth(i);
      await expect(quiz.locator("img")).toBeVisible();
      await expect(quiz.locator("div")).toContainText("Quiz");
    }
  });

  test("Quiz-Kachel-Link funktioniert", async ({ page }) => {
    const firstQuiz = page.locator(".quiz-container a").first();
    const href = await firstQuiz.getAttribute("href");
    await firstQuiz.click();
    // Nach dem Klick sollte die URL die Quiz-Detailseite anzeigen
    await expect(page).toHaveURL(new RegExp(href.replace(".", "\\.")));
  });

  test("Hover-Effekt auf Quiz-Kachel", async ({ page }) => {
    const firstQuiz = page.locator(".quiz-container a").first();
    const before = await firstQuiz.evaluate(
      (el) => getComputedStyle(el).backgroundColor,
    );
    await firstQuiz.hover();
    const after = await firstQuiz.evaluate(
      (el) => getComputedStyle(el).backgroundColor,
    );
    expect(before).not.toBe(after);
  });
});
