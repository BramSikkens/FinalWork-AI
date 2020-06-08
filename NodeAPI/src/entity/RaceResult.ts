import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Athlete } from "./Athlete";
import { Race } from "./Race";
import { User } from "./User";

@Entity("results", { schema: "final work" })
export class RaceResult {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  Id: number;

  @ManyToOne((type) => Race, (race) => race.raceResults, {
    onDelete: "CASCADE",
  })
  race: Race;

  @ManyToMany((type) => Athlete, { cascade: true, onDelete: "CASCADE", onUpdate:"CASCADE"})
  @JoinTable()
  athletes: Athlete[];

  @Column({ nullable: true })
  lane: number;

  @Column({ nullable: true })
  rank: number;

  @Column("simple-array", { default: "" })
  splitTimes: string[];

  @Column({ nullable: true })
  totalTime: string;

  @OneToOne((type) => User, { nullable: true })
  @JoinColumn()
  createdBy: User;

  time: string;

  constructor(lane?: number, rank?: number, totalTime?: string) {
    this.lane = lane;
    this.rank = rank;
    this.totalTime = totalTime;
  }
}
