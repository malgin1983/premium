import { Repository } from 'typeorm';
import { UserModel } from './user.model';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserModel>);
    getAllUser: () => Promise<UserModel[]>;
    getUser: (id: number) => Promise<UserModel>;
    addUser: (user: UserModel) => Promise<UserModel>;
    deleteUser: (id: number) => Promise<import("typeorm").DeleteResult>;
}
