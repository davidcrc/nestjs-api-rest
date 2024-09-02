import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({
    type: String,
    description: 'El titúlo de la tarea',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({
    type: String,
    description: 'La descripción de la tarea',
  })
  description: string;
}
