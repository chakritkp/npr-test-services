import { Field, Float, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateProductsInput {

    @Field(() => String)
    name?: string;

    @Field(() => String)
    category_sub_level_1: string;

    @Field(() => [String], { nullable: true })
    category_sub_level_2?: string[];

    @Field(() => Int)
    amount: number;

    @Field(() => Float)
    price: number;

    @Field(() => Float)
    cost_price: number;

    @Field(() => String, { nullable: true })
    desc?: string;

}