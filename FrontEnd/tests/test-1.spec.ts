import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4322/LoeschZwerge/");
  await page.getByRole("link", { name: "Quiz", exact: true }).click();
  await page.getByRole("link", { name: "Brandschutz Quiz" }).click();
  await page.getByRole("button", { name: "Er warnt frühzeitig vor" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Jährlich" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page
    .getByRole("button", { name: "Sauerstoff, Brennstoff, Wärme" })
    .click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "7%" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page
    .getByRole("button", {
      name: "Die Brandmeldeanlage dient zur frühen Erkennung von Bränden und alarmiert in",
    })
    .click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Nochmal spielen" }).click();
  await page.getByRole("img", { name: "Logo" }).click();
});
