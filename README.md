# AI Lab Docs

Welcome to the documentation and resource hub for the AI Lab!

This repository powers the AI Lab Docs website, which curates, organizes, and shares high-quality resources, guides, and best practices related to artificial intelligence, agentic systems, and modern AI workflows. Our goal is to support faculty, students, and researchers in navigating the evolving AI landscape with practical materials, research overviews, and coding best practices.

## What You'll Find
- **Guides & Tutorials:** Accessible introductions to AI concepts, frameworks, and tools.
- **Research Overviews:** Summaries and comparisons of agent frameworks, LLM-powered agents, and new developments in AI.
- **Best Practices:** Coding workflows, pair programming with AI, and reproducible research tips.
- **Teaching Materials:** Syllabi, assignments, and classroom resources for integrating AI into courses.
- **Community Updates:** Blog posts, news, and events relevant to the academic AI community.

Explore the `docs/` directory for detailed content and resources!

## Getting Started
This site is built with [Docusaurus](https://docusaurus.io/) for easy contribution and navigation.

### Installation
```bash
yarn
```

### Local Development
```bash
yarn start
```

This will start a local server at http://localhost:3000/ where you can view the docs and see your changes live.

## Contributing
We welcome contributions! Please see the "This Project" section in the docs for information on how to get involved, suggest changes, or add new content.

---

_Questions or suggestions? Open an issue or pull request, or reach out to the AI Lab team._
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
>>>>>>> local-main
