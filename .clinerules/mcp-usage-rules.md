# MCP Usage Rules for investor-jb

This document outlines guidelines for using Model Context Protocol (MCP) servers with the `investor-jb` project.

## 1. General Principles
- Ensure any MCP server you intend to use is running and accessible.
- Refer to the specific MCP server's documentation for its available tools, resources, and input schemas.
- Be mindful of API rate limits or quotas if the MCP server interacts with external services.

## 2. Connected MCP Servers & Usage Notes

### 2.1. Local Git Server (`github.com/modelcontextprotocol/servers/tree/main/src/git`)
- **Purpose:** Provides tools for interacting with the local Git repository of this project.
- **Configuration:**
    - **IMPORTANT:** This server must be configured to point to the `investor-jb` project directory.
    - Example start command (if run manually): `mcp-server-git --repository /Users/mo1/Documents/investor-jb`
    - (Note: The actual method of starting and configuring this server needs to be identified and updated by the user if it's not already correct.)
- **Common Tools:** `git_status`, `git_add`, `git_commit`, `git_diff_unstaged`, `git_log`, `git_create_branch`, `git_checkout`.

### 2.2. GitHub API Server (`github.com/modelcontextprotocol/servers/tree/main/src/github`)
- **Purpose:** Interacts with remote GitHub repositories (e.g., creating issues, PRs, managing files on GitHub).
- **Usage:** Useful if/when this project is hosted on GitHub.
- **Authentication:** Requires proper GitHub authentication (usually via a token that the server is configured with).

### 2.3. Task Management Servers
- **Servers:**
    - `github.com/pashpashpash/mcp-taskmanager`
    - `github.com/NightTrek/Software-planning-mcp`
- **Current Project Approach:** For `investor-jb`, we are initially using a simple `TODO.md` file.
- **Future Use:** If project complexity increases, one of these servers can be adopted.
    - `pashpashpash/mcp-taskmanager`: Good for structured, approval-gated workflows.
    - `NightTrek/Software-planning-mcp`: Good for flexible, continuous planning around a central goal.
- **Decision:** If/when adopting one, document the choice and specific usage conventions here.

### 2.4. Other Potential MCP Servers (from local `Cline/MCP/` directory)
- The `/Users/mo1/Documents/Cline/MCP/` directory contains source code for other potentially useful MCP servers (e.g., Perplexity, WolframAlpha, Ollama).
- **To Use:** These servers need to be run from their respective source directories.
- **Documentation:** If a server from this collection is regularly used for `investor-jb`, add its details (start command, purpose, key tools) to this section.

## 3. Adding New MCP Servers
- If a new MCP server is introduced for this project:
    - Document its purpose, how to run/connect to it, and key tools/resources.
    - Add a section for it in this file.

## 4. Troubleshooting
- If an MCP tool fails, check:
    - Is the MCP server running?
    - Are the arguments to the tool correct based on its schema?
    - Are there any error messages from the MCP server itself (if visible in a terminal)?
    - Does the server require specific authentication or configuration that might be missing or incorrect?
