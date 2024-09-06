import { Field, ObjectType } from "@nestjs/graphql";
import { Category2Dto } from "src/category_sub_level_2/dto/category_sub_level_2.dto";

@ObjectType()
export class Category1Dto {
    @Field(() => String)
    name: string;

    @Field(() => [Category2Dto], { nullable: true })
    sub_level_2_id_list?: Category2Dto[];

}
