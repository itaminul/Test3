import { Controller, Get } from '@nestjs/common';
import { AuthAppService } from './auth-app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthAppController {
  constructor(private readonly authAppService: AuthAppService) {}

  @Get()
  getHello(): string {
    return this.authAppService.getHello();
  }

  @MessagePattern("auth.login")
  async login(@Payload() data: { username: string; password: string }) {
    return this.authAppService.login(data);
  }

  
}
