import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public products: any = [];

  public filters = {
    sizes: [],
    colors: []
  }
  public selectedSizes = [];
  public selectedColors = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }

  public addToCart(product) {
    this.dataService.addToCart(product);
  }

  displayColor(value: string) {
    if (this.selectedColors.includes(value)) {
      this.selectedColors.splice(this.selectedColors.indexOf(value), 1);
    } else {
      this.selectedColors.push(value);
    }
    this.filters.colors = this.selectedColors;
    this.products = this.dataService.filter(this.filters);
  }

  displaySize(value: string) {
    if (this.selectedSizes.includes(value)) {
      this.selectedSizes.splice(this.selectedSizes.indexOf(value), 1);
    } else {
      this.selectedSizes.push(value);
    }
    this.filters.sizes = this.selectedSizes;
    this.products = this.dataService.filter(this.filters);
  }
}
