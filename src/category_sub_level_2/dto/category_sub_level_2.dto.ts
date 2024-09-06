import { Field, ObjectType } from "@nestjs/graphql";
import { Category1Dto } from "src/category_sub_level_1/dto/category_sub_level_1.dto";

@ObjectType()
export class Category2Dto {
    @Field(() => String)
    name: string;

}