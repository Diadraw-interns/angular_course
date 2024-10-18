import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AccountComponent } from './account/account.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    AuthModule,
    AccountComponent,
    ContactsComponent,
  ],
})
export class DashboardModule {}
