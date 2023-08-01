import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplinaController } from './disciplina.controller';
import { DisciplinaService } from './disciplina.service';
import { Disciplinas } from 'src/Entitys/disciplinas/disciplinas.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Disciplinas])],
    controllers: [DisciplinaController],
    providers: [DisciplinaService],
})
export class DisciplinaModule { }
