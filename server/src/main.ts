import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = process.env.PORT || 5500;

async function startServer() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
  } catch (e) {
    console.error(e);
  }
}
startServer().then((r) =>
  console.log(`Server started in http://localhost:${PORT}`),
);
