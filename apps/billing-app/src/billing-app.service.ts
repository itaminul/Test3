import { Injectable } from "@nestjs/common";

@Injectable()
export class BillingAppService {
  private invoices: Record<string, { userId: string; amount: number }> = {};
  getHello(): string {
    return "Hello World!";
  }
  handleOrderCreated(data: any) {
    console.log(data);
  }

  async createInvoice(data: { userId: string; amount: number }) {
    const id = Date.now().toString();
    this.invoices[id] = data;
    return { id, ...data };
  }

  async getInvoice(id: string) {
    return this.invoices[id] || { error: "Invoice not found" };
  }
}
