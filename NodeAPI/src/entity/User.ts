import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";
import { Athlete } from "./Athlete";

@Entity("user", { schema: "final work" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "role", length: 50 })
  role: string;

  @OneToMany(
    type => Athlete,
    athlete => athlete.user,
    {
      cascade: true,
      nullable: true
    }
  )
  @JoinColumn()
  athletes: Athlete[];
}
