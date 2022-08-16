import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  km: number;

  @Column({ type: "decimal", precision: 8, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column()
  veicle_type: string;

  @Column()
  img_wlp: string;

  @Column()
  img_galery: string;
}
