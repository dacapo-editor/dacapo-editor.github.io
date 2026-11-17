---
title: Playback
description: Listen to your score, set the tempo and learn how the music is played.
sidebar:
  order: 4
---

| Control | Action |
|---|---|
| **Space** or ▶ | Play from the caret. Press again to pause: the caret moves to where the music stopped, so the next Play continues from there. |
| **Shift + Space** or ⏮ | Play from the beginning. |
| **Esc** or ⏹ | Stop without moving the caret. |
| **♩ = 100** in the toolbar | Tempo in quarter notes per minute (20–400). Type a value and press Enter. It is saved with the score. |

A green line follows the music, and the view scrolls to keep it in sight. Notes also **sound while you write them**: placing a note, adding to a chord, or changing a pitch or accidental plays it.

## Sounds

Playback uses **FluidR3 GM**, a free set of recorded instruments by Frank Wen (MIT license). The first time you press Play, Partita asks before downloading it (148 MB, once). Progress shows in the status bar, and playback starts by itself when it is ready.

The file is kept in the app's data folder. On Windows that is `%LOCALAPPDATA%\io.github.partita-notation.partita\soundfonts\`.

## How the score is played

- **Ties** sustain the note, including across barlines.
- **Staccato** plays half the value and **staccatissimo** a quarter. **Tenuto**, **slurs** and tied notes are played full length. Other notes play slightly detached.
- **Dynamics** set the loudness from that note on. **sfz** affects only its note, and **fp** plays forte then piano. **Accents** and **marcato** add emphasis.
- Every staff plays piano for now. Choosing an instrument per staff is on the [roadmap](/project/roadmap/).
