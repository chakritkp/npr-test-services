import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Category1Dto } from "src/category_sub_level_1/dto/category_sub_level_1.dto";
import { Category2Dto } from "src/category_sub_level_2/dto/category_sub_level_2.dto";

@ObjectType()
export class ProductsDto {

    @Field(() => Int)
    products_id: number;

    @Field(() => String)
    name: string;

    @Field(() => String)
    category_sub_level_1: string;

    @Field(() => Category1Dto)
    category_1: Category1Dto;

    @Field(() => [Category2Dto])
    category_sub_level_2?: Category2Dto[];

    @Field(() => Int)
    amount: number;

    @Field(() => Float)
    price: number;

    @Field(() => Float)
    cost_price: number;

    @Field(() => String, { nullable: true })
    desc?: string;

}