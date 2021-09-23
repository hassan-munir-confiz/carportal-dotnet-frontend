import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent implements OnInit {

  productList : Product [] ;

  constructor(private productService : ProductsService) {

    this.productList = []

   }

  ngOnInit(): void {
  
    
    this.productService.getAllProducts().subscribe(response => {

      this.productList = response.data;
    });
  
  
  }


}
