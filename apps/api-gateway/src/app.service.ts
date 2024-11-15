import { Inject, Injectable } from "@nestjs/common";

import { ClientKafka } from "@nestjs/microservices";
import { OrderCreateEvent } from "./order-created";

@Injectable()
export class AppService {
  constructor(
    @Inject("BILLING_SERVICE") private readonly billingProxyClient: ClientKafka
  ) {}
  getHello(): string {
    return "Hello World!";
  }

  createOrder(payload: any) {
    if (payload.id && payload.name && payload.price) {
      this.billingProxyClient.emit(
        "order_created",
        new OrderCreateEvent(payload.id, payload.name, payload.price)
      );
    } else {
      // Handle the case where one of the fields is undefined
      throw new Error("Invalid order data");
    }
  }
}
