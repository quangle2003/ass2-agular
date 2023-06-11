import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: 'product',pathMatch: 'full'},
  { path: "products", component: ProductListComponent},
  { path: "product-create", component: ProductCreateComponent},
  { path: "product-update/:id", component: ProductUpdateComponent},
  { path: "producs-detail/:id", component: ProductDetailComponent},

  { path: '**', component: NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
