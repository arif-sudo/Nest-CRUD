import { IsEmail, IsString, Length } from '@nestjs/class-validator'

export class CreateUserDto {
    @IsEmail({}, { message: 'Wrong email!' })
    @IsString({message: "Should be string"})
    readonly email: string;

    @IsString({message: 'Should be a string'})
    @Length(8 ,16, {message: 'Should be from 8 to 16 chars'})
    readonly password: string;
}
    