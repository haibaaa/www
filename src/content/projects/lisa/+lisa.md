---
published: true
name: Lisa
description: Lightweight remote configuration and feature flag service for runtime application management.
thumbnail: thumbnail.png
images: [thumbnail.png]
github: https://github.com/haibaaa/lisa
date: 2025-06-15
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

Lisa is a lightweight remote configuration and feature flag service that enables applications to change behavior at runtime without redeployment.

## features

- **Project-scoped namespaces** with key-value configuration entries
- **Public read-only APIs** for client applications
- **Private write APIs** for operators with strict API key access control
- **CLI workflow (Mona)** for YAML-based configuration synchronization

## implementation

Built with Python and Flask, Lisa exposes a clean REST API. The companion CLI tool (Mona) allows operators to sync YAML configuration files with the remote service, making configuration management feel like working with local files.

## tech stack

- **Python** — backend runtime
- **Flask** — REST API framework
- **REST APIs** — public read / private write architecture
