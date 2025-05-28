# 🔁 Mock Redirect Tool

A lightweight web utility built with **Next.js** that allows you to instantly redirect to any URL using a `?callback=` query parameter.

Perfect for testing redirect flows, OAuth callback URLs, or custom deep linking.

## Live Demo

👉 Try it now:  
**[https://mock-redirect.vercel.app](https://mock-redirect.vercel.app)**

Example usage:

https://mock-redirect.vercel.app?callback=https://example.com

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
```

Then visit: http://localhost:3000

## Project Structure

```
mock-redirect/
├── public/                # Static assets
│   └── favicon.ico
├── src/
│   └── app/
│       └── page.tsx       # Main redirect logic and UI
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── README.md
```

## Technologies Used

- Next.js — App router support
- React
- Tailwind CSS
- TypeScript
- Vercel — Hosting

## License

Licensed under the MIT License.
Feel free to use, fork, and adapt this tool
