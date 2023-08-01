import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './Users/user.controller';
import { UserService } from './Users/user.service';
import { UserModule } from './Users/user.module';
import { User } from './Entitys/user.entity';
import { DisciplinaModule } from './Disciplinas/disciplina.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: parseInt(`${process.env.DB_PORT}`),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
      options: {
        trustServerCertificate: true,
      }
    }),
    UserModule,
    TypeOrmModule.forFeature([User]),
    DisciplinaModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule { }
