---
title: Contributing
description: How to report problems, suggest features and contribute code to Partita.
sidebar:
  order: 2
---

Partita is free software and contributions are welcome.

## Report a problem

Open an issue on [GitHub](https://github.com/partita-notation/partita/issues) and include:

1. What you expected to happen.
2. What happened instead.
3. The steps to reproduce it.
4. Screenshots or a `.partita` file when possible.

In the app, **Help → About Partita → Copy version info** copies the details that help us find the problem.

## Suggest an improvement

Explain the problem you are trying to solve and the solution you have in mind. For larger features, a short sketch of how it would work helps a lot.

## Contribute code

Partita is written in Rust with Tauri, and its interface is plain HTML, CSS and JavaScript.

1. Open an issue first for significant changes, so the design can be discussed.
2. Fork the repository and create a branch from `main`.
3. Make your change, update the documentation, and run `cargo test`.
4. Open a pull request that describes the change.

Read [CONTRIBUTING.md](https://github.com/partita-notation/partita/blob/main/CONTRIBUTING.md) for the ground rules of the core and the style guide.

## Improve this website

This website lives in its own repository, [partita-notation.github.io](https://github.com/partita-notation/partita-notation.github.io). Every page has an **Edit page** link at the bottom.

## License

Partita is licensed under the [GNU GPL 3.0 or later](https://www.gnu.org/licenses/gpl-3.0.html). By contributing, you agree that your contribution is licensed under the same terms.
