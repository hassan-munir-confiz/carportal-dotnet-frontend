import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;

  productDetail : Product;


  constructor(private activatedRoute : ActivatedRoute,
    private productService : ProductsService,private router: Router) {

    this.productDetail = {} as Product;

   }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id
    });
  
    this.productService.getProduct(this.productId).subscribe(response => {

      this.productDetail = response.data;

    });

  }


  updateProduct(form : NgForm){

    let updateProduct = {
        id : this.productId,
        name : form.value.product_name,
        description : form.value.product_description,
        price : form.value.product_price,
        rating : form.value.product_rating,
        imageUrl : form.value.product_imageUrl,
        brand : form.value.product_brand
    }

    this.productService.updateProduct(this.productId,updateProduct).subscribe(response => {

      this.router.navigate([''])

    });

  }
}
