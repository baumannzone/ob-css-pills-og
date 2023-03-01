# Vercel OG + Next.js

This example shows how to use [Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) with Next.js.

## Demo

[https://ob-css-pills-og.vercel.app/api/og](https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it)

![What is HSL color format in CSS and how to use it](https://ob-css-pills-og.vercel.app/api/og?title=What%20is%20HSL%20color%20format%20in%20CSS%20and%20how%20to%20use%20it)

## How to Use

Visit https://ob-css-pills-og.vercel.app/api/og and append the following query parameters:

- `title` (required): The title of the card

For example, you can visit https://ob-css-pills-og.vercel.app/api/og?title=Hello%20World to see a card with the title "Hello World".

![Hello World](https://ob-css-pills-og.vercel.app/api/og?title=Hello%20World)

By default, the card will be generated with the following text:
**Quick and clear CSS tips in 5 min or less**
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
