import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-brand',
  templateUrl: './view-all-products-by-brand.component.html',
  styleUrls: ['./view-all-products-by-brand.component.scss']
})
export class ViewAllProductsByBrandComponent implements OnInit {

  brand = '';

  productList : Product [] ;

  constructor(private activatedRoute : ActivatedRoute,private productService : ProductsService) {

    this.productList = []

   }
  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(

      data => {
        this.brand = data.brand
      }

    );

    this.productService.searchProductByBrand(this.brand).subscribe(response => {
      this.productList = response.data;
    })

  
  }

}
