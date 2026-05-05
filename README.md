# Bocano Architecture Portfolio

Modern architecture portfolio — inspired by the Emarat template style.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Customise Content

**Everything is in `src/data.js`:**
- `SITE.name` → your studio name in nav
- `SITE.hero` → headline, subtitle, hero photo path
- `SITE.stats` → the 4 stat cards (numbers + descriptions)
- `SITE.about` → studio photo, bio text
- `SITE.contact` → phone, email, city, social links
- `PROJECTS` → your project list
- `POSTS` → blog posts

## Add Your Photos

1. Put images in `/public/images/`
2. In `data.js` set the path:

```js
// Hero photo
hero: { photo: '/images/hero.jpg', ... }

// Project photos
{ id: 1, imageSrc: '/images/project-1.jpg', ... }

// Studio photo
about: { photo: '/images/studio.jpg', ... }
```

## Deploy (free)

```bash
npm run build     # creates /dist
npx vercel        # deploy to Vercel
```
