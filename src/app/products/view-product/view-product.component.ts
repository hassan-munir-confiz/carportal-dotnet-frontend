import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  productId = 0;

  product : Product;

  constructor(private activatedRoute : ActivatedRoute,
          private productService : ProductsService) { 

    this.product = {} as Product;


  }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id
    });
    
    this.productService.getProduct(this.productId).subscribe(response=>{

      this.product = response.data;
    });

  }

}
