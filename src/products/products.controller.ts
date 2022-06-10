import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { title } from "process";
import { Product } from "./products.model";
import { ProductsService } from "./products.service";

@ApiTags('Product')
@Controller('product')
export class ProductsController {
    constructor(private productService: ProductsService) {
    }

    @Post()
    addProduct(@Body() body: { title: string, description: string, price: number }) {
        const generatedId = this.productService.insertProduct(body.title, body.description, body.price);
        return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        const result = this.productService.getAllProducts()
        return result
    }

    @Get(':title')
    getProductByTitle(@Param('title') title: string) {
        const result = this.productService.getProductByTitle(title)
        return result
    }

    @Put(':id')
    updateProduct(@Param('id') productId: string, @Body() body: Product) {
        return this.productService.UpdateProduct(productId, body)
    }

    @Delete(':id')
    deleteProductById(@Param('id') productId: string) {
        return this.productService.deleteProductById(productId)
    }
}