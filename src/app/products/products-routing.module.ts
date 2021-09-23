import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import {ViewAllProductsByBrandComponent} from './view-all-products-by-brand/view-all-products-by-brand.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: ViewAllProductsComponent },
{ path: 'create-product', component: CreateProductComponent } ,
{path: 'searchByBrand/:brand', component: ViewAllProductsByBrandComponent},
{ path: 'delete-product/:id', component: DeleteProductComponent } ,
{ path: 'view-product/:id', component: ViewProductComponent } ,
{ path: 'update-product/:id', component: UpdateProductComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
