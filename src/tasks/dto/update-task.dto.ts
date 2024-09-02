import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'El titúlo de la tarea',
  })
  title?: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'La descripción de la tarea',
  })
  description?: string;
}
