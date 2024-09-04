import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsResolver } from './products/products.resolver';
import { ProductsService } from './products/products.service';
import { join } from 'path';
import { PrismaService } from './prisma.service';
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
  providers: [ProductsResolver, ProductsService, PrismaService],
})
export class AppModule { }
