# Commit Quest

Commit Quest is a beginner-friendly, browser-based learning experience for Git commits. Learners guide Maya through a short project story, entering Git commands in a terminal-style interface and receiving immediate feedback.

The interface is in German and is designed for people without a software-development background. It introduces how Git helps a team keep a transparent, recoverable history of shared work.

## What learners practise

- Checking a repository's state with `git status`
- Starting version control with `git init`
- Selecting changes with `git add .`
- Saving a documented milestone with `git commit -m "..."`
- Reading the project history with `git log`
- Creating and switching branches

Hints reveal the required command when needed. The help dialog explains why each command matters and can insert it directly into the terminal input.

## Run locally

No build step or dependencies are required. Open `index.html` in a current web browser.

## Technical overview

The project is a static application:

- `index.html` — application structure and accessible controls
- `styles.css` — terminal-inspired dark and light themes
- `script.js` — lesson steps, command validation, keyboard interaction, and theme persistence

## Leistungsziel evaluation

This project is best aligned with **Leistungsziel Betrieb a1.7 (K3)** from the Bildungsplan:

> Sie definieren die Eigenschaften für die Verwaltung der einzelnen Projektziele und -anforderungen (z. B. Versionierung, Identifikator zur Referenzierbarkeit, Beschreibung, Autor, Quelle, Kritikalität, Priorität).

Commit Quest demonstrates **Versionierung** directly through Git. Learners create documented commits, review the history, and work with branches. They see how a commit creates a traceable project milestone with a description, author, date, unique identifier, and branch context. This makes the management and traceability of project changes approachable for beginners.
