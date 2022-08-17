# cloudflare-graphql-typescript

![GitHub Actions](https://github.com/jeremynguyencs/cloudflare-graphql-typescript/actions/workflows/main.yml/badge.svg)

`cloudflare-graphql-typescript` is a template for creating a [GraphQL](https://graphql.org) server with serverless [Cloudflare workers](https://workers.cloudflare.com/), written in TypeScript. It uses the [apollo-server-cloudflare](https://www.npmjs.com/package/apollo-server-cloudflare) library to create the server and the [PokeAPI](https://pokeapi.co/) as a REST API source. It also uses Cloudflare KV to cache and store the data from requests.

A demo of the server is available [here](https://pokemon-graphql-api.jeremynguyen.workers.dev/___graphql).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Installation

```bash
git clone https://github.com/jeremynguyencs/cloudflare-graphql-typescript.git

cd cloudflare-graphql-typescript

yarn
```

## Usage

```bash
# Run the server locally
yarn dev

# Lint and format code
yarn lint
yarn format
```

## Deployment

```bash
# Dry run for deployment
yarn build

# Publish to Cloudflare workers
yarn publish
```

# License

[MIT](https://choosealicense.com/licenses/mit/)
