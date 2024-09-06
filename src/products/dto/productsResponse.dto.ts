import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ProductsDto } from "./products.dto";

@ObjectType()
class Meta {
    @Field(() => Int)
    count: Number;
}

@ObjectType()
export class ProductsResponseDto {
    @Field(() => [ProductsDto])
    data: ProductsDto[];

    @Field(() => Meta)
    meta: Meta;
}