# node-boilerplate

[![Hits-of-Code](https://hitsofcode.com/github/cuongw/node-boilerplate)](https://hitsofcode.com/view/github/cuongw/node-boilerplate)
[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/cuongw/node-boilerplate)
[![GitHub](https://img.shields.io/github/license/cuongw/node-boilerplate.svg)](https://github.com/cuongw/node-boilerplate/blob/master/LICENSE)

> 🌏🚀 A Node.js boilerplate with RESTful, GraphQL, Prisma, PostgreSQL and awesome tools.

## Features

- Using ESNext
- Setup Babel, ESLint, Prettier, Ava and Husky.
- Having Basic authentication and authorization.
- Setup a basic RESTful API.
- Integrating Graphql.
- Using Prisma and PostgreSQL.

## Stack

![Stack](./images/stack.png)

## Prepare

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to use?

### Step 1: Clone this project and remove `.git` folder

```sh
$ git clone https://github.com/cuongw/node-boilerplate.git
$ cd node-boilerplate && rm -rf .git
```

### Step 2: Launch Prisma and the connected database

```sh
$ sudo docker-compose up -d
```

### Step 3: Deploy the Prisma datamodel and generate Prisma client

```sh
$ yarn prisma:deploy
```

### Step 4: Install dependencies and run the project

```sh
$ yarn
$ yarn start:dev
```

🙌 Awesome

## Contributors

[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/0)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/0)[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/1)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/1)[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/2)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/2)[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/3)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/3)[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/4)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/4)[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/5)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/5)[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/6)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/6)[![](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/images/7)](https://sourcerer.io/fame/cuongw/cuongw/node-boilerplate/links/7)

## License

MIT © [cuongw](https://github.com/cuongw)
