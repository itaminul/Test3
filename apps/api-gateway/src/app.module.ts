import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AuthController } from "./auth.controller";
import { BillingController } from "./billing.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "auth",
            brokers: ["127.0.0.1:9092"],
          },
          consumer: {
            groupId: "auth-consumer",
          },
        },
      },
      {
        name: "BILLING_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "billing",
            brokers: ["127.0.0.1:9092"],
          },
          consumer: {
            groupId: "billing-consumer",
          },
        },
      },
    ]),
  ],
  controllers: [AppController, AuthController, BillingController],
  providers: [AppService],
})
export class AppModule {}
