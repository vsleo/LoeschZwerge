import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4322/LoeschZwerge/");
  await page.goto("http://localhost:4322/LoeschZwerge/");
  await page.getByRole("link", { name: "Hydrantdemo" }).click();
  await page.getByRole("img", { name: "Tooltip" }).click();
  await page.getByRole("button", { name: "Schließen" }).click();
  await page.getByRole("img", { name: "Bild für Feld 80" }).click();
  await page
    .locator("div")
    .filter({ hasText: "13.3 0 2.4 Schließen" })
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Schließen" }).click();
  await page.getByRole("img", { name: "Bild für Feld 162" }).click();
});
