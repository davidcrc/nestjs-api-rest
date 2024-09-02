import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene todas las tareas' })
  @ApiResponse({ status: 200, description: 'Retorna todas las tareas' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async getTasks() {
    return await this.tasksService.getTasks();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene una tarea por su ID' })
  @ApiResponse({ status: 200, description: 'Retorna toda la tarea por su ID' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async getTask(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksService.getTask(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea una nueva tarea' })
  @ApiResponse({ status: 200, description: 'Tarea creada exitosamente' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createTask(@Body() task: CreateTaskDto) {
    return await this.tasksService.createTask(task);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Actualiza una tarea por su ID' })
  @ApiResponse({ status: 200, description: 'Tarea actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: UpdateTaskDto,
  ) {
    return await this.tasksService.updateTask(id, task);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Elimina una tarea por su ID' })
  @ApiResponse({ status: 200, description: 'Tarea eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async deleteTask(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksService.deleteTask(id);
  }
}
