---
published: true
name: 0Trace
description: NIST-compliant bootable ISO for secure disk wiping and tamper-resistant certificate generation.
thumbnail: thumbnail.png
images: [thumbnail.png]
github: https://github.com/spuckhafte/0trace
date: 2025-07-01
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

0Trace is a bootable ISO built for secure disk wiping compliant with NIST SP 800-88 Purge standards. Built for the SIH Hackathon.

## features

- **NVMe Sanitize** and **ATA Secure Erase** support for modern drives
- **AES-256 overwrite** fallback for legacy hardware
- Tamper-resistant wipe certificates in JSON and PDF with SHA-256 verification
- Fully reproducible system image built with Nix for auditability

## implementation

The backend logic is written in Go for disk detection and wipe orchestration. Bootstrapping and system configuration are handled with Bash scripts. The entire system is packaged as a reproducible Nix derivation.

## tech stack

- **Go** — disk detection and wipe orchestration backend
- **Bash** — system bootstrapping and configuration scripts
- **Nix** — fully reproducible system packaging
