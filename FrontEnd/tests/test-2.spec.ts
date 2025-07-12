import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4322/LoeschZwerge/");
  await expect(page.getByRole("navigation")).toContainText("Quiz");
  await expect(
    page.getByRole("link", { name: "Quiz", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Quiz", exact: true }).click();
  await expect(
    page.getByRole("link", { name: "Feuerwehrauto Quiz" }),
  ).toBeVisible();
  await expect(page.locator("body")).toContainText("Feuerwehrauto");
  await page.getByRole("link", { name: "Feuerwehrauto Quiz" }).click();
  await page.getByRole("button", { name: "Tanklöschfahrzeug (TLF)" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page
    .getByRole("button", { name: "Zum Retten von Personen aus H" })
    .click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "12" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "1200" }).click();
  await page.getByText("Frage 4 von 5Wie viel Wasser").click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page
    .getByRole("button", { name: "12m Nennrettungshöhe und 23m" })
    .click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Nochmal spielen" }).click();
  await page.getByRole("button", { name: "Rüstwagen (RW)" }).click();
});
