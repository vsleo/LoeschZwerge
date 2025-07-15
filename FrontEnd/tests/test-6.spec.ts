import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4321/LoeschZwerge/");
  await page.getByRole("link", { name: "Feuerwehrauto", exact: true }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.locator("a").filter({ hasText: "LF-10 Das abgebildete" }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("link", { name: "RolltorTH" }).click();
  await page.getByRole("img", { name: "Tooltip" }).click();
  await page.getByRole("button", { name: "Schließen" }).click();
  await page.getByText("° Rüstholz").click();
  await page.getByRole("img").nth(2).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "° Elektrowerkzeug" })
    .click();
  await page.getByRole("img").nth(2).click();
  await page.getByRole("img").nth(1).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("link", { name: "RolltorAGT" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("link", { name: "RolltorAT" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("link", { name: "Rolltor Pumpe" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("link", { name: "Rolltor Schlauchmaterial" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("link", { name: "Rolltor Wasserführende" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).dblclick();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("button").first().click();
  await page.getByRole("button").first().click();
  await page.getByRole("link", { name: "Rolltor Wasserführende" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).click();
  await page.getByRole("button").first().click();
  await page.getByRole("link", { name: "Rolltor Stromversorgung" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto" }).click();
  await page.getByRole("img", { name: "Tooltip" }).click();
  await page.getByRole("button", { name: "Schließen" }).click();
});
