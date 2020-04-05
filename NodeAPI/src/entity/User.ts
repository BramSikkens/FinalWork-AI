import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Athlete } from "./Athlete";

@Entity("user", { schema: "final work" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "role", length: 50 })
  role: string;

  @OneToOne((type) => Athlete, { nullable: true })
  @JoinColumn()
  athlete: Athlete;
}
