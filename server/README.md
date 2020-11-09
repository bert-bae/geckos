# Gecko Server

### Starting Local MongoDB

In the `server` folder root, run `sudo docker-compose up`.
To SSH into the docker container, run `sudo docker exec -it gecko-mongo /bin/bash`.

Reference to MongoDB Shell commands: `https://docs.mongodb.com/manual/reference/mongo-shell/`

# Working with NestJS

## Creating new Modules

After ensuring that the nest CLI is installed globally, run the following commands from `/server`:

`nest g module <NewModuleName>`
`nest g controller <NewModuleName>`
`nest g service <NewModuleName>`

This will create the following files:

`/server/<NewModuleName>/<NewModuleName>.module.ts`
`/server/<NewModuleName>/<NewModuleName>.controller.ts`
`/server/<NewModuleName>/<NewModuleName>.service.ts`
`/server/<NewModuleName>/<NewModuleName>.service.spec.ts`

Create two additional files for Mongoose schemas and Typescript types:

`<NewModuleName>/<NewModuleName>.type.ts`
`<NewModuleName>/<NewModuleName>.schema.ts`

# NestJS

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
