---
title: "Partita 0.3: la orquesta completa"
date: 2026-11-16
authors: team
excerpt: La primera versión con el nombre Partita. Un instrumento por pentagrama, instrumentos transpositores, corchetes y llaves, y MusicXML para trabajar con otros programas de notación.
tags:
  - versión
---

Partita 0.3 es la primera versión con el nombre nuevo, y el paso más grande hasta ahora: ya puedes escribir para cualquier conjunto, hasta una orquesta completa, e intercambiar partituras con otros programas de notación. Descárgala desde la [página de descarga](/es/download/) o deja que tu copia instalada se actualice sola.

## Un instrumento por pentagrama

- **Cada pentagrama suena con su propio instrumento**, entre 128: cuerdas, maderas, metales, percusión, teclados y voces.
- **Su nombre aparece al inicio del pentagrama**, y un nombre corto (*Vln. I*, *Vc.*) en los sistemas siguientes. Haz clic en el nombre para cambiarlo.
- **Insertar → Pentagrama…** pregunta primero el instrumento y propone su nombre, su clave y su transposición habituales.

## Instrumentos transpositores

Los clarinetes y trompetas en si♭, la trompa en fa, los saxofones, el flautín, la guitarra y el contrabajo se escriben en su propia tonalidad y suenan en tono real. Si cambias la transposición de un pentagrama, sus notas se reescriben para que la música suene igual.

## Corchetes y llaves

Agrupa las familias de instrumentos con un corchete y los dos pentagramas de un piano con una llave. Las barras de compás atraviesan cada grupo, como en las partituras impresas.

## MusicXML

**Archivo → Importar MusicXML…** abre partituras de Finale, Sibelius, Dorico, MuseScore y otros — `.musicxml`, `.xml` y `.mxl` comprimidos — y **Exportar MusicXML…** devuelve las tuyas. Las partes, las voces, la letra, las dinámicas, las transposiciones y los grupos viajan con la música. Lo que Partita aún no puede mostrar, como los tresillos, se simplifica, y Partita te dice qué.

## Además

- Un nombre y un aspecto nuevos: Partita, con su P barroca.
- Las partituras se guardan como `.partita`; tus archivos `.dacapo` se siguen abriendo.

Todo está explicado en la [guía de uso](/guide/staves/) (en inglés), y la lista completa de cambios en el [registro de cambios](https://github.com/partita-notation/partita/blob/main/CHANGELOG.md).

**Sobre la compatibilidad:** las partituras que usan los nuevos ajustes de pentagrama (instrumentos, transposiciones, corchetes y llaves) no se pueden abrir con Da Capo 0.2. El trabajo sin guardar de la 0.2.2 vuelve tras la actualización, como siempre.
