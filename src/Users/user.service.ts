
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/Entitys/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) { }

    async createUser(data: User): Promise<User> {
        if (!data.name || !data.email || !data.documento || !data.password) throw new BadRequestException("Todos os campos precisam ser Preenchidos")
        return this.UserRepository.create(data);
    }

    async listUsers(): Promise<User[]> {
        return this.UserRepository.find();
    }
}