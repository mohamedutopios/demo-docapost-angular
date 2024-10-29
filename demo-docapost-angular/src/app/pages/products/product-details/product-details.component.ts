import { Component } from '@angular/core';
import { Product } from '../../../utils/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: Product;
  keyword: string;

  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 400 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 500 },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.product = this.products.find((p) => p.id == id);

    this.route.queryParams.subscribe((params) => {
      this.keyword = params['keyword'];
      console.log("keyword : " + this.keyword);
    });
  
  }
}
