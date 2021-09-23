import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {FormsModule , NgForm , ReactiveFormsModule} from '@angular/forms';
import { ViewAllProductsByBrandComponent } from './view-all-products-by-brand/view-all-products-by-brand.component'


@NgModule({
  declarations: [ProductsComponent, 
    CreateProductComponent, 
    ViewProductComponent, 
    ViewAllProductsComponent, 
    UpdateProductComponent, 
    DeleteProductComponent, 
    ViewAllProductsByBrandComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
