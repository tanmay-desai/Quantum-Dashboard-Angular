import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { FilterComponent } from './filter/filter.component';
import { DividerComponent } from './divider/divider.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [DashboardComponent, TabsComponent, FilterComponent, DividerComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
