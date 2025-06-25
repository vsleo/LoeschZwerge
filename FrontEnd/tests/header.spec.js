import { test, expect } from "@playwright/test";

test.describe("Header.vue", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4321/LoeschZwerge/");
  });

  test("Logo ist sichtbar und verlinkt zur Startseite", async ({ page }) => {
    const logo = page.locator("header .headline a img");
    await expect(logo).toBeVisible();
    await expect(page.locator("header .headline a")).toHaveAttribute(
      "href",
      "/LoeschZwerge/",
    );
  });

  test("Alle Navigationslinks sind sichtbar", async ({ page }) => {
    const navLinks = [
      { text: "Feuerwehrauto", href: "/LoeschZwerge/car" },
      { text: "About us", href: "/LoeschZwerge/about" },
      { text: "Quiz", href: "/LoeschZwerge/quiz" },
      { text: "Brandschutz", href: "/LoeschZwerge/brandschutz" },
      { text: "Hydrantdemo", href: "/LoeschZwerge/hydrantdemo" },
    ];
    for (const link of navLinks) {
      const locator = page.locator(`header nav a:has-text("${link.text}")`);
      await expect(locator).toBeVisible();
      await expect(locator).toHaveAttribute("href", link.href);
    }
  });

  test("Aktiver Link erhält die Klasse .active", async ({ page }) => {
    // Gehe zu Quiz
    await page.goto("/LoeschZwerge/quiz");
    const quizLink = page.locator('header nav a:has-text("Quiz")');
    await expect(quizLink).toHaveClass(/active/);

    // Gehe zu Brandschutz
    await page.goto("/LoeschZwerge/brandschutz");
    const brandschutzLink = page.locator(
      'header nav a:has-text("Brandschutz")',
    );
    await expect(brandschutzLink).toHaveClass(/active/);
  });

  test("Hover-Effekt auf Navigationslinks", async ({ page }) => {
    const quizLink = page.locator('header nav a:has-text("Quiz")');
    await quizLink.hover();
    // Prüfe, ob der Hover-Stil angewendet wird (z.B. Hintergrundfarbe)
    const bgColor = await quizLink.evaluate(
      (el) => getComputedStyle(el).backgroundColor,
    );
    expect(bgColor).not.toBe("rgba(0, 0, 0, 0)"); // Sollte nicht transparent
  });
});
