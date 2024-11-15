import { Controller, Post, Body, Inject } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

@Controller("auth")
export class AuthController {
  constructor(
    @Inject("AUTH_SERVICE") private readonly authClient: ClientKafka
  ) {}

  @Post("login")
  async login(@Body() loginDto: { username: string; password: string }) {
    console.log("dafdasfa");
   // return this.authClient.send("auth.login", JSON.stringify(loginDto));
  }
}
