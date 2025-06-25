import { test, expect } from "@playwright/test";

test.describe("AboutUs.astro", () => {
  test.beforeEach(async ({ page }) => {
    // Passe ggf. den Pfad an, falls deine Route anders ist
    await page.goto("http://localhost:4321/LoeschZwerge/about");
  });

  test("Text ist sichtbar und korrekt", async ({ page }) => {
    const text = await page.locator(".text-box p");
    await expect(text).toBeVisible();
    await expect(text).toContainText("Studentenprojekt");
    await expect(text).toContainText("htw saar");
    await expect(text).toContainText("Klicke auf das Logo");
  });

  test("Logo ist sichtbar, korrekt verlinkt und hat Alt-Text", async ({
    page,
  }) => {
    const logoLink = page.locator(".image-container a");
    const logoImg = page.locator(".image-container img");
    await expect(logoLink).toHaveAttribute("href", "https://www.htwsaar.de/");
    await expect(logoImg).toBeVisible();
    await expect(logoImg).toHaveAttribute("alt", "Logo der htwsaar");
    await expect(logoImg).toHaveAttribute("title", "Logo der htwsaar");
    await expect(logoImg).toHaveAttribute(
      "src",
      "https://www.htwsaar.de/@@site-logo/logo.png",
    );
  });

  test("Logo-Link öffnet im neuen Tab", async ({ page }) => {
    const logoLink = page.locator(".image-container a");
    await expect(logoLink).toHaveAttribute("target", "blank");
  });

  test("Hover-Effekt auf Logo funktioniert", async ({ page }) => {
    const logoImg = page.locator(".image-container img");
    const before = await logoImg.evaluate(
      (el) => getComputedStyle(el).transform,
    );
    await logoImg.hover();
    const after = await logoImg.evaluate(
      (el) => getComputedStyle(el).transform,
    );
    expect(before).not.toBe(after);
  });
});
