import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class UserModel extends Model<UserModel> {
  @Column({
    unique: true,
    type: DataType.NUMBER,
    allowNull: false,
    primaryKey: true,
  })
  id: string;
  @Column({
    type: DataType.STRING,
    
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;
}
