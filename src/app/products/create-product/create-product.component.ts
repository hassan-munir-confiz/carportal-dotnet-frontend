import { Component, OnInit } from '@angular/core'
import { NgForm} from '@angular/forms'
import {  Router } from '@angular/router'
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService : ProductsService,private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(form : NgForm ) {

    let newProduct = {

      name : form.value.product_name,
      description : form.value.product_description,
      price : form.value.product_price,
      rating : form.value.product_rating,
      brand : form.value.product_brand,
      imageUrl : form.value.product_imageUrl
    }

    console.log(newProduct)

    this.productService.createProduct(newProduct).subscribe(data => {

      this.router.navigate([''])

    });



  }

}
