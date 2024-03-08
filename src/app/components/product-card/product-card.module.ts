import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class ProductCardModule { }
