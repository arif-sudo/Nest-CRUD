import { Strategy } from "passport-local";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ idField: 'id' })
    }

    async validate(username: string, password: string): Promise<any> {
        const user = this.authService.validateUser(username, password)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

}