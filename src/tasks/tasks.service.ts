import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}

  async getTasks() {
    try {
      const tasks = await this.prismaService.task.findMany();

      return tasks;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async getTask(id: number) {
    try {
      const task = await this.prismaService.task.findFirst({
        where: {
          id,
        },
      });

      if (!task) {
        throw new NotFoundException(`Task ${id} not found`);
      }

      return task;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }

      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async createTask(task: CreateTaskDto) {
    const { title, description } = task;

    try {
      const newTask = await this.prismaService.task.create({
        data: {
          title,
          description,
        },
      });

      return newTask;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async updateTask(id: number, task: UpdateTaskDto) {
    const { title, description } = task;

    try {
      const updatedTask = await this.prismaService.task.update({
        where: {
          id,
        },
        data: {
          title,
          description,
        },
      });

      return updatedTask;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new NotFoundException(`Task ${id} not found`);
      }

      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
