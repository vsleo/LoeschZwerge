# Test info

- Name: Brandschutz.vue >> Es werden Videos zum Thema Brandschutz angezeigt
- Location: C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\brandschutz.spec.js:16:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('[data-testid="video-x-liste"] video, [data-testid="video-x-liste"] .video-item').first()
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('[data-testid="video-x-liste"] video, [data-testid="video-x-liste"] .video-item').first()

    at C:\Users\erwin\IdeaProjects\LoeschZwerge\FrontEnd\tests\brandschutz.spec.js:22:34
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
- iframe
- list:
  - listitem:
    - paragraph: Der Haufen muss weg
  - listitem:
    - paragraph: Chris Brown - Yeah 3x
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("Brandschutz.vue", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Passe ggf. den Pfad an, falls deine Route anders ist
   6 |     await page.goto("http://localhost:4321/LoeschZwerge/brandschutz");
   7 |   });
   8 |
   9 |   test("VideoXListe-Komponente ist sichtbar", async ({ page }) => {
  10 |     // Prüfe, ob ein Element mit dem VideoXListe-Container existiert
  11 |     // (z.B. eine Liste oder ein Container, der für Videos steht)
  12 |     const videoList = page.locator('[data-testid="video-x-liste"]');
  13 |     await expect(videoList).toBeVisible();
  14 |   });
  15 |
  16 |   test("Es werden Videos zum Thema Brandschutz angezeigt", async ({ page }) => {
  17 |     // Prüfe, ob mindestens ein Video-Element für Brandschutz angezeigt wird
  18 |     // Passe den Selektor ggf. an die tatsächliche Struktur an
  19 |     const videos = page.locator(
  20 |       '[data-testid="video-x-liste"] video, [data-testid="video-x-liste"] .video-item',
  21 |     );
> 22 |     await expect(videos.first()).toBeVisible();
     |                                  ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  23 |   });
  24 |
  25 |   test("Alle Videos haben ein korrektes Genre-Attribut", async ({ page }) => {
  26 |     // Prüfe, ob das Genre-Attribut korrekt gesetzt ist (falls vorhanden)
  27 |     const videoItems = await page.locator(
  28 |       '[data-testid="video-x-liste"] [data-genre]',
  29 |     );
  30 |     const count = await videoItems.count();
  31 |     for (let i = 0; i < count; i++) {
  32 |       await expect(videoItems.nth(i)).toHaveAttribute(
  33 |         "data-genre",
  34 |         "brandschutz",
  35 |       );
  36 |     }
  37 |   });
  38 | });
  39 |
```