---
title: Entering music
description: Place notes with the mouse or type them with the keyboard, drag notes to a new pitch, erase, and use the bars around the score.
sidebar:
  order: 2
---

You can enter music with the mouse, with the keyboard, or mixing both.

## With the mouse

The bars **left of the score** hold what you write with; the ones **right of it**, what goes on the notes.

1. Click a figure (or a rest, beside it) in the **Figures** bar. The pointer turns into that figure.
2. Move over a staff. The figure snaps to the nearest line or space and shows the pitch name (for example `F♯4`). A dashed line marks where it will be inserted.
3. Click to place it. Notes you place one after another undo together with a single Ctrl+Z.
4. Click **on an existing note** (the label shows `+`) to add the pitch to its chord. Clicking on a rest turns it into a note.

### Moving notes

With the **Select** tool, point at a notehead: the pointer becomes a vertical double arrow. Drag up or down to move the note one line or space at a time; it sounds at each step. In a chord, only the note you grabbed moves. One Ctrl+Z undoes the whole drag.

### Erasing

The **eraser** (in the **Tools** bar, next to Select, or `X`) turns the pointer into a crosshair. Click a note to erase just that note; in a chord, only the tone you aim at goes. Drag a box to erase everything inside it. The note under the crosshair turns red before you click, and one Ctrl+Z brings back everything erased in one go.

## The bars

The tools sit in thin, named bars around the score. Hover any button, or reach it with Tab, to see its name, what it does, its keyboard shortcut and, small in the corner, the bar it belongs to. When a row or column has no room, its last bars go behind **»**.

| Bar | Where | Contents |
|---|---|---|
| **Tools** | top, second row | **Select** (click to place the caret, drag to select), the **eraser** and the **T** tool for [text boxes](/guide/texts/#text-boxes). **Esc**, a right-click or `N` go back to Select. |
| **Figures** | left | Two columns: each note, and beside it its rest. The **dot** below makes the figure dotted. **View → Breve and 128th Notes** adds the breve, the 64th and the 128th. |
| **Accidentals** | left | ♯ ♭ ♮. The key signature's sharps and flats are applied automatically when you place a note. |
| **Voice** | left | **1** until you need more; **+** adds an independent line on the same staff, for example divisi strings or two melodies in one hand. Switch voices with its buttons or `Alt+1`…`4`. |
| **Ties & slurs** | right | **Tie** (`T`) joins a note to the next one of the same pitch. **Slur** (`S`) draws a phrase mark over the selected notes. |
| **Articulations** | right | Staccato, staccatissimo, tenuto, accent, marcato, fermata. The fermata also works on rests. |
| **Dynamics** | right | ppp … fff, sfz, fp, behind one button that shows the last one chosen: click it to open all of them. Printed below the staff. |
| **Expressions** | right | *dolce* and *pizz.*: see [Titles, tempo and text](/guide/texts/#words-in-the-music). |

The rows on top hold **File**, **Edit**, **Playback** and **View**, then **Tools**, **Measure** (see [Measures, repeats and jumps](/guide/structure/)), **Staves** and **Indications**.

### Your own arrangement

Every bar can go where it suits you: drag it by the dotted grip at its start to another place, or onto the dashed strip at the edge of a side to start a new row or column there; **Esc** cancels. **View → Toolbars → Show Bars** hides or shows each one, **Save Layout As…** keeps an arrangement under a name, and **Reset Toolbars** brings back Partita's.

### Placing marks

**Accidentals, articulations and dynamics** can be placed with the mouse: click the mark (it stays highlighted and follows the pointer), then click each note it goes on. An accidental clicked on a chord changes only that tone. **Esc**, a right-click or clicking the mark again puts it down.

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

The **Measure** bar sets the clef, key and time, adds and deletes measures, and holds barlines, repeats, endings and breaks: see [Measures, repeats and jumps](/guide/structure/). The **Staves** bar adds and deletes staves and groups them.

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
