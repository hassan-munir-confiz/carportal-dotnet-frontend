import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './Product'
import { Observable } from 'rxjs';
import { ProductResponse } from './ProductResponse';
import { GetProductResponse } from './GetProductResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://carportallatest-env.eba-nkvpvimt.us-east-2.elasticbeanstalk.com/'

  constructor(private httpClient : HttpClient) { }

  createProduct(productsBody : any) : Observable<Product>{

    const productsUrl = this.baseUrl+'car/createCar';

    return this.httpClient.post<Product>(productsUrl,productsBody);

  }
  
  getAllProducts() : Observable<ProductResponse>{
    const productsUrl = this.baseUrl+'car/getCars';

    return this.httpClient.get<ProductResponse>(productsUrl);
  }


  getProduct(productId : number) : Observable<GetProductResponse>{
    const productsUrl = this.baseUrl+'car/getCar/'+productId;

    return this.httpClient.get<GetProductResponse>(productsUrl);
  }


  updateProduct(productId : any,productsBody : any) : Observable<GetProductResponse>{

    const productsUrl = this.baseUrl+'car/updateCar/';

    return this.httpClient.put<GetProductResponse>(productsUrl,productsBody);

  }


  deleteProduct(productId : any) : Observable<GetProductResponse>{
    const productsUrl = this.baseUrl+'car/deleteCar/'+productId;

    return this.httpClient.delete<GetProductResponse>(productsUrl);

  }

  searchProductByBrand(brand : any) : Observable<ProductResponse>{

    const productsUrl = this.baseUrl+'car/getCarsByBrand/'+brand;

    return this.httpClient.get<ProductResponse>(productsUrl);
  }
}