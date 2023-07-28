import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car/car.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true /* envFilePath: '.env'*/ }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST,
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      models: [User],
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        timezone: '+04:00', 
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },

    }),
    CarModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
