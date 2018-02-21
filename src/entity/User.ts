
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  constructor(id: number, name: String) {
    this.id = id
    this.name = name
  }

  @PrimaryGeneratedColumn()
  private id: number

  @Column({ length: 100 })
  private name: String

}