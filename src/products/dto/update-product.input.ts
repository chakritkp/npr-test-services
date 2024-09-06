import { InputType, PartialType } from "@nestjs/graphql";
import { CreateProductsInput } from "./create-product.input";

@InputType()
export class UpdateProductsInput extends PartialType(CreateProductsInput) {}