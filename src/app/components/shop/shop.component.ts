import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  categories = [
    { name: 'Category 1', image: 'assets/images/category1.png' },
    { name: 'Category 2', image: 'assets/images/category2.png' },
    { name: 'Category 3', image: 'assets/images/category3.png' },
    { name: 'Category 4', image: 'assets/images/category4.png' },
    { name: 'Category 5', image: 'assets/images/category5.png' },
    { name: 'Category 6', image: 'assets/images/category6.png' }
  ];
}
