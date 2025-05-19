import { test, expect } from "@playwright/test";

test("Webpage name", async ({ page }) => {
  await page.goto("http://localhost:4321/LoeschZwerge/");
  await expect(page).toHaveTitle("Löschzwerge");
});

test("Header has the right picture", async ({ page }) => {
  await page.goto("http://localhost:4321/LoeschZwerge/");

  const logo = page.locator("img[alt='Logo']");

  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute(
    "src",
    "images/Loeschzwerge_Logo_lightblue.svg",
  );
  await expect(logo).toHaveAttribute("alt", "Logo");
});

test("firetruck has the right picture", async ({ page }) => {
  await page.goto("http://localhost:4321/LoeschZwerge/car");

  const fireEngine = page.locator("img[alt='Feuerwehrauto']");

  await expect(fireEngine).toBeVisible();
  await expect(fireEngine).toHaveAttribute(
    "src",
    "images/Feuerwehrauto-LF10.svg",
  );
  await expect(fireEngine).toHaveAttribute("alt", "Feuerwehrauto");
});
