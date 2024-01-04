import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { 

  }
  getProduits(category:string):Observable<Produit[]> {
    const categoryUrl=category ? `/category/${category}`:'';
    return this.http.get<Produit[]>(`https://fakestoreapi.com/products${categoryUrl}?sort=desc`);
  }
  addEditProduit(postData: any, selectedpdt:any){
    if (!selectedpdt) {
      return this.http.post('https://fakestoreapi.com/products',postData);
    }else{
      return this.http.put(`https://fakestoreapi.com/products/${selectedpdt.id }`,postData);
    }

  }
  deleteProduit(produitId:number){
    return this.http.delete(`https://fakestoreapi.com/products/${produitId}`);

  }
  getCategories():Observable <string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }
}
