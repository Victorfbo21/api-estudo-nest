import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/Entitys/user.entity";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post('/insert')
    async createUser(@Body() data: User) {
        return this.userService.createUser(data)
    }
}