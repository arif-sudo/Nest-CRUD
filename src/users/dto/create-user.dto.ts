import { IsEmail, IsString, MinLength, MaxLength } from '@nestjs/class-validator'

export class CreateUserDto {
    @IsEmail({}, { message: 'Wrong email!' })
    @IsString({message: "Should be string"})
    readonly email: string;

    @IsString({message: 'Should be a string'})
    @MinLength(8, {message: 'Should be 8 and more chars'})
    @MaxLength(16, {message: 'Should be less  16 and less chars'})
    readonly password: string;
}
