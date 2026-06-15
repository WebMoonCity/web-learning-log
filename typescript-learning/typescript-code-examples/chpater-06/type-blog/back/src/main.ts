import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    session({
      secret: 'password',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60 * 60 * 1000 },
    }),
  );

  app.useStaticAssets(join(__dirname, '..', 'images'));

  await app.listen(3000);
}
bootstrap();
