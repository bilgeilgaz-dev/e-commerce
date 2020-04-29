import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  public products = [];
  public cart = [];
  public total: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getList();
    // this.total = this.dataService.calculateToTal();
    this.calculateTotal();
  }

  calculateTotal() {
    this.products.forEach(element => {
      let price = Number(element.price.slice(0, 5));
      this.total = price + this.total;
    });
  }

}
