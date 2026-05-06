import { IsString, IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['student', 'teacher', 'director'])
  @IsNotEmpty()
  role: string;
}

export class CreateStudentDto extends CreateUserDto {
  @IsString()
  phone: string;

  @IsString()
  stream: string;

  @IsString()
  grade: string;

  @IsString()
  class: string;

  @IsOptional()
  @IsString()
  photo?: string;
}

export class CreateTeacherDto extends CreateUserDto {
  @IsString()
  phone: string;

  @IsString()
  stream: string;

  @IsString()
  subjectCode: string;

  @IsString()
  grade: string;

  @IsString()
  classes: string; // Comma separated, to be split in service

  @IsOptional()
  @IsString()
  background?: string;

  @IsOptional()
  @IsString()
  photo?: string;
}

export class CreateDirectorDto extends CreateUserDto {
  @IsOptional()
  @IsString()
  photo?: string;
}
