import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductsService } from "./products.service";
import { ProductDto } from "./dto/products.dto";

@Resolver(() => ProductDto)
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }

    @Query(() => [ProductDto])
    async getProducts(): Promise<ProductDto[]> {
        return this.productsService.findAll();
    }


}