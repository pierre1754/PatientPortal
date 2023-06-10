import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Patient Portal API')
    .setDescription(
      'Patient Portal is a web application that list patients and their treatments.',
    )
    .setVersion('1.0')
    .addTag('Patient')
    .addTag('Doctor')
    .addTag('Treatment')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.BACKEND_PORT || 3000);
}

bootstrap();
