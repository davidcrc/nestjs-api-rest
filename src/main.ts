import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('API de tareas')
    .setDescription('API tareas, usando REST con NestJS')
    .setVersion('1.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Habilitar CORS
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Permite varios orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Exponer el documento OpenAPI en formato JSON en una ruta adicional
  app.getHttpAdapter().get('/api-json', (req, res) => {
    res.json(document);
  });

  await app.listen(4000);
}
bootstrap();
