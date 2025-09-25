# Simple Website for Company

A modern, SEO-friendly static website built with Next.js, Tailwind, Shadcn UI, and TypeScript.

## Features

- **Fast & Lightweight** - Built with Next.js for optimal performance
- **Responsive Design** - Tailwind CSS for mobile-first responsive layout
- **Modern UI** - Shadcn UI components for consistent design
- **SEO Optimized** - Static generation with proper meta tags
- **TypeScript** - Type-safe development

## Pages

- Homepage
- Products listing page
- Individual product pages
- About section
- FAQ page
- Contact form (requires backend for functionality)

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Deployment**: Static site generation

## Live Demo

[hengtongtrading.com](https://hengtongtrading.com)

#### Homepage
---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ab27c37f-7e5c-4296-b3b5-3fb6c75bdb02" />

#### Products
---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/99f03c43-d9be-4477-96c7-2cb3c71022bf" />

#### Product View
---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/976d6db7-0e11-4d93-8564-38e953992395" />

#### Contact Page
---

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/135cc01c-6698-43cf-96bb-2e3753f79e8a" />

## Note

The contact form requires backend integration for email functionality or database storage.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Install the required packages:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy Guide

**Create `.env` file wiht the following information:**
```
NODE_ENV="production"
PORT=3000
```

**Create `server.js` file wiht the following code:**

```js
import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen(port);

	console.log(
		`> Server listening at http://localhost:${port} as ${
			dev ? "development" : process.env.NODE_ENV
		}`
	);
});
```

**Modify the `package.json` file :**
```json
"scripts": {
    "start": "NODE_ENV=production node server.js",
  },
```

**Run the following command:**
```
npm run build
```
