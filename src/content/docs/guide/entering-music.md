---
title: Entering music
description: Place notes with the mouse or type them with the keyboard, drag notes to a new pitch, erase, and use the palette.
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

### Moving notes

With the **Select** tool, point at a notehead: the pointer becomes a vertical double arrow. Drag up or down to move the note one line or space at a time; it sounds at each step. In a chord, only the note you grabbed moves. One Ctrl+Z undoes the whole drag.

### Erasing

The **eraser** (next to Select, or `X`) turns the pointer into a crosshair. Click a note to erase just that note; in a chord, only the tone you aim at goes. Drag a box to erase everything inside it. The note under the crosshair turns red before you click, and one Ctrl+Z brings back everything erased in one go.

## The palette

The palette is grouped into collapsible categories. Click a heading to open or close it; Partita remembers your choice. Hover any button, or reach it with Tab, to see its name, what it does and its keyboard shortcut.

| Category | Contents |
|---|---|
| **Top row** | **Select** (click to place the caret, drag to select), the **eraser** and the **T** tool for [text boxes](/guide/texts/#text-boxes). **Esc**, a right-click or `N` go back to Select. |
| **Figures** | **Notes \| Rests** switches between notes and their matching rests. **• Dot** makes the figure dotted. **View → Breve and 128th Notes** adds the breve, the 64th and the 128th. |
| **Accidentals** | ♯ ♭ ♮. The key signature's sharps and flats are applied automatically when you place a note. |
| **Ties & slurs** | **Tie** (`T`) joins a note to the next one of the same pitch. **Slur** (`S`) draws a phrase mark over the selected notes. |
| **Articulations** | Staccato, staccatissimo, tenuto, accent, marcato, fermata. The fermata also works on rests. |
| **Dynamics** | ppp … fff, sfz, fp. Printed below the staff. |
| **Indications** | Tempo markings, expressions (*dolce*), techniques (*pizz.*) and rehearsal marks. See [Titles, tempo and text](/guide/texts/#words-in-the-music). |
| **Voice** | **+ Voice** adds an independent line on the same staff, for example divisi strings or two melodies in one hand. Switch voices with its buttons or `Alt+1`…`4`. |

### Placing marks

**Accidentals, articulations and dynamics** can be placed with the mouse: click the mark in the palette (it stays highlighted and follows the pointer), then click each note it goes on. An accidental clicked on a chord changes only that tone. **Esc**, a right-click or clicking the mark again puts it down.

With a selection, a mark goes on every note in the selection at once. From the keyboard, and from the **Notes** menu, marks go on **the note just before the caret**. Choosing a mark a note already has removes it.

**Ties and slurs** work on what you select first: select the notes, then click Tie or Slur.

## With the keyboard

| Key | Action |
|---|---|
| `A`–`G` | Insert a note at the caret. The octave is chosen closest to the previous note, and the key signature is applied. |
| `Shift` + `A`–`G` | Add a note to the chord just before the caret. |
| `R` or `0` | Insert a rest. |
| `1`…`7` | Choose the note value: 64th, 32nd, 16th, eighth, quarter, half, whole. With a selection, change its note values. |
| `8` / `9` | Breve / 128th, when **View → Breve and 128th Notes** is on. |
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

## Beams

Eighths and shorter notes are beamed automatically, following the time signature:

- In x/4 time, notes are grouped by beat. In 4/4, four eighths in the same half of the bar share one beam.
- In 6/8, 9/8 and 12/8 they are grouped by dotted quarter; in 3/8 the whole bar is one group.
- Rests and quarter notes (or longer) break the beam.

Sixteenths and shorter get extra beams, and the stems of a group all point the same way.

## Rests that fill a measure

A rest that fills the whole measure is drawn as a whole rest **centered** in the measure, following standard notation. It counts as "rest for the whole measure" in any time signature. When you place a note or a rest in such a measure, the new figure **replaces** the rest.

With **Multirests** turned on in the toolbar, consecutive measures where every staff rests are drawn as a single measure with the number of measures above it, as in printed parts. This is a view setting only: the measures still exist.

## Measures with errors

A measure that holds more beats than its time signature allows is outlined in red and labelled, for example **⚠ Too many beats: 5 of 4**. The status bar counts them; click that text to jump to the next one.
