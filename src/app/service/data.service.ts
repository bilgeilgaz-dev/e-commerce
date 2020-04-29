import { Injectable } from '@angular/core';
import products from '../../assets/products.json';

@Injectable()
export class DataService {
  public list = []
  public products = products;
  public filteredProducts = [];

  constructor() { }

  addToCart(product) {
    this.list.push(product);
  }
  getList() {
    return this.list;
  }

  getProducts() {
    return products;
  }

  public filter(filters) {

    this.filteredProducts = [];
    if (!filters.colors.length && !filters.sizes.length) {
      return this.getProducts();
    }
    if (filters.colors.length && filters.sizes.length) {
      this.products.filter((p) => {
        if (filters.colors.includes(p.color) && filters.sizes.includes(p.size)) {
          this.filteredProducts.push(p);
        }
      })
    } else if (filters.sizes.length && !filters.colors.length) {
      this.products.filter((p) => {
        if (filters.sizes.includes(p.size)) {
          this.filteredProducts.push(p);
        }
      })
    } else if (filters.colors.length && !filters.sizes.length) {

      this.products.filter((p) => {
        if (filters.colors.includes(p.color)) {
          this.filteredProducts.push(p);
        }
      })
    }
    return this.filteredProducts;
  }

}