import { Controller, Get, Post, Res, Req, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { Request, Response } from 'express';
import { TaskDto } from './dto/task.dto';



@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  async getAllTask(@Res() res: Response) {
    const data = this.taskService.getAllTask();
    return res.status(200).send(data);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() task: TaskDto, @Res() res: Response) {
    const data = this.taskService.addTask(task);
    return res.status(200).send(task)
  }
}
