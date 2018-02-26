
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Table } from "typeorm";
import { text } from "body-parser";

@Entity()
export class User extends BaseEntity {

  constructor(id: number, name: string) {
    super()
    this.id = id
    this.name = name
  }

  @PrimaryGeneratedColumn()
  private id: number

  @Column({ type: "text", nullable: false })
  private name: string

  public getName(): string {
    return this.name
  }

}