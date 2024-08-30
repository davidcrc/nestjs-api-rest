import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';

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
}
