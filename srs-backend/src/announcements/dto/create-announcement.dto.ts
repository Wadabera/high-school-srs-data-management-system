import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsEnum(['student', 'teacher'])
  @IsNotEmpty()
  announcementFor: string;
}
