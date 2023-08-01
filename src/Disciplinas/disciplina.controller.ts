import { Controller, Post, Body } from "@nestjs/common";
import { DisciplinaService } from "./disciplina.service";
import { Disciplinas } from "src/Entitys/disciplinas/disciplinas.entity";

@Controller('disciplina')
export class DisciplinaController {
    constructor(private disciplinasService: DisciplinaService) {
    }

    @Post('/insert')
    async createDisciplina(@Body() data: Disciplinas) {
        return this.disciplinasService.createDisciplina(data)
    }
}