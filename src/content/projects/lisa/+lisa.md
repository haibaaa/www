---
published: true
order: 2
name: lisa
description: Lightweight remote configuration platform with CLI tooling and demo app for runtime application management.
github: https://github.com/haibaaa/lisa
date: 2025-06-15
---

Lisa is a lightweight remote configuration and feature flag service that enables applications to change behavior at runtime without redeployment. The ecosystem includes the core API service, a CLI companion tool, and a demo application.

## features

- **Project-scoped namespaces** with key-value configuration entries
- **Public read-only APIs** for client applications
- **Private write APIs** for operators with strict API key access control
- **CLI workflow (Mona)** for YAML/TOML-based configuration synchronization
- **Demo app** showcasing real-time config updates in a React application

## mona cli

Mona is the command-line interface for managing Lisa projects. It initializes configuration templates and synchronizes local config files with the remote service.

```bash
mona init    # Create config template
mona sync    # Sync local values to Lisa
```

Built with Click, Mona loads environment variables via python-dotenv and works seamlessly with `.env` files.

## lisa-demo

A minimal React (Vite) application demonstrating Lisa in action. The app fetches remote configuration from Lisa's public API, applies theme settings to the page background, and toggles UI elements using feature flags — all without redeployment.

Changes to `lisa.toml` are synced to Lisa and immediately reflected in the running application.

## implementation

The backend is built with Python and Flask, exposing a clean REST API with project-scoped namespaces. Operators use API keys for write access while clients read configuration via public endpoints. Mona handles the sync workflow between local config files and the remote service.

## tech stack

- **Python** — backend runtime and CLI tooling
- **Flask** — REST API framework
- **TypeScript** — demo application
- **React** — demo UI framework
- **Vite** — demo build tool
- **Click** — CLI framework for Mona
- **REST APIs** — public read / private write architecture
