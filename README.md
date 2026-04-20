# The Rose Foundation — website

Modern remake of [rosefoundationtt.org](https://rosefoundationtt.org/), built with [Next.js](https://nextjs.org/) 16 and [Tailwind CSS](https://tailwindcss.com/) 4.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Push to GitHub

From this folder, authenticate the GitHub CLI (one-time), then create the remote repository and push:

```bash
gh auth login
git branch -M main
gh repo create the-rose-foundation-tt --public --description "The Rose Foundation — modern website" --source=. --remote=origin --push
```

Use another repo name if you prefer. If the repo already exists on GitHub:

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

## Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com/).
2. **Add New… → Project** and import the GitHub repository.
3. Framework preset: **Next.js**. Root directory: repository root (this folder when it is the repo root).
4. Deploy. Vercel will run `npm run build` automatically.

Alternatively, with the Vercel CLI: `npx vercel` (follow the login prompt), then `npx vercel --prod` for production.

## Content note

Copy and structure are aligned with the public pages of the original site. Project detail pages include good-faith programme summaries where the legacy site listed names only.
