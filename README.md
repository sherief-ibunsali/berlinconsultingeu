# Installation

```bash
npx create-next-app@latest berlin-consultingeu --use-pnpm
pnpm install -D tailwindcss postcss autoprefixer
pnpx tailwindcss init -p
```
### Database PSQL:
```bash

psql postgres
postgres=# CREATE DATABASE berlindb;
CREATE DATABASE
postgres=# CREATE USER berlinuser WITH PASSWORD 'berlinpassword';
CREATE ROLE
postgres=# GRANT ALL PRIVILEGES ON DATABASE berlindb TO berlinuser;
GRANT
# Use berlindb DB
\q

psql -U berlinuser -d berlindb

CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,               -- Auto-incrementing ID
    title VARCHAR(255) NOT NULL,         -- Title of the blog post
    content TEXT NOT NULL,               -- Content of the blog post (can be HTML or plain text)
    meta_description VARCHAR(255),       -- Meta description for SEO
    meta_keywords VARCHAR(255),          -- Meta keywords for SEO
    image_url VARCHAR(255),              -- URL to the blog post image
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp when the post was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp for last update
);

\dt

berlindb=> INSERT INTO blog_posts (title, content, meta_description, meta_keywords, image_url)
VALUES
(
  'Exploring the Best Hiking Trails in Europe',
  '<p>Europe is home to some of the most scenic hiking trails in the world. From the Alps to the Pyrenees, here are the top trails every adventurer should try.</p>',
  'A guide to the best hiking trails in Europe for outdoor enthusiasts.',
  'hiking, Europe, best trails, outdoor adventure',
  '/uploads/europe-hiking.jpg'
);
INSERT 0 1
berlindb=> INSERT INTO blog_posts (title, content, meta_description, meta_keywords, image_url)
VALUES
(
  'The Ultimate Guide to Digital Nomad Visas in 2024',
  '<p>As remote work becomes more common, countries are offering digital nomad visas to attract talent. Here’s everything you need to know about applying for a visa in 2024.</p>',
  'An in-depth guide on digital nomad visas for remote workers in 2024.',
  'digital nomad, visas, remote work, travel, 2024',
  '/uploads/digital-nomad.jpg'
);
```



-------------------

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
