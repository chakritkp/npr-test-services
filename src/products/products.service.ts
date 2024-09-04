import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ProductDto } from "./dto/products.dto";

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<ProductDto[]> {
        const products = [{ name: 'test', decs: 'test' }]
        // const products = await this.prisma.product.findMany();
        return products.map(product => ({
            name: product.name,
            decs: product.decs,
        }));
    }

}