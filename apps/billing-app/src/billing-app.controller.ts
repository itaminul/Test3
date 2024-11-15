import { Controller, Get } from "@nestjs/common";
import { BillingAppService } from "./billing-app.service";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class BillingAppController {
  constructor(private readonly billingAppService: BillingAppService) {}

  @Get()
  getHello(): string {
    return this.billingAppService.getHello();
  }

  @EventPattern("order_created")
  handleOrderCreatred(data: any) {
    console.log(data);
    this.billingAppService.handleOrderCreated(data.value);
  }

  @MessagePattern("billing.create-invoice")
  async createInvoice(@Payload() data: { userId: string; amount: number }) {
    return this.billingAppService.createInvoice(data);
  }

  @MessagePattern("billing.get-invoice")
  async getInvoice(@Payload() id: string) {
    return this.billingAppService.getInvoice(id);
  }
}
