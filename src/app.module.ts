import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ItemsModule } from './items/items.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

    @Module({
      imports: [
      GraphQLModule.forRoot({
      driver: ApolloDriver,
      // debug: false,
      playground: false,
      autoSchemaFile: join( process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
        ]
      }),
      ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
