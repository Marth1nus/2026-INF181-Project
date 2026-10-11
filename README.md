# 2026 INF181 Project

This is a project for the module `INF181` for [Belgium Campus Itvercity](https://www.belgiumcampus.ac.za/)

## Project Outputs

The output of this project can be found [here](https://github.com/Marth1nus/2026-INF181-Project/releases/latest) and includes \
a `pdf` file containing the **rationale** segment of the project and \
a `html` file containing the **presentation** segment of the project.

This project is also **deployed** [here](https://marth1nus.github.io/2026-INF181-Project/presentation.html) for viewing.

## Group Members

|    St# | Name        | Surname  |
| -----: | :---------- | :------- |
| 578515 | Marthinus   | Prinsloo |
| 600221 | Willem      | Kruger   |
| 606135 | Travis      | Hanekom  |
| 606091 | Christopher | Visser   |

## How to build.

To generate the output files in [`output/`](./output/). \
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

- [`ChatGPT`](https://chatgpt.com) assisted with files:
  - [`.github/workflows/build.yml`](./.github/workflows/build.yml) to deploy the webpage and releases.
  - [`scripts/build.mjs`](./scripts/build.mjs) to build the output files into [`output/`](./output/).
  - [`scripts/styles.css`](./scripts/styles.css) to style the webpages.
