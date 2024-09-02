import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getTasks() {
    return await this.tasksService.getTasks();
  }

  @Get(':id')
  async getTask(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksService.getTask(id);
  }

  @Post()
  async createTask(@Body() task: CreateTaskDto) {
    return await this.tasksService.createTask(task);
  }
}
