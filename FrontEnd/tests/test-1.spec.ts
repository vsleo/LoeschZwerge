import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4322/LoeschZwerge/");
  await page.getByRole("link", { name: "Hydranten-Game" }).click();
  await page.getByRole("img", { name: "Tooltip" }).click();
  await page.getByRole("button", { name: "Schließen" }).click();
  await page.getByRole("img", { name: "Bild für Feld 80" }).click();
  await page.getByRole("button", { name: "Schließen" }).click();
});
