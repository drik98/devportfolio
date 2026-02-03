# Dev Portfolio

This repo contains my portfolio showcasing a few of my projects as well as displaying my CV.
It was originally forked from the static html template of [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) but since has evolved into a next.js app which leverages static side generation to allow an easier
maintenance of the website.

To view a live demo, [click here](https://smtz.dev/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/11cf5515-4f97-4965-a552-6532b609d9f3/deploy-status)](https://app.netlify.com/sites/smtz/deploys)

## Development

First, install the dependencies. Then run the development server:

```bash
npm install
npm run dev
```

To switch the active person during development:

```bash
NEXT_PUBLIC_PERSON=anna npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Publishing

Once your changes are pushed to the remote git repository, netlify will take care of deploying it.
You can preview the statically generated content manually using:

```bash
npm run build
npm run start
```

## Multiple People

Person-specific data lives under `content/people/<slug>/` and is wired up in `content/people/index.ts`.

The active person is controlled via the `NEXT_PUBLIC_PERSON` env var (defaults to `hendrik`).
Example:

```bash
NEXT_PUBLIC_PERSON=anna npm run build
```

To add another person:
1. Create `content/people/<slug>/` and copy the JSON files from `content/people/hendrik/` as a starting point.
2. Add assets:
   - Website banner background: `public/people/<slug>/lead-bg.jpg`
   - Website profile image: `public/people/<slug>/profile_picture.jpg`
   - CV profile image: `cv/people/<slug>/profile_picture.jpg`
3. Register the person in `content/people/index.ts` (slug, CV file base, contact form action, and theme colors).

## License

Completely free (MIT)! See [LICENSE.md](LICENSE.md) for more.
