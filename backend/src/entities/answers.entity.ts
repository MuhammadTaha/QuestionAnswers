import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  questionNo: string;

  @Column('text')
  answer: string;

  @Column()
  userId: string;

  @Column()
  creationDate: string;
}