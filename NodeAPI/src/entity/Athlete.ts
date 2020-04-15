import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity("athlete", { schema: "final work" })
export class Athlete {
  @PrimaryColumn()
  Name: string;

  @Column("date", { name: "birthDate", nullable: true })
  birthDate: string;

  @PrimaryColumn()
  country: string;

  @OneToOne((type) => User, { nullable: true })
  @JoinColumn()
  createdBy: User;

  constructor(name?: string, birthDate?: string, country?: string) {
    this.Name = name;
    this.birthDate = birthDate;
    this.country = country;
  }

  @ManyToOne(
    (type) => User,
    (user) => user.athletes
  )
  user: User;
}
