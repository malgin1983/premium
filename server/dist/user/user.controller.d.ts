import { UserService } from './user.service';
import { UserModel } from './user.model';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUser(): Promise<UserModel[]>;
    getUser(id: number): Promise<UserModel>;
    createUser(data: UserModel): Promise<UserModel>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
