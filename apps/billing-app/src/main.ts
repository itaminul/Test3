import { NestFactory } from "@nestjs/core";
import { BillingAppModule } from "./billing-app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BillingAppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ["127.0.0.1:9092"],
        },
        consumer: {
          groupId: "billing-consumber",
        },
      },
    }
  );
  await app.listen();
}
bootstrap();
