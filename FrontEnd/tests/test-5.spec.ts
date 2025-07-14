import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4322/LoeschZwerge/");
  await page.getByRole("link", { name: "Quiz", exact: true }).click();
  await page.getByRole("link", { name: "Brandschutz Quiz" }).click();
  await page.getByRole("button", { name: "Er warnt frühzeitig vor" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Alle 2 Jahre" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page
    .getByRole("button", { name: "Sauerstoff, Brennstoff, Wärme" })
    .click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "78%" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Damit bei Feueralarm" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Nochmal spielen" }).click();
  await page.getByRole("link", { name: "Quiz" }).click();
  await page.getByRole("link", { name: "Feuerwehrauto Quiz" }).click();
  await page.getByRole("button", { name: "Drehleiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page
    .getByText(
      "Zum Löschen von BodenbrändenZum Transport von WasserZum Retten von Personen aus",
    )
    .click();
  await page
    .getByRole("button", { name: "Zum Retten von Personen aus H" })
    .click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "9" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "2500" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "8,00m" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("link", { name: "Quiz" }).click();
  await page.getByRole("link", { name: "Allgemeinwissen Quiz" }).click();
  await page.getByRole("button", { name: "Menschen retten" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "104" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Warnweste, Jeans, Basecap" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "An dem Hydrantenschild," }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page
    .getByRole("button", { name: "Das Mehl kann aufgrund seiner" })
    .click();
  await page.getByRole("button", { name: "Weiter" }).click();
});
