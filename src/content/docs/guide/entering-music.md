---
title: Entering music
description: Place notes with the mouse or type them with the keyboard, and use the palette.
sidebar:
  order: 2
---

You can enter music with the mouse, with the keyboard, or mixing both.

## With the mouse

The **palette** on the left holds the tools for entering music.

1. Click a figure in the palette. The pointer turns into that figure.
2. Move over a staff. The figure snaps to the nearest line or space and shows the pitch name (for example `F♯4`). A dashed line marks where it will be inserted.
3. Click to place it. Notes you place one after another undo together with a single Ctrl+Z.
4. Click **on an existing note** (the label shows `+`) to add the pitch to its chord. Clicking on a rest turns it into a note.

## The palette

The palette is grouped into collapsible categories. Click a heading to open or close it; Da Capo remembers your choice. Hover any button, or reach it with Tab, to see its name, what it does and its keyboard shortcut.

Marks (accidentals, ties, articulations, dynamics) apply to **the note just before the caret**, or to **every note in the selection**. Clicking the same mark again removes it.

| Category | Contents |
|---|---|
| **↖ Select** | Back to normal editing: click to place the caret, drag to select. **Esc**, a right-click or `N` leave entry mode. |
| **Figures** | **Notes \| Rests** switches between notes and their matching rests. **• Dot** makes the figure dotted. |
| **Accidentals** | ♯ ♭ ♮. The key signature's sharps and flats are applied automatically when you place a note. |
| **Ties & slurs** | **Tie** (`T`) joins a note to the next one of the same pitch. **Slur** (`S`) draws a phrase mark over the selected notes. |
| **Articulations** | Staccato, staccatissimo, tenuto, accent, marcato, fermata. The fermata also works on rests. |
| **Dynamics** | ppp … fff, sfz, fp. Printed below the staff. |
| **Voice** | **+ Voice** adds an independent line on the same staff, for example divisi strings or two melodies in one hand. Switch voices with its buttons or `Alt+1`…`4`. |

## With the keyboard

| Key | Action |
|---|---|
| `A`–`G` | Insert a note at the caret. The octave is chosen closest to the previous note, and the key signature is applied. |
| `Shift` + `A`–`G` | Add a note to the chord just before the caret. |
| `R` or `0` | Insert a rest. |
| `1`…`7` | Choose the note value: 64th, 32nd, 16th, eighth, quarter, half, whole. With a selection, change its note values. |
| `.` | Toggle a dot. |
| `+` / `-` | Raise or lower the accidental of the previous note (or the selection). |
| `Alt` + `↑` / `↓` | Move the previous note (or the selection) up or down one step. |
| `Ctrl` + `Alt` + `↑` / `↓` | Move it up or down an octave. |
| `Alt` + `1`…`4` | Switch voice. Each voice has its own color. |

## Score structure

The top toolbar sets the structure of the score:

- **Clef**: clef of the staff containing the caret.
- **Key** and **Time**: apply from the caret's measure until the next change. For Time, type something like `3/4` and press Enter.
- **+ Measure / − Measure**: insert after, or delete, the current measure.
- **+ Staff / − Staff**: add a staff at the bottom, or delete the current staff.

## Rests that fill a measure

A rest that fills the whole measure is drawn as a whole rest **centered** in the measure, following standard notation. It counts as "rest for the whole measure" in any time signature. When you place a note or a rest in such a measure, the new figure **replaces** the rest.

With **Multirests** turned on in the toolbar, consecutive measures where every staff rests are drawn as a single measure with the number of measures above it, as in printed parts. This is a view setting only: the measures still exist.

## Measures with errors

A measure that holds more beats than its time signature allows is outlined in red and labelled, for example **⚠ Too many beats: 5 of 4**. The status bar counts them; click that text to jump to the next one.
