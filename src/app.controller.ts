import { Controller, Get, Post,Body, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.auth-guard';
import { AuthService } from './auth/auth.service';
import { AuthUserDto } from './users/dto/auth-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/language')
  getProgLang(): string {
    return this.appService.getProg();
  }

  @Post('/auth/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: any ): Promise<any> {
    //request has to have .username and .password field to Guard to work
    return this.authService.login(req.user)
  }
}
