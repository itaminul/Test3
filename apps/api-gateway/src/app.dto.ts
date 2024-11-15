class CreateOrderDto {
  constructor(
    public id: string | undefined,
    public name: string | undefined,
    public price: number | undefined
  ) {}
}
