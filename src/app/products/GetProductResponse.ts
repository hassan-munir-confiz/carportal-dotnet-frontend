
import { Product } from '../products/Product';

export interface GetProductResponse {

    message : String,
    isSuccess : boolean,
    data : Product
}