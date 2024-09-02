<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

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

# Endpoints de TasksController

## GET /tasks

Obtiene todas las tareas.

### Respuesta

- `200 OK`: Lista de tareas.

## GET /tasks/:id

Obtiene una tarea por su ID.

### Parámetros

- `id`: ID de la tarea.

### Respuesta

- `200 OK`: Tarea solicitada.
- `404 Not Found`: Si no se encuentra la tarea con el ID proporcionado.

## POST /tasks

Crea una nueva tarea.

### Cuerpo de la solicitud

- `title`: Título de la tarea.
- `description`: Descripción de la tarea (opcional).

### Respuesta

- `201 Created`: Tarea creada exitosamente.

## PATCH /tasks/:id

Actualiza una tarea por su ID.

### Parámetros

- `id`: ID de la tarea.

### Cuerpo de la solicitud

- `title`: Nuevo título de la tarea (opcional).
- `description`: Nueva descripción de la tarea (opcional).

### Respuesta

- `200 OK`: Tarea actualizada exitosamente.
- `404 Not Found`: Si no se encuentra la tarea con el ID proporcionado.

## DELETE /tasks/:id

Elimina una tarea por su ID.

### Parámetros

- `id`: ID de la tarea.

### Respuesta

- `200 OK`: Tarea eliminada exitosamente.
- `404 Not Found`: Si no se encuentra la tarea con el ID proporcionado.

===

# Endpoints de TasksController

| Método | Ruta       | Descripción                   | Parámetros | Cuerpo de la solicitud                   | Respuesta                                                                          |
| ------ | ---------- | ----------------------------- | ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| GET    | /tasks     | Obtiene todas las tareas      | -          | -                                        | 200 OK: Lista de tareas                                                            |
| GET    | /tasks/:id | Obtiene una tarea por su ID   | id         | -                                        | 200 OK: Tarea solicitada, 404 Not Found: Si no se encuentra la tarea               |
| POST   | /tasks     | Crea una nueva tarea          | -          | title, description (opcional)            | 201 Created: Tarea creada exitosamente                                             |
| PATCH  | /tasks/:id | Actualiza una tarea por su ID | id         | title (opcional), description (opcional) | 200 OK: Tarea actualizada exitosamente, 404 Not Found: Si no se encuentra la tarea |
| DELETE | /tasks/:id | Elimina una tarea por su ID   | id         | -                                        | 200 OK: Tarea eliminada exitosamente, 404 Not Found: Si no se encuentra la tarea   |
