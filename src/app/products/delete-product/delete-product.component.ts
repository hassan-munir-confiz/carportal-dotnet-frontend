import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../Product';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  productId = 0;

  productDetail : Product;

  constructor(private activatedRoute : ActivatedRoute,
    private productService : ProductsService,private router : Router) { 

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

  deleteProduct(form : NgForm){

      this.productService.deleteProduct(this.productId).subscribe(response => {
  
        this.router.navigate([''])

        });
    
      }

}
