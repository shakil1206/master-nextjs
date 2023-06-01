import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'test' })
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule { }
