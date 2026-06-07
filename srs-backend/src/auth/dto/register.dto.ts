import { IsString, IsEmail, IsNotEmpty, IsOptional, IsEnum, Matches } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9_]+$/)
  username: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^.{8,}$/)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['student', 'teacher', 'director'])
  @IsNotEmpty()
  role: 'student' | 'teacher' | 'director';

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  stream?: string;

  @IsOptional()
  @IsString()
  grade?: string;

  @IsOptional()
  @IsString()
  class?: string;

  @IsOptional()
  @IsString()
  subjectCode?: string;

  @IsOptional()
  @IsString()
  classes?: string;

  @IsOptional()
  @IsString()
  background?: string;

  @IsOptional()
  @IsString()
  photo?: string;
}