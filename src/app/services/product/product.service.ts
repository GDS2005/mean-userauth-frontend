import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductCreate, ProductResults } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/v1/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResults>(this.apiUrl).pipe(
      map((response: ProductResults) => response.results)
    );
  }

  getProductById(id: String): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  createProduct(product: ProductCreate): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: String, product: ProductCreate): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<Product>(url, product);
  }

  deleteProduct(id: String): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  uploadImage(file: File | null) {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    return this.http.post('http://localhost:3000/v1/files/', formData);
  }
}
