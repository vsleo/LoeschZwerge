import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4322/LoeschZwerge/");
  await page.getByRole("link", { name: "Lernvideos" }).click();
  await page.getByText("Was ist Feuer und wie löscht").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Was tun wenn es brennt?").click();
  await page.getByText("Rauchmelder und Co").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Mehlstaubexplosion").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Notruf absetzen").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Aufgaben eines Disponenten").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Warum Metallbrände nicht mit").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Aufbau und Benutzung der").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Aufbau Wasserentnahme offenes").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page.getByText("Erste-Hilfe-Maßnahmen").click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .getByRole("button", { name: "Play" })
    .click();
  await page
    .locator('iframe[title="YouTube video player"]')
    .contentFrame()
    .locator("video")
    .click();
});
