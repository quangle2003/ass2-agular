import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, 
    ProductCreateComponent, 
    ProductUpdateComponent, 
    ProductDetailComponent, 
    ProductListComponent, 
    NotFoundComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
