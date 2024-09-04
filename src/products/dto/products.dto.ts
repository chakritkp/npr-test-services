import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ProductDto {
    @Field(() => String)
    name: string

    @Field(() => String)
    decs: string
}