import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interface/task';

@Injectable()
export class TaskStoreService {
    public tasks: Task[] = [];

    public async addTask(task: Task): Promise<Task> {
        this.tasks.push(task);
        return Promise.resolve(task);
    }

    public async getTask(id: string): Promise<Task> {
        const task = await this.tasks.filter(task => task.id === id);
        if (task && task.length > 0) {
            return Promise.resolve(task[0]);
        } else {
            throw new NotFoundException("Task not found")
        }
    }

    public async deleteTask(id: string): Promise<Task[]> {
        const task = await this.tasks.filter(task => task.id !== id);
        this.tasks = task;
        return Promise.resolve(this.tasks);
    }
    public async filterTask(filter: boolean, name: string): Promise<Task[]> {

        if (filter) {
            const data = await this.tasks.filter(item => item.name === name)
            return Promise.resolve(data);
        }

        return Promise.resolve(this.tasks)

    }

    public async getAllTask(): Promise<Task[]> {
        return Promise.resolve(this.tasks);
    }

}
