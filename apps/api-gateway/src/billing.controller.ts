import { Controller, Post, Body, Get, Param, Inject } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

@Controller("billing")
export class BillingController {
  constructor(
    @Inject("BILLING_SERVICE") private readonly billingClient: ClientKafka
  ) {}

  @Post("create-invoice")
  async createInvoice(@Body() invoiceDto: { userId: string; amount: number }) {
    return this.billingClient.send(
      "billing.create-invoice",
      JSON.stringify(invoiceDto)
    );
  }

  @Get("invoice/:id")
  async getInvoice(@Param("id") id: string) {
    return this.billingClient.send("billing.get-invoice", id);
  }
}
