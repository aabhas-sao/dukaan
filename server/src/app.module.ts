import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://aabhas:NogameNolife@cluster0.f5h10mp.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'dukaan',
      },
    ),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
