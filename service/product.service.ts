import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[];
  constructor() {
    this.products = [
      { id: 'p1', name: 'Shirt Women Roadster', price: 600, photo: 'assets/img/shirtw.jpg' },
      { id: 'p2', name: 'Master Harbour Men Shirt', price: 200, photo: 'assets/img/shirtm.jpg' },
      { id: 'p3', name: 'Men Fashion stole', price: 300, photo: 'assets/img/stol.jpg' },
      { id: 'p4', name: 'Women Fashion Hat', price: 200, photo: 'assets/img/hat.jpg' },
      { id: 'p5', name: 'Hoodie Campus Sutra', price: 300, photo: 'assets/img/coatw.jpg' },
      { id: 'p6', name: 'Nike Men Shoe', price: 500, photo: 'assets/img/shoem.jpg' },
      { id: 'p7', name: 'Kids Fashion wear ', price: 2000, photo: 'assets/img/kidm.jpg' },
      { id: 'p8', name: 'Girl Frock', price: 1000, photo: 'assets/img/DRE.jpg' },
      { id: 'p9', name: 'Converse Shoe ', price: 1500, photo: 'assets/img/insta-4.jpg' }

  ];
}


findAll(): Product[] {
  return this.products;
}

find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

public getSelectedIndex(id: string) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}

}


   
  

  

  



