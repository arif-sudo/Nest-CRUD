import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //     Note, however, you don't need to specify a type unless you actually want to access the underlying platform API.
  await app.listen(3000);
}
bootstrap();
