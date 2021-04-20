import { Model } from 'sequelize-typescript';
export declare class UserModel extends Model<UserModel> {
    id: string;
    name: string;
    email: string;
    role: string;
}
