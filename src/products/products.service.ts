import { ImATeapotException, Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        let product = new Product(Date.now().toString(), title, desc, price)
        this.products.push(product)
        return product.id
    }

    getAllProducts() {
        return [...this.products]
    }

    getProductByTitle(title: string) {
        let result = this.products.filter((item: any) => item.title === title)
        if (result.length < 1) {
            throw new ImATeapotException("nothing")
        }
        return result
    }

    UpdateProduct(id: string, body: Product) {
        let index = this.products.findIndex((item: any) => item.id === id);
        this.products[index].title = body.title;
        this.products[index].description = body.description;
        this.products[index].price = body.price;

        return this.products[index];
    }

    deleteProductById(id: string) {
        let index = this.products.findIndex((item: any) => item.id === id)

        if (index > -1) {
             this.products.splice(index, 1)
        }
        return "DATA BERHASIL DIHAPUS"
    }
} 