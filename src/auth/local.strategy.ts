import { Strategy } from "passport-local";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super()
    }

    async validateUser(id: number, password: string): Promise<any> {
        const user = this.authService.validateUser(id, password)
        if (!user){
            throw new UnauthorizedException();
        }
        return user;
    }

}