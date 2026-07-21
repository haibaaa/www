---
published: true
order: 3
name: bombsquad
description: Minesweeper solver with TUI and probabilistic solving algorithms.
github: https://github.com/haibaaa/bombsquad
date: 2025-11-17
---

BombSquad is a Python-based Minesweeper solver implementing game logic, a terminal user interface, and probabilistic solving algorithms to tackle Minesweeper puzzles.

## features

- **TUI Interface** — interactive terminal-based Minesweeper experience built with Rich, supporting cursor navigation and real-time board updates
- **Solver Engine** — applies constraint satisfaction and probabilistic deduction to reveal safe cells and flag mines
- **Modular Design** — separates game logic, interface, and solver components for easy extension and testing

## implementation

The project is structured into three core modules: game logic (`game.py`), terminal UI (`tui.py`), and the solver engine. The solver includes multiple strategies — from naive approaches to constraint satisfaction problems (CSP) with cell grouping and probabilistic guessing. Benchmarking tools measure solver performance across different board configurations.

## tech stack

- **Python** — primary language
- **Rich** — terminal UI framework
- **Constraint Satisfaction** — solver algorithm core
