import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ob';
  isCart = false;
  constructor(private router: Router, private location: Location) { }

  public goToCart() {

    if (!this.isCart) {
      this.router.navigateByUrl('/cart');
    } else {
      this.location.back();
    }

    this.isCart = !this.isCart;

  }

}
