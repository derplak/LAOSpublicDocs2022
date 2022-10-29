# Website

This website + PWA are built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator and customized color schemes/themes for Aerovisualis Studio.

The followinng commands are for developers, please make sure to run as a container (using Docker) or if you'll be using for local development plese make sure to install the dev enviroment with all the technologies from the "Pre-Requisites" section.

We're assuming the user has a basic understanding of a basic Git workflow for collaborative teams.

https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line


## Pre-Requisites

### Tech Stack

```
Git
YARN
NPM
Docusaurus


```

### Dependencies

```
Bootstrap
YARN
NPM
Docusaurus


```

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
