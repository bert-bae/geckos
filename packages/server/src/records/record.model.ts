import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { RecordTypes, RecordData} from './record.types'

registerEnumType(RecordTypes, {
  name: 'RecordTypes'
})

@ObjectType()
class RecordDataType {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field(type => [String], { nullable: true })
  tags: string[];

  @Field()
  createdAt: string;

  @Field({ nullable: true })
  updatedAt: string;
}

@ObjectType()
export class Record {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  creator: string;

  @Field((type) => RecordTypes)
  type: RecordTypes

  @Field((type) => RecordDataType)
  data: RecordData;

  @Field((type) => ID, { nullable: true })
  parentId: string;

  @Field((type) => [Record], { nullable: true })
  children: Record[];
}