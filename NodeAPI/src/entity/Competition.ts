import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Race } from "./Race";
import { User } from "./User";

@Entity("competition", { schema: "final work" })
@Unique(["year", "place", "type"])
export class Competition {
  @PrimaryGeneratedColumn("uuid")
  Id: string;

  @Column("varchar", { name: "Place", length: 24 })
  place: string | null;

  @Column("varchar", { name: "Type", length: 24 })
  type: string | null;

  @Column("year", { name: "Year" })
  year: number;

  @Column("varchar", { name: "Title", nullable: true, length: 40 })
  title: string;

  @Column("datetime", { name: "StartDate", nullable: true })
  startDate: Date;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date;

  @OneToMany(
    type => Race,
    race => race.competition,
    {
      cascade: true,
      nullable: true
    }
  )
  races: Race[];

  @OneToOne(type => User, { nullable: true, cascade: true })
  @JoinColumn()
  createdBy: User;

  constructor(
    place?: string,
    type?: string,
    title?: string,
    startDate?: Date,
    endDate?: Date,
    year?: number
  ) {
    this.place = place;
    this.type = type;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.year = year;
  }
}
