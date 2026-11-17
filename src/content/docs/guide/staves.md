---
title: Staves and instruments
description: Name, sound, clef and transposition of each staff, short names, brackets and braces — everything to write for an ensemble or a full orchestra.
sidebar:
  order: 4
---

Every staff has a **name**, a **short name**, a **sound**, a **clef** and a **transposition**. Together they let you write anything from a solo to a full orchestra.

## Adding a staff

**Insert → Staff…** adds a staff at the bottom and asks for its instrument first. Pick the sound and Partita proposes the rest: the usual name, short name, clef and transposition. Repeat it to build your ensemble.

## Changing a staff

**Click the name** at the start of a staff, or use **Insert → Staff Name, Sound and Clef…** for the staff with the caret. Everything you change in that dialog is one undo step.

| Setting | What it does |
|---|---|
| **Name** | Printed at the start of the staff on the first system: *Flute*, *Violin I*, *Piano*. A score with a single staff still called "Staff 1" shows no name. |
| **Short name** | Printed on the following systems: *Fl.*, *Vln. I*, *Pno.* It follows the name until you type your own (*Violin II* gives *Vln. II*). Leave it empty for no name on later systems. |
| **Sound** | One of the 128 General MIDI instruments of FluidR3 GM, grouped by family. Playback and the notes you enter use it. |
| **Clef** | Treble, bass, alto or tenor. The sound proposes the usual one (viola: alto, cello: bass). |
| **Transposition** | For instruments that sound in another key than written (see below). |

## Transposing instruments

Some instruments are written in another key than they sound. A **clarinet in B♭** sounds a major second lower than written, so in a score in concert C major its staff shows D major, and a written D sounds C.

Partita writes these staves in their own key and plays them at concert pitch. When you pick a sound, its usual transposition is set for you:

| Instruments | Transposition |
|---|---|
| Clarinet, trumpet and soprano saxophone in B♭ | sound a major 2nd lower |
| Horn and English horn in F | sound a perfect 5th lower |
| Alto saxophone in E♭ | sounds a major 6th lower |
| Tenor saxophone in B♭ | sounds a major 9th lower |
| Baritone saxophone in E♭ | sounds a major 13th lower |
| Piccolo, celesta, xylophone | sound an octave higher |
| Glockenspiel | sounds two octaves higher |
| Guitar, bass guitar, double bass | sound an octave lower |

Other transpositions — clarinet in A, alto flute in G, trumpet in D or E♭ — are in the list too. **Changing the transposition of a staff that already has music rewrites its notes so it keeps sounding the same**: a C written for the piano becomes a D when the staff turns into a B♭ clarinet.

## Brackets and braces

- A **bracket** joins an instrument family: woodwinds, brass, strings.
- A **brace** joins the staves of one instrument: the two hands of a piano, a harp, an organ.

Select some music across the staves you want to join (drag from the top staff to the bottom one), then choose **Insert → Bracket Selected Staves** or **Brace Selected Staves**. **Remove Bracket or Brace** takes them out again. Barlines run through a group, and when the staves of a brace share a name, it is printed once, centred.

## Scores from other programs

MusicXML files keep all of this. When you import one, each part becomes a staff (a piano part becomes two braced staves) with its name, short name, sound, transposition and the brackets and braces of the original. When you export, Partita writes them back.
