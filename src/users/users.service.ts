import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [{ id: 0, name: "roti" }, { id: 1, name: "kucing" }];

    findAll(name?: string): User[] {
        if (name) {
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }

    findById(id: number): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException()
        }
        return user
    }

    createUser(createUserDto: CreateUserDto): User {
        const newUser = { id: Date.now(), ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }
}
