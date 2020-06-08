import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { Athlete } from "./Athlete";

@Entity("user", { schema: "final work" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "firstName", length: 255 })
  FirstName: String;

  @Column("varchar", { name: "lastName", length: 255 })
  LastName: String;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "profileImage", length: 255 })
  profileImage: String;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "role", length: 50 })
  role: string;

  @OneToOne((type) => Athlete, { nullable: true, cascade: true })
  @JoinColumn()
  athlete: Athlete;
}
