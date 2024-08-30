# Hey

```
npm i -g @nestjs/cli
```

## Create project

```
nest new nestjs-api-rest
```

## Add prisma

```
npm i prisma --save-dev
```

```
npx prisma init
```

- update schema, then:

```
npx prisma migrate dev --name init
```

## Add GET Task

```
nest g mo tasks
```

```
nest g co tasks --no-spec
```

```
nest g s tasks --no-spec
```

## Add class validator

```
npm i --save class-validator class-transformer
```
