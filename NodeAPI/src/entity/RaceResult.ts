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

  @ManyToOne((type) => Race, (race) => race.raceResults)
  race: Race;

  @ManyToMany((type) => Athlete, { cascade: true })
  @JoinTable()
  athletes: Athlete[];

  @Column({ nullable: true })
  lane: number;

  @Column({ nullable: true })
  rank: number;

  @Column({ nullable: true })
  splitTime1: string;

  @Column({ nullable: true })
  splitTime2: string;

  @Column({ nullable: true })
  splitTime3: string;

  @Column({ nullable: true })
  totalTime: string;

  @OneToOne((type) => User,{nullable:true})
  @JoinColumn()
  createdBy: User;

  time: string;

  constructor(
    lane?: number,
    rank?: number,
    splitTime1?: string,
    splitTime2?: string,
    splitTime3?: string,
    totalTime?: string
  ) {
    this.lane = lane;
    this.rank = rank;
    this.splitTime1 = splitTime1;
    this.splitTime2 = splitTime2;
    this.splitTime3 = splitTime3;
    this.totalTime = totalTime;
  }
}
