import { Product } from "../interface";
import data from './data';
/**
 * 获取产品列表
 */
const apiGetProducts = () => {
    return new Promise<Product[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        });
    });
}
export default apiGetProducts;