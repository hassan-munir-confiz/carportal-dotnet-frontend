
import { Product } from '../products/Product';

export interface ProductResponse {

    message : String,
    isSuccess : boolean,
    data : Product[]
}