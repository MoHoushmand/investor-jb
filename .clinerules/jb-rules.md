# JupyterBook Development Rules and Best Practices

This document outlines the rules and best practices to follow when developing and maintaining this JupyterBook project.

## 1. File and Directory Structure
- **Naming Conventions:**
    - Use lowercase, hyphen-separated names for files and directories (e.g., `my-chapter.md`, `section-one/`).
    - Notebook files should end with `.ipynb`. Markdown files with `.md`.
- **Content Organization:**
    - Group related content into subdirectories within the `content/` directory.
    - Store images in a dedicated `_static/images/` directory (or similar, ensure consistency) and reference them appropriately.

## 2. Table of Contents (`_toc.yml`)
- **Structure:** Maintain a clear and logical hierarchy. Use `part:` to define book parts and `chapters:` (or `sections:`) to list files/globs within each part/chapter.
- **Formatting:** Follow YAML syntax strictly. Use `file:` for individual pages and `glob:` for including multiple files from a directory.
- **Numbering:** JupyterBook will auto-number based on `_toc.yml` structure. You can customize numbering if needed via `_config.yml`.

## 3. Content Authoring (Markdown & MyST)
- **Markdown Flavor:** Primarily use MyST (Markedly Structured Text) Markdown for enhanced features.
- **Headings:** Use appropriate heading levels (`#`, `##`, `###`, etc.) to structure content logically.
- **Directives and Roles:** Utilize MyST directives (e.g., ````{note}``, ````{warning}``, ````{figure}``) and roles for rich content.
- **Citations:** Manage citations using a `.bib` file (e.g., `references.bib`) and reference them using `{[cite]}key` syntax.
- **Cross-Referencing:** Use MyST roles for cross-referencing sections, figures, and equations.

## 4. Notebooks (`.ipynb`)
- **Clarity:** Ensure notebooks are well-commented and easy to follow.
- **Cell Output:** Clear all cell outputs before committing, unless the output is essential for understanding the content without re-running (e.g., plots for a static view).
    - Consider using tools like `nbstripout`.
- **Execution:** Ensure all notebooks run from top to bottom without errors.
- **Kernel:** Specify the kernel used if it's not the default.
- **Conciseness:** Keep notebooks focused on a specific topic or analysis. Break down long notebooks.

## 5. Dependencies and Environment
- **Environment Activation (MUST DO):** **It is CRITICAL to ensure your project-specific micromamba environment (defined in `environment.yml`) is activated BEFORE starting any development work or building the book. Use commands like `micromamba activate ./env` (if the environment is in a local `./env` folder) or `micromamba activate <env_name>` (if the environment is named). Working outside the correct activated environment can lead to errors, inconsistencies, and issues with dependencies.**
- **`environment.yml` (Conda/Micromamba):** Keep this file updated with all necessary packages. Create/update the environment using `micromamba env create -f environment.yml -p ./env` (for a local env) or `micromamba env update -f environment.yml -n <env_name>`.
- **`requirements.txt` (Pip):** If using Pip (can be used alongside Conda/Micromamba for packages not on Conda channels), keep this file updated.
- **Specify versions:** Pin package versions to ensure reproducibility.

## 6. Configuration (`_config.yml`)
- **Metadata:** Ensure project title, author, and other metadata are correctly set.
- **Extensions:** List and configure any Sphinx extensions used.
- **HTML Theme:** Configure the theme and its options as needed.

## 7. Building and Testing
- **Local Builds:** Regularly build the book locally (`jupyter-book build .` or, if using a specific micromamba environment: `micromamba run -n <your_env_name> jupyter-book build .` **Alternatively, if the environment is activated, `jupyter-book build .` should suffice.**).
- **Routine Check:** **After any significant changes, or at regular intervals, build the book and open `_build/html/index.html` in a browser to visually inspect the output and ensure everything is rendering and working as expected.**
- **Link Checking:** Use `jupyter-book build . --builder linkcheck` (or with `micromamba run ...` or after activation) to find broken links.
- **Clean Builds:** Occasionally perform a clean build (`jupyter-book clean . && jupyter-book build .`)

## 8. Version Control (Git)
- **`.gitignore`:** Ensure build artifacts (`_build/`), cache files (`.jupyter_cache/`), environment directories (e.g., `env/` if local), and other non-essential files are ignored. (Consider adding common Python/Jupyter ignores like `__pycache__/`, `*.pyc`, `.ipynb_checkpoints/`).
- **Commit Messages:** Write clear and descriptive commit messages.
- **Branching:** Follow a consistent branching strategy (e.g., feature branches).

## 9. Accessibility
- Provide alternative text for images.
- Ensure good color contrast.
- Use semantic HTML elements where possible (via MyST directives).

## 10. Custom CSS/JS
- Store custom CSS in `_static/custom.css` (or a similar named file) and ensure it's loaded via `_config.yml`.
- Minimize custom JavaScript unless necessary.
