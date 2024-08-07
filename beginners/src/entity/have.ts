// src/entity/have.ts
import {  Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Tag } from './tag';
import { Ressource } from './ressource';
import type {Relation} from 'typeorm'
@Entity('have')
export class Have {
  @PrimaryColumn('uuid')
  tag_uuid!: string;

  @PrimaryColumn('uuid')
  ressource_uuid!: string;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'tag_uuid' })
  tag!: Relation<Tag>;

  @ManyToOne(() => Ressource)
  @JoinColumn({ name: 'ressource_uuid' })
  ressource!: Relation<Ressource>;
}
