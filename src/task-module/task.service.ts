import { TaskStoreService } from './task.store.service';
import { Injectable } from '@nestjs/common';
import { Task } from './interface/task';
import { uuid } from 'uuidv4';

@Injectable()
export class TaskService {

  constructor(private readonly taskStoreService: TaskStoreService) { }

  public async addTask(task: Task): Promise<Task> {
    task.id = uuid()
    task.completed = false;
    task.description = "Dummy";
    task.ownder = "Shakil";
    task.duration = 2;
    return this.taskStoreService.addTask(task);
  }

  public async getTask(id: string): Promise<Task> {
    const task = await this.taskStoreService.getTask(id);
    return task;
  }

  public async deleteTask(id: string): Promise<Task[]> {
    const task = await this.taskStoreService.deleteTask(id);
    return task;
  }
  public async filterTask(filter: boolean, name: string): Promise<Task[]> {
    const task = await this.taskStoreService.filterTask(filter, name);
    return task;
  }

  public async getAllTask(): Promise<Task[]> {
    // return this.tasks;
    return this.taskStoreService.getAllTask();
  }

}
