# Test info

- Name: HydrantenGame.vue >> HydrantenschildKomponente ist eingebunden
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\hydrantgame.spec.js:14:3

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('.hydrantenschild') resolved to 2 elements:
    1) <div data-v-9145966c="" class="hydrantenschild">…</div> aka locator('div').first()
    2) <img data-v-9145966c="" alt="Hydrantenschild" class="hydrantenschild" src="images/Hydrantenschild.png"/> aka getByRole('img', { name: 'Hydrantenschild' })

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.hydrantenschild')

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\hydrantgame.spec.js:17:52
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
- heading "Hydranten Game" [level=1]
- paragraph: "Values received: []"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("HydrantenGame.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/hydrantgame");
   7 |   });
   8 |
   9 |   test("Überschrift und Werteanzeige sind sichtbar", async ({ page }) => {
  10 |     await expect(page.locator("h1")).toHaveText("Hydranten Game");
  11 |     await expect(page.locator("text=Values received:")).toBeVisible();
  12 |   });
  13 |
  14 |   test("HydrantenschildKomponente ist eingebunden", async ({ page }) => {
  15 |     // Prüfe, ob ein Element aus der HydrantenschildKomponente sichtbar ist
  16 |     // Passe den Selektor ggf. an die tatsächliche Struktur an
> 17 |     await expect(page.locator(".hydrantenschild")).toBeVisible();
     |                                                    ^ Error: expect.toBeVisible: Error: strict mode violation: locator('.hydrantenschild') resolved to 2 elements:
  18 |   });
  19 |
  20 |   test("Empfangene Werte werden angezeigt", async ({ page }) => {
  21 |     // Simuliere eine Eingabe in ein Feld der HydrantenschildKomponente
  22 |     const input = page.locator(".hydrantenschild input").first();
  23 |     await input.fill("5");
  24 |     // Es sollte sich jetzt der "Values received:"-Text ändern
  25 |     await expect(page.locator("text=Values received:")).toBeVisible();
  26 |     // Optional: Prüfe, ob die Zahl im Text erscheint
  27 |     await expect(page.locator(".hydranten-game")).toContainText("5");
  28 |   });
  29 | });
  30 |
```