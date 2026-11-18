---
title: The basics
description: Documents, tabs, menus, views, zoom, printing, language, crash protection and updates.
sidebar:
  order: 1
---

Partita is designed to feel like a word processor whose "text" is music. A blinking caret marks where the next note goes. You can select with Shift or the mouse, cut, copy and paste, and undo with Ctrl+Z.

## Documents

- **New** (Ctrl+N) opens a new tab with an empty 8-measure score.
- **Open** (Ctrl+O) loads a `.partita` file (or a `.dacapo` file saved before the project was renamed). It also opens MusicXML files.
- **Import MusicXML…** (File menu) opens a score from another notation program — `.musicxml`, `.xml` or compressed `.mxl` — as a new, unsaved score. What Partita cannot show yet is simplified, and a message lists it: tuplets keep their written values, grace notes are left out, voices beyond four per staff are dropped, and each staff keeps the clef it starts with.
- **Export MusicXML…** (File menu) saves the score for Finale, Sibelius, Dorico, MuseScore and others, with each staff's name, sound, transposition and grouping.
- **Save** (Ctrl+S) saves the document. **Save As** is Ctrl+Shift+S.
- **Close tab** is Ctrl+W, and **next/previous tab** is Ctrl+Tab and Ctrl+Shift+Tab.
- Click the **title** or the **composer** on the page to type them (see [Titles, tempo and text](/guide/texts/)).

The tab of a document with unsaved changes shows a dot (●). Closing it asks whether to save.

## Menus

| Menu | What it has |
|---|---|
| **File** | New, open, save, import and export, print. |
| **Edit** | Undo, redo, cut, copy, paste, select all. |
| **View** | Layout, zoom, paper, theme and language. |
| **Score** | Measures, staves and their groups; titles, tempo markings, rehearsal marks, text boxes and text styles. |
| **Notes** | Ties, slurs, lyrics, expressions and techniques; accidentals, articulations and dynamics. |
| **Play** | Play, pause and stop. |
| **Help** | Shortcuts, what's new, updates and credits. |

Items marked **›** open a submenu, and where an item has a current setting (the theme, the zoom) it shows on the right. Rest the pointer on an item for a moment to see what it does.

Press **Alt** to move into the menu bar, or **Alt + first letter** (Alt+F, Alt+E, Alt+V…) to open a menu. Then use the arrows (**→** opens a submenu, **←** closes it), Enter and Esc.

**Help** contains:

- **Keyboard Shortcuts** (F1), the full list of shortcuts.
- **What's New**, which opens the changelog.
- **Report a Problem…**, **Source Code on GitHub** and **Support Partita…**, which open in your browser.
- **Check for Updates…** and **Automatic Updates** (see [Updates](#updates)).
- **Credits and Licenses** and **About Partita**. They show the version, the components Partita downloaded (such as FluidR3 GM) and the projects it is built on. **Copy version info** puts a short summary on the clipboard to paste into a bug report.

## Views

Choose how the score is laid out in **View**:

| View | What you see |
|---|---|
| **Page (as printed)** | Default. Real sheets of paper (A4 or Letter) with margins. The titles sit on page 1, with the header, footer and page numbers you choose. What you see is what prints. |
| **Wrap to Window** | The music fills the window width and wraps to new lines, with no page breaks. Handy on small screens. |
| **Continuous (one line)** | The whole piece on one endless line that grows to the right. The view scrolls sideways to follow the caret. |

All views edit the same way.

### Moving around and zoom

| Mouse / keys | Action |
|---|---|
| Wheel | Scroll up and down |
| **Ctrl** + wheel | Scroll sideways |
| **Alt** + wheel | Zoom in and out, keeping the point under the pointer in place |
| **Middle button** + drag | Pan the score in any direction |
| Ctrl + = / Ctrl + − / Ctrl + 0 | Zoom in / out / back to 100% |

**View → Zoom → Fit Page Width** sizes the page to the window. The zoom is shown at the right of the status bar; click it to go back to 100%.

### Printing

**Print** (Ctrl+P) prints the page view in black on white, one sheet per page. Editing aids such as the caret, the selection and the error marks are left out. From another view, Partita switches to page view for the print and back afterwards.

### Theme

**View → Theme → System** (default) follows your computer's light or dark setting. **Light** or **Dark** fix it for Partita only.

### Language

Partita speaks English and Spanish. **View → Language → System** (default) follows your computer's language; **English** or **Español** fix it for Partita only. The window reloads in the new language, and open scores and their undo history stay as they are.

## Crash protection

Every change is written to a recovery journal on disk within half a second. If the app or the computer shuts down unexpectedly, the next start shows a banner listing the recovered documents, with **Restore** and **Discard** buttons. Restoring brings back the work, including the undo history.

The status bar shows **● Recovery on** when protection is active.

## Updates

Partita looks for a new version a few seconds after it starts, at most once a day, and tells you what is new:

- **Download and Install** downloads it in the background while you keep working.
- **Later** asks again the next day, and **Skip This Version** stays quiet until a newer one appears.

When the download is ready and verified, **Restart Now** installs it and opens the new version. Unsaved changes are offered back when Partita starts again, as after a crash. **Help → Check for Updates…** checks right away; turn off **Help → Automatic Updates** if you prefer Partita never to contact GitHub on its own.
