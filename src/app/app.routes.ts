import { Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';

export const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'featured-product', component: FeaturedProductComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
