import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
