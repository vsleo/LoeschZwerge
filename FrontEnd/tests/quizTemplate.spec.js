import { test, expect } from "@playwright/test";

test.describe("Quiz_Template.vue", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/quiz/allgemein");
  });

  test("Frage und Antwortmöglichkeiten werden angezeigt", async ({ page }) => {
    await expect(page.locator(".question-number")).toBeVisible();
    await expect(page.locator(".question-text")).toBeVisible();
    const options = page.locator(".option-button");
    await expect(options.first()).toBeVisible();
    await expect(options).toHaveCountGreaterThan(1);
  });

  test("Antwort kann ausgewählt werden und wird farblich markiert", async ({
    page,
  }) => {
    const options = page.locator(".option-button");
    await options.nth(0).click();
    // Nach Klick sollte die Option entweder .correct oder .incorrect haben
    const classes = await options.nth(0).getAttribute("class");
    expect(classes).toMatch(/correct|incorrect/);
    // Buttons sollten disabled sein
    await expect(options.nth(0)).toBeDisabled();
  });

  test("Weiter-Button erscheint nach Auswahl", async ({ page }) => {
    const options = page.locator(".option-button");
    await options.nth(0).click();
    await expect(page.locator(".next-button")).toBeVisible();
  });

  test("Quiz kann durchgeklickt werden und zeigt Ergebnis", async ({
    page,
  }) => {
    for (let i = 0; i < 3; i++) {
      const options = page.locator(".option-button");
      if ((await options.count()) === 0) break;
      await options.nth(0).click();
      const nextButton = page.locator(".next-button");
      if (await nextButton.isVisible()) {
        await nextButton.click();
      }
    }
    await expect(page.locator(".result-box")).toBeVisible();
    await expect(page.locator(".result-title")).toHaveText("Ergebnis");
    await expect(page.locator(".restart-button")).toBeVisible();
  });

  test("Quiz kann neugestartet werden", async ({ page }) => {
    // Klicke durch das Quiz bis zum Ergebnis
    for (let i = 0; i < 3; i++) {
      const options = page.locator(".option-button");
      if ((await options.count()) === 0) break;
      await options.nth(0).click();
      const nextButton = page.locator(".next-button");
      if (await nextButton.isVisible()) {
        await nextButton.click();
      }
    }
    await expect(page.locator(".result-box")).toBeVisible();
    await page.locator(".restart-button").click();
    // Nach Neustart sollte wieder die erste Frage erscheinen
    await expect(page.locator(".question-number")).toBeVisible();
  });
});
