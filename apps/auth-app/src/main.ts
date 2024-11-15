import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AuthAppModule } from "./auth-app.module";


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthAppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ["127.0.0.1:9092"],
        },
        consumer: {
          groupId: "auth-consumer",
        },
      },
    }
  );
  await app.listen();
}
bootstrap();
