import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductsService } from "./products.service";
import { CreateProductsInput } from "./dto/create-product.input";
import { ResponseDto } from "src/dto/response.dto";
import { ProductsResponseDto } from "./dto/productsResponse.dto";
import { UpdateProductsInput } from "./dto/update-product.input";
import { ProductsDto } from "./dto/products.dto";

@Resolver()
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }

    @Query(() => ProductsResponseDto)
    async getProducts(): Promise<ProductsResponseDto> {
        return await this.productsService.findAll()
    }

    @Query(() => ProductsDto)
    async getProduct(
        @Args('id') id: number,
    ): Promise<ProductsDto> {
        return await this.productsService.findOne(id)
    }

    @Mutation(() => ResponseDto)
    async createProducts(
        @Args('input') input: CreateProductsInput
    ): Promise<ResponseDto> {
        return this.productsService.createProduct(input)
    }

    @Mutation(() => ResponseDto)
    async updateProducts(
        @Args('id') id: number,
        @Args('input') input: UpdateProductsInput
    ): Promise<ResponseDto> {
        return this.productsService.updateProducts(id, input);
    }

    @Mutation(() => ResponseDto)
    async deleteProducts(
        @Args('id') id: number,
    ): Promise<ResponseDto> {
        return this.productsService.deleteProducts(id)
    }


}