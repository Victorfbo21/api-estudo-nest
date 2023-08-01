import { User } from "src/Entitys/user.entity";
import { Repository } from 'typeorm';
export class UserRepository extends Repository<User>  {

    public async createUser(data: User) {
        const newUser = this.create(data)
        return await this.save(newUser)

    }
}