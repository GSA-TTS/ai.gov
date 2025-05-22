# AI.gov

## Overview

This is the monorepo for ai.gov. It uses [Turborepo](https://turborepo.com/) and [pnpm](https://pnpm.io/) for repo and dependency management respectively.

Additional documentation:

- [Architectural Decision Records (ADRs)](./docs/adr/)

## Development

This project uses the version of Node.js defined in [.nvmrc](./nvmrc). To ensure you're using the correct node version, you may use the [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm):

```bash
nvm install
```

It may be helpful to add the following to your bash config so nvm is automatically detected:

```bash
_nvmrc_hook() {
  if [[ $PWD == $PREV_PWD ]]; then
    return
  fi

  PREV_PWD=$PWD
  [[ -f ".nvmrc" ]] && nvm use
}

if ! [[ "${PROMPT_COMMAND:-}" =~ _nvmrc_hook ]]; then
  PROMPT_COMMAND="_nvmrc_hook${PROMPT_COMMAND:+;$PROMPT_COMMAND}"
fi
```

This project uses [pnpm workspaces](https://pnpm.io/workspaces). To work with this project, [install pnpm](https://pnpm.io/installation) and then the project dependencies:

```bash
pnpm install
```

This project uses playwright tests. Run this command to install.

```bash
pnpm exec playwright install
```


To run tests.

```bash
pnpm test
```

If you start having unexplained build errors, the following commands are useful to clean up and start fresh.

```bash
pnpm clean:dist # removes previously built files recursively
pnpm clean:modules # removes node_module directories recursively

# ... run more commands like pnpm install and pnpm build after you have run these
```

To start developing with hot reloading, use:

```bash
pnpm build
```

then run:

```bash
pnpm dev
```

To start developing each app individually, use:

```bash
pnpm build:site

pnpm build:console
```

then run:

```bash
pnpm dev:site

pnpm dev:console
```

These local servers will be started:

- Public website (./apps/site) - http://localhost:4321/
- Private console dashboard (./apps/console) - http://localhost:4322/

To lint the source code:

```bash
pnpm lint
```

To check types the source code:

```bash
pnpm check-types
```
