import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthAppService {
  getHello(): string {
    return "Hello World!";
  }

  async login(data: { username: string; password: string }) {
    // Implement your login logic here
    // For this example, we'll just return a mock token
    return { token: "mock_token_for_" + data.username };
  }
}
