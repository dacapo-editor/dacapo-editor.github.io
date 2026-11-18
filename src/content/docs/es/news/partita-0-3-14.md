---
title: "Partita 0.3.14: palabras, repeticiones y espacio para la música"
date: 2026-11-18
authors: team
excerpt: Títulos, indicaciones de tempo y texto en cualquier parte de la página; repeticiones, casillas, D.C. y D.S. que se tocan; barras de herramientas delgadas que puedes ordenar a tu gusto; y la aplicación entera en español.
tags:
  - versión
---

Partita 0.3.14 es un gran paso entre la 0.3 y la 0.4: una partitura puede llevar ahora todas las palabras que necesita, sus repeticiones y saltos se tocan como están escritos, y las herramientas se apartaron para dejarle sitio a la música. Descárgala desde la [página de descarga](/es/download/), o deja que tu copia instalada se actualice sola.

## Cada palabra en su sitio

- **Títulos, encabezado y pie de página**: subtítulo, letrista o arreglista, dedicatoria, parte y copyright en la página 1, un encabezado, un pie de página y la numeración, con `{page}`, `{pages}`, `{title}` y `{composer}` completados en cada página. Haz clic en cualquiera de ellos en la página para cambiarlo.
- **Indicaciones de tempo** como *Andante con moto ♩ = 76*, impresas u ocultas, y cambios de tempo más adelante en la obra que la reproducción respeta.
- **Palabras en la música**: expresiones (*dolce*), técnicas (*pizz.*) y letras de ensayo.
- **Cuadros de texto** en cualquier parte de la página, con la herramienta **T**.
- **Estilos de texto**: la fuente, el tamaño, la negrita y la cursiva de cada tipo de texto.

## Repeticiones y saltos que se tocan

- **Barras de compás**: doble, final y discontinua.
- **Repeticiones**, tocadas tantas veces como indiquen, y **casillas de 1ª y 2ª vez**, cada una en su vuelta.
- **D.C., D.S., segno, coda y Fine**, con *al Fine* y *al Coda*. El cursor de reproducción vuelve con la música.
- **Compases de anacrusa**: un primer compás más corto no se numera, y el siguiente es el compás 1.
- **Saltos de sistema y de página** donde quieras que termine la línea o la página.

## Espacio para la música

La paleta desapareció. Las herramientas están en **barras delgadas con nombre** alrededor de la partitura: lo que usas para escribir a la izquierda, lo que va sobre las notas a la derecha, y el resto en dos filas arriba. Cada barra se puede mover: arrástrala a cualquier lado de la partitura, o abre para ella una fila o columna nueva. **Ver → Barras de herramientas** oculta las que no necesitas y guarda tus distribuciones; **Restablecer barras** devuelve la de Partita.

## Además

- **Español**: toda la interfaz está traducida. **Ver → Idioma** elige English, Español o el idioma de tu computadora.
- **Los menús** están organizados por categorías con submenús, cada opción en una línea y con su tooltip.
- **Un pentagrama puede convertirse en doble pentagrama**: elige un piano para él y se agrega el pentagrama de fa debajo.

Todo está descrito en la [guía de uso](/guide/structure/) (en inglés), y la lista completa de cambios en el [changelog](https://github.com/partita-notation/partita/blob/main/CHANGELOG.md).

**Sobre la compatibilidad:** las partituras que usan algo nuevo de esta versión se guardan en el formato de archivo 7, que Partita 0.3.0 no puede abrir; las demás se guardan como antes. El trabajo sin guardar de la 0.3.0 se recupera después de actualizar, como siempre.
