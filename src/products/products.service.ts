import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

import { CreateProductsInput } from "./dto/create-product.input";
import { ProductsResponseDto } from "./dto/productsResponse.dto";
import { ResponseDto } from "src/dto/response.dto";
import { UpdateProductsInput } from "./dto/update-product.input";
import { ProductsDto } from "./dto/products.dto";

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<ProductsResponseDto> {

        const products = await this.prisma.products.findMany({
            where: { is_Active: true },
            include: {
                category_1: true,
            }
        });

        const count = await this.prisma.products.count()

        return {
            data: products || [], meta: { count: count }
        }

    }

    async findOne(id: number): Promise<ProductsDto> {
        const product = await this.prisma.products.findUnique({
            where: { products_id: id },
            include: {
                category_1: true,
            }
        })

        return product
    }

    async createProduct(product: CreateProductsInput): Promise<ResponseDto> {
        try {
            const { name, category_sub_level_1, category_sub_level_2, amount, price, cost_price, desc } = product;

            await this.prisma.products.create({
                data: {
                    name,
                    category_sub_level_1,
                    amount,
                    price,
                    cost_price,
                    desc
                }
            })

            return {
                status: 201,
                message: 'Product created successfully',
            };
        } catch (error) {
            console.error("Error creating product: ", error);
            return {
                status: 500,
                message: 'Failed to create product',
            };
        }
    }

    async updateProducts(id: number, product: UpdateProductsInput): Promise<ResponseDto> {
        try {
            const { category_sub_level_1, amount, price, cost_price, desc } = product;

            await this.prisma.products.update({
                where: { products_id: id },
                data: {
                    category_sub_level_1,
                    amount,
                    price,
                    cost_price,
                    desc
                }
            })

            return {
                status: 200,
                message: 'Product updated successfully',
            };
        } catch (error) {
            console.error("Error creating product: ", error);
            return {
                status: 500,
                message: 'Failed to updated product',
            };
        }

    }

    async deleteProducts(id: number): Promise<ResponseDto> {
        try {
            await this.prisma.products.update({
                where: { products_id: id },
                data: {
                    is_Active: false
                }
            })
            return {
                status: 200,
                message: 'Product deleted successfully',
            };
        } catch (error) {
            console.error("Error creating product: ", error);
            return {
                status: 500,
                message: 'Failed to updated product',
            };
        }
    }





}