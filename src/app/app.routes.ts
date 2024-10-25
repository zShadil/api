import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '' ,component: HomeComponent
  },
  {
    path: 'contact' ,component: ContactComponent
  },
  {
    path: 'products/:id' ,component: ProductsComponent
  }




];
