import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { MatSidenavModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class AdminsModule { }
