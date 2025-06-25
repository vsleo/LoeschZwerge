# Test info

- Name: HydrantenschildKomponente.vue >> Nur eine Ziffer pro Feld erlaubt
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\hydrantschild.spec.js:32:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveValue(expected)

Locator: locator('.hydrantenschild .hotspot-input').nth(1)
Expected string: "2"
Received string: "1"
Call log:
  - expect.toHaveValue with timeout 5000ms
  - waiting for locator('.hydrantenschild .hotspot-input').nth(1)
    8 × locator resolved to <input value="1" type="text" maxlength="1" data-v-9145966c="" inputmode="numeric" class="hotspot-input"/>
      - unexpected value "1"

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\hydrantschild.spec.js:35:25
```

# Page snapshot

```yaml
- img "Hydrantenschild"
- textbox: "0"
- textbox: "1"
- textbox: "2"
- textbox: "3"
- textbox: "4"
- textbox: "5"
- textbox
- textbox: "7"
- textbox: "8"
- textbox: "9"
- textbox: "10"
- textbox: "11"
- textbox: "12"
- textbox: "13"
- textbox: "14"
- textbox: "15"
- textbox: "16"
- text: 0 0 0 0 0
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("HydrantenschildKomponente.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/hydrantenschild");
   7 |   });
   8 |
   9 |   test("Das Hydrantenschild-Bild ist sichtbar", async ({ page }) => {
  10 |     const img = page.locator(".hydrantenschild img");
  11 |     await expect(img).toBeVisible();
  12 |     await expect(img).toHaveAttribute("alt", "Hydrantenschild");
  13 |     await expect(img).toHaveAttribute("src", /Hydrantenschild\.png$/);
  14 |   });
  15 |
  16 |   test("Alle Hotspot-Inputfelder sind sichtbar", async ({ page }) => {
  17 |     const inputs = page.locator(".hydrantenschild .hotspot-input");
  18 |     await expect(inputs).toHaveCount(17); // Es gibt 17 Hotspots mit Input
  19 |     for (let i = 0; i < 17; i++) {
  20 |       await expect(inputs.nth(i)).toBeVisible();
  21 |     }
  22 |   });
  23 |
  24 |   test("Eingabe in ein Hotspot-Input aktualisiert das Label", async ({
  25 |     page,
  26 |   }) => {
  27 |     const input = page.locator(".hydrantenschild .hotspot-input").nth(0);
  28 |     await input.fill("5");
  29 |     await expect(input).toHaveValue("5");
  30 |   });
  31 |
  32 |   test("Nur eine Ziffer pro Feld erlaubt", async ({ page }) => {
  33 |     const input = page.locator(".hydrantenschild .hotspot-input").nth(1);
  34 |     await input.fill("42");
> 35 |     await expect(input).toHaveValue("2"); // Nur die letzte Ziffer bleibt
     |                         ^ Error: Timed out 5000ms waiting for expect(locator).toHaveValue(expected)
  36 |   });
  37 |
  38 |   test("Links/Rechts Eingabe leert jeweils das andere Feld", async ({
  39 |     page,
  40 |   }) => {
  41 |     const inputLinks = page.locator(".hydrantenschild .hotspot-input").nth(3);
  42 |     const inputRechts = page.locator(".hydrantenschild .hotspot-input").nth(5);
  43 |
  44 |     await inputLinks.fill("7");
  45 |     await expect(inputLinks).toHaveValue("7");
  46 |     await inputRechts.fill("8");
  47 |     await expect(inputRechts).toHaveValue("8");
  48 |     await expect(inputLinks).toHaveValue(""); // Links wird geleert, wenn Rechts befüllt wird
  49 |   });
  50 |
  51 |   test("Backspace leert das Feld", async ({ page }) => {
  52 |     const input = page.locator(".hydrantenschild .hotspot-input").nth(2);
  53 |     await input.fill("9");
  54 |     await expect(input).toHaveValue("9");
  55 |     await input.press("Backspace");
  56 |     await expect(input).toHaveValue("");
  57 |   });
  58 |
  59 |   test("Die berechneten Werte werden angezeigt", async ({ page }) => {
  60 |     // Fülle Nenndurchmesser (erste drei Felder)
  61 |     await page.locator(".hydrantenschild .hotspot-input").nth(0).fill("1");
  62 |     await page.locator(".hydrantenschild .hotspot-input").nth(1).fill("2");
  63 |     await page.locator(".hydrantenschild .hotspot-input").nth(2).fill("3");
  64 |     // Fülle RichtungLinks (Feld 3, 4, 10)
  65 |     await page.locator(".hydrantenschild .hotspot-input").nth(3).fill("4");
  66 |     await page.locator(".hydrantenschild .hotspot-input").nth(4).fill("5");
  67 |     await page.locator(".hydrantenschild .hotspot-input").nth(10).fill("6");
  68 |     // Fülle RichtungRechts (Feld 5, 6, 11)
  69 |     await page.locator(".hydrantenschild .hotspot-input").nth(5).fill("7");
  70 |     await page.locator(".hydrantenschild .hotspot-input").nth(6).fill("8");
  71 |     await page.locator(".hydrantenschild .hotspot-input").nth(11).fill("9");
  72 |     // Fülle RichtungUnten (Feld 7, 8, 9)
  73 |     await page.locator(".hydrantenschild .hotspot-input").nth(7).fill("1");
  74 |     await page.locator(".hydrantenschild .hotspot-input").nth(8).fill("2");
  75 |     await page.locator(".hydrantenschild .hotspot-input").nth(9).fill("3");
  76 |
  77 |     // Überprüfe, ob die berechneten Werte angezeigt werden
  78 |     await expect(page.locator("div")).toContainText("123 45.6 78.9 12.3");
  79 |   });
  80 | });
  81 |
```