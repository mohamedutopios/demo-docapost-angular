import { Component } from '@angular/core';
import { Product } from '../../utils/interfaces/product';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    {id: 1, name: 'Product 1', description: 'Description 1', price: 100},
    {id: 2, name: 'Product 2', description: 'Description 2', price: 200},
    {id: 3, name: 'Product 3', description: 'Description 3', price: 300},
    {id: 4, name: 'Product 4', description: 'Description 4', price: 400},
    {id: 5, name: 'Product 5', description: 'Description 5', price: 500},
  ];

  constructor(private router: Router) { } 

  goToProductDetails(id: number){
    console.log(this.router.url);
    console.log(this.router.url.includes('products'));
    this.router.navigate(['products', id], {queryParams: {keyword: 'Angular'}});
  }

}
