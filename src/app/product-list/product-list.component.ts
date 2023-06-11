import { Component } from '@angular/core';
import { IProduct } from './../interface/IProduct';
import { ProductService } from './../sevice/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[] =[];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error.message)
      }
    );
    // delete(id: string) {
    //   this.productService.deleteProduct(id).subscribe(() => {
    //     this.products = this.products.filter((product) => product.id != id)
    //   })
    // }
  }
}
