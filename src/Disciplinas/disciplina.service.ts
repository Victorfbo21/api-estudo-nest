import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disciplinas } from 'src/Entitys/disciplinas/disciplinas.entity';
@Injectable()
export class DisciplinaService {
    constructor(
        @InjectRepository(Disciplinas)
        private DisciplinaRepository: Repository<Disciplinas>,
    ) { }

    async createDisciplina(data: Disciplinas): Promise<Disciplinas> {
        if (!data.name || !data.responsavel || !data.area) throw new BadRequestException("Todos os campos precisam ser Preenchidos")
        const created = this.DisciplinaRepository.create(data)
        return created
    }

    async listDisciplinas(): Promise<Disciplinas[]> {
        return this.DisciplinaRepository.find();
    }
}