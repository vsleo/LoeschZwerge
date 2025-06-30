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
});
