# Git Conventions for investor-jb

This document outlines the Git conventions to follow for this project.

## 1. Branching Strategy

- **`main` branch:** This branch should always reflect a stable, deployable state of the book. Direct commits to `main` are discouraged.
- **Feature branches:** All new work (e.g., writing a new chapter, fixing a bug, experimenting with a new feature) should be done in a feature branch.
    - Naming: Use a descriptive name, prefixed with a type if desired (e.g., `feat/`, `fix/`, `docs/`, `chore/`).
        - Example: `feat/add-chapter-on-risk-analysis`
        - Example: `fix/broken-link-in-intro`
        - Example: `docs/update-readme`
- **Pull Requests (PRs):** Once work on a feature branch is complete, open a Pull Request to merge it into `main`.
    - PRs should be reviewed if possible.
    - Ensure any automated checks (if set up later) pass before merging.

## 2. Commit Messages

Follow a structured commit message format to maintain clarity and consistency in the project history. We will adopt a simplified version of the [Conventional Commits](https://www.conventionalcommits.org/) specification.

**Format:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: A new feature or new content (e.g., adding a new chapter, a new section).
- `fix`: A bug fix (e.g., correcting a typo, fixing a broken link, resolving a build error).
- `docs`: Documentation-only changes (e.g., updates to README, `_toc.yml`, `_config.yml`, rule files).
- `style`: Changes that do not affect the meaning of the content or code (e.g., white-space, formatting, missing semi-colons in code cells if applicable).
- `refactor`: A code change that neither fixes a bug nor adds a feature (e.g., restructuring a notebook for clarity).
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies (e.g., `environment.yml`, `requirements.txt`).
- `ci`: Changes to CI configuration files and scripts.
- `chore`: Other changes that don't modify src or test files (e.g., updating `.gitignore`).

**Scope (Optional):**
The scope provides additional contextual information and is contained within parentheses, e.g., `feat(chapter3): ...`. It could be a chapter name, a specific section, or a module.

**Description:**
- Concise summary of the change.
- Use the imperative, present tense: "add" not "added" nor "adds".
- Don't capitalize the first letter.
- No dot (.) at the end.

**Body (Optional):**
- Use the imperative, present tense.
- Include motivation for the change and contrast this with previous behavior.

**Footer (Optional):**
- Information about Breaking Changes (start with `BREAKING CHANGE:`).
- Reference issue numbers if applicable (e.g., `Closes #123`).

**Examples:**

```
feat: add initial draft of chapter on market sentiment
```

```
fix: correct broken link in introduction section
```

```
docs: update _toc.yml to include new appendix
```

```
refactor(notebooks): simplify data loading in analysis notebook

The previous data loading logic was complex and hard to follow. This change
streamlines the process and adds more comments for clarity.
```

```
feat(risk-models): implement Value at Risk calculation

BREAKING CHANGE: The `calculate_risk` function now requires an additional
parameter `confidence_level`.
Closes #42
```

## 3. General Practices
- Commit frequently with small, logical changes.
- Write clear and descriptive commit messages.
- Pull the latest changes from `main` into your feature branch before opening a PR to minimize merge conflicts.
- Delete feature branches after they have been merged into `main`.
