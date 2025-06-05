# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jupyter Book project that creates documentation for QDaria, focusing on quantum computing research across three main areas:
- Quantum Reservoir Computing (QRC)
- Topological Quantum Computing (TQC)  
- Experimental Quantum Mechanics (XQM)

## Build Commands

```bash
# Build the book
jupyter-book build .

# Clean build artifacts
jupyter-book clean .

# Deploy to GitHub Pages
ghp-import -n -p -f _build/html
```

## Project Structure

The content is organized under `/content/` with the following structure:
- `qdaria-core/` - Core QDaria documentation and business materials
- `research-papers/` - Academic research papers organized by topic:
  - `qrc/` - Quantum Reservoir Computing papers
  - `tqc/` - Topological Quantum Computing papers
  - `xqm/` - Experimental Quantum Mechanics papers

## Key Configuration

- **_config.yml** - Main Jupyter Book configuration (theme, execution settings, Sphinx options)
- **_toc.yml** - Table of contents structure defining book organization
- **references.bib** - Bibliography for citations
- **_static/** - Static assets including custom CSS and logos

## Development Notes

- The book uses the Sphinx RTD theme with custom styling
- Jupyter notebooks can be executed during build
- GitHub integration is configured for version control
- Thebe is enabled for interactive code execution in the browser

## Interactive Visualizations

This project uses **Plotly.js** for interactive data visualizations in the business plan and other documents:

- **Why Plotly.js**: Provides professional, interactive charts suitable for investor presentations with features like hover tooltips, zoom/pan, and export capabilities
- **Implementation**: Charts are embedded directly in markdown files using `<script>` tags with the Plotly CDN
- **Configuration**: The `_config.yml` has been updated to support raw HTML/JS content with MyST extensions
- **Chart Types Used**:
  - Bar charts for competitor funding comparisons
  - Line/area charts for financial projections
  - Timeline/Gantt charts for execution roadmaps
  - Organizational charts for company structure

### Adding New Plotly Charts

To add a new Plotly.js visualization:
1. Create a div with a unique ID: `<div id="myChart"></div>`
2. Include the Plotly CDN: `<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>`
3. Add your chart script wrapped in DOMContentLoaded for proper loading
4. Use responsive design settings for mobile compatibility