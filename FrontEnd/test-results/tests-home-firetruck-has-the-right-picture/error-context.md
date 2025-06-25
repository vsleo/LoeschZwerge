# Test info

- Name: firetruck has the right picture
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\home.spec.js:21:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveAttribute(expected)

Locator: locator('img[alt=\'Feuerwehrauto\']')
Expected string: "images/Feuerwehrauto-LF10.svg"
Received string: "images/LF-10/Feuerwehrauto-LF10-left.png"
Call log:
  - expect.toHaveAttribute with timeout 5000ms
  - waiting for locator('img[alt=\'Feuerwehrauto\']')
    9 × locator resolved to <img class="firetruck" data-v-10af24cc="" alt="Feuerwehrauto" src="images/LF-10/Feuerwehrauto-LF10-left.png"/>
      - unexpected value "images/LF-10/Feuerwehrauto-LF10-left.png"

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\home.spec.js:27:28
```

# Page snapshot

```yaml
- banner:
  - link "Logo":
    - /url: /LoeschZwerge/
    - img "Logo"
  - navigation:
    - link "Feuerwehrauto":
      - /url: /LoeschZwerge/car
    - link "About us":
      - /url: /LoeschZwerge/about
    - link "Quiz":
      - /url: /LoeschZwerge/quiz
    - link "Brandschutz":
      - /url: /LoeschZwerge/brandschutz
    - link "Hydrantdemo":
      - /url: /LoeschZwerge/hydrantdemo
- img "Feuerwehrauto"
- link "RolltorTH":
  - /url: /LoeschZwerge/g1
- link "RolltorAGT":
  - /url: /LoeschZwerge/g3
- link "RolltorAT":
  - /url: /LoeschZwerge/g5
- button:
  - img
- button:
  - img
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Webpage name", async ({ page }) => {
   4 |   await page.goto("http://localhost:4321/LoeschZwerge/");
   5 |   await expect(page).toHaveTitle("Löschzwerge");
   6 | });
   7 |
   8 | test("Header has the right picture", async ({ page }) => {
   9 |   await page.goto("http://localhost:4321/LoeschZwerge/");
  10 |
  11 |   const logo = page.locator("img[alt='Logo']");
  12 |
  13 |   await expect(logo).toBeVisible();
  14 |   await expect(logo).toHaveAttribute(
  15 |     "src",
  16 |     "images/Loeschzwerge_Logo_lightblue.svg",
  17 |   );
  18 |   await expect(logo).toHaveAttribute("alt", "Logo");
  19 | });
  20 |
  21 | test("firetruck has the right picture", async ({ page }) => {
  22 |   await page.goto("http://localhost:4321/LoeschZwerge/car");
  23 |
  24 |   const fireEngine = page.locator("img[alt='Feuerwehrauto']");
  25 |
  26 |   await expect(fireEngine).toBeVisible();
> 27 |   await expect(fireEngine).toHaveAttribute(
     |                            ^ Error: Timed out 5000ms waiting for expect(locator).toHaveAttribute(expected)
  28 |     "src",
  29 |     "images/Feuerwehrauto-LF10.svg",
  30 |   );
  31 |   await expect(fireEngine).toHaveAttribute("alt", "Feuerwehrauto");
  32 | });
  33 |
```