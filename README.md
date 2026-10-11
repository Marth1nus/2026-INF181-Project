# 2026 INF181 Project

## Group Members

|    St# | Name      | Surname  |
| -----: | :-------- | :------- |
| 578515 | Marthinus | Prinsloo |
| 600221 | Willem    | Kruger   |
| 606135 | Travis    | Hanekom  |
|        |           |          |

## How to build.

To generate the output files in [`dist/`](./dist/). \
Run this command in the project directory:

```sh
npm ci
npx playwright install --with-deps chromium
npm run build
```

## File Layout Explanation

These are the core content of the project. All other files are related to deployment automation and styling.

- [`source/presentation.md`](./source/presentation.md) contains the content presented to the audience. \
  It gets converted to an `html` web-page and deployed to GitHub Pages.
- [`source/rationale.md`](./source/rationale.md) contains the content submitted to Moodle. \
  This includes the rationale of the presentation content. \
  It gets converted to a `pdf` file and output as a GitHub release.

## AI use

- `ChatGPT` assisted with files:
  - [`.github/workflows/build.yml`](./.github/workflows/build.yml) to deploy the webpage and releases.
  - [`scripts/build.mjs`](./scripts/build.mjs) to build the output files into [`dist/`](./dist/).
  - [`scripts/styles.css`](./scripts/styles.css) to style the webpages.
