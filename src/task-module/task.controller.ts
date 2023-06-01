import { Controller, Get, Post, Res, Req, Body, UsePipes, ValidationPipe, Param, Delete, Query, ParseBoolPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Request, Response } from 'express';
import { QueryParamDto, TaskDto, TaskParamDto } from './dto/task.dto';
import { filter } from 'rxjs';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  async getTask(@Param() reqParam: TaskParamDto, @Res() res: Response) {
    try {
      const data = await this.taskService.getTask(reqParam.id);
      return res.status(200).send(data);
    } catch (error) {
      throw error
    }
  }

  @Get()
  @UsePipes(new ValidationPipe())
  async getAllTask(@Res() res: Response) {
    const data = await this.taskService.getAllTask();
    return res.status(200).send(data);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async deleteTask(@Param() reqParam: TaskParamDto, @Res() res: Response) {
    const data = await this.taskService.deleteTask(reqParam.id);
    return res.status(200).send(data);
  }

  @Get('/filter/data')
  @UsePipes(new ValidationPipe({
    whitelist: false,
    transform: true
  }))
  async filterTaskById(@Query() reqParam: QueryParamDto, @Res() res: Response) {
    const data = await this.taskService.filterTask(reqParam.filter, reqParam.name);
    return res.status(200).send(data);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() task: TaskDto, @Res() res: Response) {
    const data = await this.taskService.addTask(task);
    return res.status(200).send(data)
  }
}
