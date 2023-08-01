import { Controller, Body, Get, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./local.auth-guard";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { User } from "src/users/users.model";
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) { }
    @Get()
    getAuth(): string {
        return 'auth'
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
        return req.user;
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<User | undefined> {
        let { password, email, username } = createUserDto;
        const saltOrRounds = 10;
        password = await bcrypt.hash(password, saltOrRounds);
        const userDto = { password, email, username };
        const result = await this.usersService.create(userDto)
        return result
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: any): Promise<any> {
        //request has to have .username and .password field to Guard to work
        return this.authService.login(req.user)
    }


}
