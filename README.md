# @x12i/lattix-docs usage example

Lattix docs knowledge SDK — install as a devDependency only. Catalog, use cases, and markdown packs for humans and agents.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/lattix-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled lattix documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/lattix-docs)
- [Implementation monorepo](https://github.com/x12i/lattix)
- [Reviewed package source](https://github.com/x12i/lattix/tree/8f90857a6fb3d5dc7b8df0f266fbdc211c09958b/lattix-docs/packages/lattix-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## @x12i/lattix runtime example

KnowX living knowledge graph Web Component (static Explorer + live memorix-service).

Use the exported Explorer transport with a local health response. This example consumes `@x12i/lattix@0.2.0`.

```sh
npm install --ignore-scripts
npm run example:lattix
```

Source: [`src/lattix-example.mjs`](src/lattix-example.mjs). The original documentation-package example remains available through `npm start`. Both examples are checked independently.

## Runtime fixture scope

This runtime consumer uses injected responses, an isolated DOM, temporary files or pure data helpers. It does not contact a live service, launch a browser, query MongoDB or create production metadata. UI/Data Mapper checks its package-normalization helper through the advertised mapper subpath and a browser bundle; CSS is excluded because the fixture renders no UI. Lattix checks its client subpath rather than mounting a graph component.
