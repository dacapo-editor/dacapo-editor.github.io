---
title: Measures, repeats and jumps
description: Barline types, repeats, first and second endings, D.C., D.S., segno, coda and Fine, pickup measures, and system and page breaks.
sidebar:
  order: 4
---

The **Measure** bar on top, and **Score → Measure** in the menu, hold what shapes the measures of a score. Most of it acts on **the caret's measure**, or on the measures of the selection.

## Clef, key, time and measures

- **Clef**: clef of the staff containing the caret.
- **Key** and **Time**: apply from the caret's measure until the next change. For Time, type something like `3/4` and press Enter.
- **+ Measure / − Measure**: insert after, or delete, the current measure.

## Barlines

The **Barline** button chooses the line that closes the measure: **single**, **double** (the end of a section), **final** (the end of the piece or a movement) or **dashed** (a subdivision of a long measure). It shows the last kind you chose; click it to choose. The last measure of a score ends with a final barline anyway.

## Repeats

- **Start Repeat** puts a repeat sign at the start of the caret's measure (or the first measure of the selection), **End Repeat** at its end (or the end of the last measure of the selection). Each turns its sign on or off, and shows whether the measure has it.
- **Score → Measure → Repeat → Repeat Selection** puts both signs around the selected measures.
- **Times Played** (2 to 6): a passage played more than twice shows ×3, ×4… over its end repeat.

Playback plays the passage again: at an end repeat it goes back to the start repeat, or, when there is none, to the beginning or to just after the previous end repeat. The green playhead goes back with the music.

## First and second endings

The **Ending** button makes the caret's measure, or the selected ones, a **1st**, **2nd** or **3rd** ending, or **1st and 2nd**; **No Ending** removes it. A bracket with the number is drawn over them: closed on the right when the ending goes back to the repeat, open otherwise. Choosing a first ending also puts the end repeat there if it has none.

Each time through the repeat, playback skips the endings that are not for that time: the first time it plays the 1st ending, the second time it goes straight to the 2nd.

## D.C., D.S., segno, coda and Fine

The **Jumps** button of the **Indications** bar (or **Score → Jumps**) puts on the caret's measure:

- at its start, a **segno** 𝄋 (where a D.S. goes back to) or the start of the **coda** 𝄌;
- at its end, one of *Fine*, *To Coda*, *D.C.*, *D.C. al Fine*, *D.C. al Coda*, *D.S.*, *D.S. al Fine* or *D.S. al Coda*.

Choosing the one already there takes it away; **No Jump** removes it. Playback follows them: a D.C. goes back to the beginning and a D.S. to the segno, once each. After the jump, repeats are not taken again and only the last ending plays; *al Fine* stops at Fine, *al Coda* goes on from To Coda to the coda.

## Pickup measures

**Score → Measure → Length…** says how long the caret's measure really is, in steps of half a beat, up to the whole measure. It proposes what the measure holds now.

A shorter **first** measure is a **pickup** (anacrusis): it is not numbered, the next one is measure 1, and the status bar says *Pickup*. A shorter measure at the end usually completes it. Playback and the check for measures with too many beats use the real length.

## System and page breaks

**System Break** ends the line of music after the caret's measure; **Page Break** ends the page there (in page view; in wrap view it ends the line). The same button again takes it away. A ↵ or ⇟ beside the line shows where a break is while you edit; it is never printed. The continuous view has no lines and ignores them.

## In other programs

MusicXML keeps barlines, repeats, endings, jumps and pickups. System and page breaks are kept in Partita's own files; the line breaks in files from other programs are left out, so the music flows freely.
