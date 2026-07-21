---
published: true
order: 1
name: 0trace
description: NIST-compliant bootable ISO for secure disk wiping and tamper-resistant certificate generation.
github: https://github.com/spuckhafte/0trace
date: 2025-07-01
---

0Trace is a bootable ISO built for secure disk wiping compliant with NIST SP 800-88 Purge standards. Built for the SIH Hackathon.

## features

- **NVMe Sanitize** (Crypto/Purge) and **ATA Secure Erase** support for modern drives
- **AES-256 overwrite** fallback for legacy hardware using RAM-stored keys
- Tamper-resistant wipe certificates in JSON and PDF with SHA-256 verification
- QR code embedded in certificates for third-party verification
- Fully reproducible system image built with Nix for auditability

## process flow

1. **Boot** — User inserts USB and boots into a minimal Linux environment
2. **Disk Detection** — Go-based TUI scans and lists connected drives (HDD, SSD, NVMe)
3. **Wipe Execution** — Native sanitize/erase commands where supported, AES-256 overwrite otherwise
4. **Certificate Generation** — Tamper-proof JSON + PDF certificates with device metadata, wipe method, timestamps, and SHA-256 hash
5. **Verification** — Independent parties verify authenticity using the project's public key

## implementation

The backend logic is written in Go for disk detection, wipe orchestration, and certificate generation. Bootstrapping and system configuration are handled with Bash scripts. Disk operations use native NVMe sanitize commands or hdparm for ATA Secure Erase, with a fallback to AES-256 overwrite where hardware support is lacking.

## tech stack

- **Go** — TUI, disk orchestration, and certificate generation
- **Bash** — disk operations and AES key management
- **Nix** — fully reproducible ISO image build
- **qrcode** — embedded QR codes in wipe certificates
