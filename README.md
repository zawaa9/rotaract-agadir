# Rotaract Agadir Atlantique Website

this is the website for the Rotaract Agadir Atlantique club. It is based on [Forkit! Community website](https://github.com/Fork-It-Community/forkit.community).

## Installation

1. Duplicate the `.env.example` file to a new `.env` file, and update the environment variables

```bash
cp .env.example .env
```

2. Install dependencies

```bash
pnpm install
```

3. Development

```bash
# Run the development server
pnpm dev
```

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
