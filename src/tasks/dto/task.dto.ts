import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({
    type: Number,
    description: 'El ID de la tarea',
  })
  id: number;

  @ApiProperty({
    type: String,
    description: 'El titúlo de la tarea',
  })
  title: string;

  @ApiProperty({
    type: String,
    description: 'Descrippcion de la tarea',
  })
  description: string;

  @ApiProperty({
    type: Date,
    description: 'Fecha de creación de la tarea',
  })
  createdAt: Date;
}
