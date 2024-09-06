import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Category1Dto } from "./dto/category_sub_level_1.dto";

@Injectable()
export class Category1Service {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<Category1Dto[]> {
        const categories = await this.prisma.category_sub_level_1.findMany({
            include: {
                sub_level_2_id_list: true,
            }
        })
        return categories
    }
}