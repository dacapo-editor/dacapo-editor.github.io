---
title: Titles, tempo and text
description: Title, composer, header, footer and page numbers; tempo markings; expressions, techniques and rehearsal marks; free text boxes; and the font and size of every kind of text.
sidebar:
  order: 5
---

Every text in a score is part of the score: it prints as shown, it is saved in the file, and every change can be undone with Ctrl+Z. **Click any text on the page to change it there.** Type, then press **Enter** (or click elsewhere) to keep it, or **Esc** to leave it as it was.

## Titles, header and footer

| Where | Texts |
|---|---|
| **Page 1** | The **title**, a **subtitle** under it, the **composer** on the right and a **lyricist or arranger** on the left (*Words: …*, *Arr. …*), a **dedication** above the title, the **part** at the top left (*Violin I*, for a set of parts) and a **copyright** line at the bottom. |
| **Every page** | A **footer**, and from page 2 on, a **header**. |
| **Page numbers** | At the top or the bottom; left, centre, right or on the outside edge (right on odd pages, left on even ones, as in a book); from page 2 on, or on page 1 too. |

**Score → Titles, Header and Footer…** has all of them. In the header, the footer and the page numbers, `{page}`, `{pages}`, `{title}` and `{composer}` are filled in for each page: `{title} · page {page} of {pages}` prints *Sonata · page 2 of 3*. The **Insert** buttons type them for you. A text left empty is not printed.

An empty title or composer shows a grey hint where it goes. Hints are never printed. The music moves down to make room for the texts of page 1.

## Tempo markings

**Score → Tempo Marking…**, or the **♩=** button in the palette, puts a marking such as **Andante con moto ♩ = 76** at the start of the caret's measure. Suggestions such as *Allegro* or *a tempo* appear as you type. The metronome mark can count quarters, eighths, halves or dotted values: ♩. = 60 in 6/8 is the same speed as ♩ = 90. Click a printed marking to change or remove it.

- **What prints and what plays are separate.** *Printed* chooses the words and the metronome mark, the words only, the metronome mark only, or nothing. A hidden marking still sets the tempo.
- **Tempo changes.** A marking later in the piece with *Changes the tempo from this measure* plays at its new tempo from there on. Without it, only the words are printed (*a tempo*, *più mosso*) and the tempo stays as it was.
- A marking belongs to its measure: inserting or deleting measures before it moves it along.

## Words in the music

The **Indications** section of the palette has the tempo marking and three more buttons. They are in the **Notes** and **Score** menus too.

| Button | What it adds |
|---|---|
| ***dolce*** | An **expression** under the staff, in italics, on the note before the caret (**Ctrl+E**): *dolce*, *espressivo*, *cresc.* |
| **pizz.** | A **technique** over the staff, on the note before the caret: *pizz.*, *arco*, *con sord.* |
| **A** | A **rehearsal mark** in a box at the start of the caret's measure, with the next letter after the last one (A, B, C…). |

A grey hint shows where the words go: type over it and press **Enter**. Words on a note move, copy and delete with it. To remove them, click them and clear the text.

## Text boxes

The **T** tool in the palette (or **Score → Text Box**) writes anywhere on a page: click where the text should start and type. **Shift+Enter** starts a new line.

- A text box stays where you put it on its page, whatever the music does. That is why boxes are only shown in page view.
- **Drag** a box to move it; **click** it to change it.
- While you type, the format bar above the text sets the alignment (left, centred, right) and a frame around the box.
- A box left empty, or clicked with the eraser, is removed.

## Text styles

Each kind of text has one look, so that all the tempo markings, for example, match: the title, subtitle, composer, lyricist, dedication, part, copyright, header, footer, page numbers, tempo markings, expressions, techniques, rehearsal marks, lyrics and staff names.

- **While typing a text**, the format bar above it sets the font, the size in points, **bold** and *italic* for every text of that kind. **↺** goes back to Partita's look.
- **Score → Text Styles…** shows every kind at once, including the ones you do not type in place, such as lyrics. **All to Default** goes back to Partita's look.

Spacing follows the sizes: a bigger title moves the music down, and bigger lyrics take more room between verses. Fonts are the ones installed on your computer; a score opened where a font is missing uses Georgia instead.

## In other programs

MusicXML keeps the title, subtitle, composer, lyricist, part and copyright, the tempo markings (hidden ones too), expressions, techniques and rehearsal marks. The header, footer, page numbers, text boxes and text styles are saved in `.partita` files only.
