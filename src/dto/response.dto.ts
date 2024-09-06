import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class ResponseDto {
    @Field(() => Int)
    status: number;

    @Field(() => String)
    message: string;
}