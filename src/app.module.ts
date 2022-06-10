import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ProductsModule } from './products/products.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [AuthModule, BookmarkModule, ProductsModule, UsersModule, TodosModule]
})
export class AppModule { }
