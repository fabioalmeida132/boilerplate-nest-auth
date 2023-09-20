import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private mockUser = {
    userId: '1',
    email: 'admin@admin.com',
    password: 'Password@123',
  };

  async createToken(user: any) {
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    // IMPLEMENTAR LÓGICA PARA VALIDAR USUARIO NO BANCO
    if (email === this.mockUser.email && password === this.mockUser.password) {
      return this.mockUser;
    }
    return null;
  }

  async validateUserFromPayload(email: string): Promise<any> {
    // IMPLEMENTAR A LÓGICA DE BUSCAR O USER NO BANCO E VALIDAR SE É O MESMO DO TOKEN
    if (email === this.mockUser.email) {
      return this.mockUser;
    }
    return null;
  }
}
