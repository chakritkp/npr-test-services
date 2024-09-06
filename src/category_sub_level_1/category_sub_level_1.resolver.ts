import { Query, Resolver } from "@nestjs/graphql";
import { Category1Dto } from "./dto/category_sub_level_1.dto"
import { Category1Service } from "./category_sub_level_1.service";

@Resolver()
export class Category1Resolver {
    constructor(private readonly categoryService: Category1Service) { }

    @Query(() => [Category1Dto])
    async getCategory1(): Promise<Category1Dto[]> {
        return this.categoryService.findAll()
    }

}