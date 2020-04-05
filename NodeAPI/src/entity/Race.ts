import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Competition } from "./Competition";
import { RaceResult } from "./RaceResult";
import { User } from "./User";

@Entity("race", { schema: "final work" })
export class Race {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: number;

  @Column("datetime", { name: "Date" })
  date: Date | null;

  @Column()
  competitionRound: string;

  @Column()
  distance: string;

  @Column("enum", {
    name: "BoatType",
    enum: ["K1", "K2", "K4", "C1", "C2", "C4"],
  })
  boatType: "K1" | "K2" | "K4" | "C1" | "C2" | "C4";

  @Column("enum", { name: "Sex", enum: ["MALE", "FEMALE"] })
  sex: "MALE" | "FEMALE";

  @Column("enum", {
    name: "Category",
    enum: ["JUNIOR", "U23", "SENIOR", "MASTER"],
  })
  category: "JUNIOR" | "U23" | "SENIOR" | "MASTER";

  @ManyToOne((type) => Competition, (competition) => competition.races)
  competition: Competition;

  @OneToMany((type) => RaceResult, (raceResults) => raceResults.race, {
    cascade: true,
    nullable: true,
  })
  raceResults: RaceResult[];

  @OneToOne((type) => User, { nullable: true })
  @JoinColumn()
  createdBy: User;

  time: string;

  constructor(distance?: string) {
    this.distance = distance;
  }
}
