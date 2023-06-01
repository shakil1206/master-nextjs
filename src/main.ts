import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './user-module/filter';
import { createDocument } from './swagger/swagger';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());


  app.setGlobalPrefix('api/v1');
  SwaggerModule.setup('api',app,createDocument(app));
  



  await app.listen(3000);
}
bootstrap();
