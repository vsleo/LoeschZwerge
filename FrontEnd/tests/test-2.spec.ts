import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4321/LoeschZwerge/");
  await page.getByRole("link", { name: "Feuerwehrauto", exact: true }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("link", { name: "RolltorTH" }).click();
  await page.getByRole("img").nth(2).click();
  await page.getByText("° Rüstholz").click();
  await page.locator(".flip-card-front").click();
  await page.getByRole("img").nth(2).click();
  await page.getByText("° Elektrowerkzeug").click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "° Türöffnungskoffer 1 &" })
    .click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "° Motorkettensäge und Zubehör" })
    .click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
  await page.getByText("° Schnittschutzhose und Helm").click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
  await page.getByText("° Kelly-Tool").click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
  await page.getByText("° Spaltaxt").click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
  await page.getByText("° Bogensäge").click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("listitem").filter({ hasText: "° VU-Koffer" }).click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(2).click();
});
