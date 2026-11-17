---
title: "Partita 0.3: the whole orchestra"
date: 2026-11-16
authors: team
excerpt: The first version called Partita. An instrument for every staff, transposing instruments, brackets and braces, and MusicXML to work with other notation programs.
tags:
  - release
---

Partita 0.3 is the first version with the new name, and the biggest step so far: you can now write for any ensemble, up to a full orchestra, and exchange scores with other notation programs. Get it from the [download page](/download/), or let your installed copy update itself.

## An instrument for every staff

- **Each staff plays its own sound**, chosen from 128 instruments: strings, woodwinds, brass, percussion, keyboards, voices.
- **Its name is printed at the start of the staff**, and a short name (*Vln. I*, *Vc.*) on the following systems. Click the name to change it.
- **Insert → Staff…** asks for the instrument first and proposes its usual name, clef and transposition.

## Transposing instruments

Clarinets and trumpets in B♭, the horn in F, saxophones, the piccolo, the guitar and the double bass are written in their own key and play at concert pitch. Change a staff's transposition and its notes are rewritten so the music sounds the same.

## Brackets and braces

Join instrument families with a bracket and the two staves of a piano with a brace. Barlines run through each group, as in printed scores.

## MusicXML

**File → Import MusicXML…** opens scores from Finale, Sibelius, Dorico, MuseScore and others — `.musicxml`, `.xml` and compressed `.mxl` — and **Export MusicXML…** sends yours back. Parts, voices, lyrics, dynamics, transpositions and groups travel with the music. What Partita cannot show yet, such as tuplets, is simplified, and Partita tells you what.

## Also new

- A new name and a new look: Partita, with its Baroque P.
- Scores are saved as `.partita`; your `.dacapo` files still open.

Everything is described in the [user guide](/guide/staves/), and the full list of changes is in the [changelog](https://github.com/partita-notation/partita/blob/main/CHANGELOG.md).

**A note on compatibility:** scores that use the new staff settings (instruments, transpositions, brackets and braces) can't be opened by Da Capo 0.2. Unsaved work from 0.2.2 is brought back after the update, as always.
