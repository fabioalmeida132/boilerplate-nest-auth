import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/JwtAuthGuard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const jwtAuthGuard = app.get(JwtAuthGuard);

  app.useGlobalGuards(jwtAuthGuard);
  await app.listen(3000);
}

bootstrap();
