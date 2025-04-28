import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-product.component.html',
  styleUrl: './featured-product.component.css'
})
export class FeaturedProductComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  products = [
    { name: 'Product 1', image: 'assets/images/product1.png' },
    { name: 'Product 2', image: 'assets/images/product2.png' },
    { name: 'Product 3', image: 'assets/images/product3.png' },
    { name: 'Product 4', image: 'assets/images/product4.png' },
    { name: 'Product 5', image: 'assets/images/product5.png' },
    { name: 'Product 6', image: 'assets/images/product1.png' },
    { name: 'Product 7', image: 'assets/images/product2.png' },
    { name: 'Product 8', image: 'assets/images/product3.png' },
    { name: 'Product 9', image: 'assets/images/product4.png' },
    { name: 'Product 10', image: 'assets/images/product5.png' }
  ];

  displayedProducts: any[] = [];
  currentIndex = 0;
  private autoSlideInterval: any;
  private isTransitioning = false;
  private readonly SLIDE_DURATION = 1500;
  private readonly AUTO_SLIDE_INTERVAL = 1000;
  private readonly PAUSE_DURATION = 10;
  private readonly VISIBLE_PRODUCTS = 5;

  ngOnInit() {
    this.initializeSlider();
  }

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  initializeSlider() {
    this.updateDisplayedProducts();
  }

  private updateDisplayedProducts() {
    const start = this.currentIndex;
    const end = start + this.VISIBLE_PRODUCTS;
    
    // Add entering class to new products
    const newProducts = this.products.slice(start, end);
    if (end > this.products.length) {
      const remaining = end - this.products.length;
      newProducts.push(...this.products.slice(0, remaining));
    }
    
    // Apply transition classes
    this.displayedProducts = newProducts.map(product => ({
      ...product,
      state: 'entering'
    }));

    // Remove transition classes after animation
    setTimeout(() => {
      this.displayedProducts = this.displayedProducts.map(product => ({
        ...product,
        state: ''
      }));
    }, 50);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isTransitioning) {
        this.slideNext();
      }
    }, this.AUTO_SLIDE_INTERVAL);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  slideNext() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    
    // Add exiting class to current products
    this.displayedProducts = this.displayedProducts.map(product => ({
      ...product,
      state: 'exiting'
    }));

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
      this.updateDisplayedProducts();
      
      setTimeout(() => {
        this.isTransitioning = false;
        if (!this.isTransitioning) {
          this.startAutoSlide();
        }
      }, this.PAUSE_DURATION);
    }, this.SLIDE_DURATION);
  }

  slidePrev() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    
    // Add exiting class to current products
    this.displayedProducts = this.displayedProducts.map(product => ({
      ...product,
      state: 'exiting'
    }));

    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
      this.updateDisplayedProducts();
      
      setTimeout(() => {
        this.isTransitioning = false;
        if (!this.isTransitioning) {
          this.startAutoSlide();
        }
      }, this.PAUSE_DURATION);
    }, this.SLIDE_DURATION);
  }

  onMouseEnter() {
    this.stopAutoSlide();
  }

  onMouseLeave() {
    if (!this.isTransitioning) {
      this.startAutoSlide();
    }
  }
}
