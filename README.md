# CSS Pills Open Graph Service

This example shows how to use [Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) with Next.js.

## Demo

[https://ob-css-pills-og.vercel.app/api/og](https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it)

![What is HSL color format in CSS and how to use it](https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it)

## How to Use

Visit https://ob-css-pills-og.vercel.app/api/og and append the following query parameters:

- `title` (optional): The title of the card
  - default value: "Quick and clear CSS tips in 5 min or less"
- `fontSize` (optional): The font size of the title in `px`.
  - default value: 65

For example, you can visit https://ob-css-pills-og.vercel.app/api/og?title=Hello%20World to see a card with the title "Hello World".
![Hello World](https://ob-css-pills-og.vercel.app/api/og?title=Hello%20World)

Or you can visit https://ob-css-pills-og.vercel.app/api/og?title=Hello%20World&fontSize=45 to see a card with the title "Hello World" and a font size of 45px.
![Hello World](https://ob-css-pills-og.vercel.app/api/og?title=Hello%20World&fontSize=100)

By default, the card will be generated with the following text:
**Quick and clear CSS tips in 5 min or less** and the font size will be 65px.
![CSS Pills](https://ob-css-pills-og.vercel.app/api/og)

### Clone and Deploy

```bash
npx create-next-app --example https://github.com/vercel/examples/tree/main/edge-functions/vercel-og-nextjs
# or
yarn create next-app --example https://github.com/vercel/examples/tree/main/edge-functions/vercel-og-nextjs
```

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```
