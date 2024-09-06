import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsResolver } from './products/products.resolver';
import { ProductsService } from './products/products.service';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { Category1Resolver } from './category_sub_level_1/category_sub_level_1.resolver';
import { Category1Service } from './category_sub_level_1/category_sub_level_1.service';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    })
  ],
  providers: [
    ProductsResolver, ProductsService, 
    Category1Resolver, Category1Service, 

    PrismaService
  ],
})
export class AppModule { }
