# BotStation - Next.js

## Struktura projektu

```
app/
  layout.tsx       - główny layout z Navbar i Footer
  page.tsx         - strona główna
  globals.css      - globalne style
  uslugi/page.tsx  - strona usług
  faq/page.tsx     - FAQ z accordionem
  rangi/page.tsx   - rangi serwera
  regulamin/page.tsx - regulamin
  zamowienie/page.tsx - formularz zamówienia
components/
  Navbar.tsx       - nawigacja
  Footer.tsx       - stopka
  PageHeader.tsx   - nagłówek podstron
lib/
  utils.ts         - helper cn()
```

## Deploy na Vercel

1. Wrzuć na GitHub
2. Importuj w Vercelu
3. Vercel wykryje Next.js automatycznie - żadnych dodatkowych ustawień
4. Kliknij Deploy

## Lokalne uruchomienie

```bash
npm install
npm run dev
```
