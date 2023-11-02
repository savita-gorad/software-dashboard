import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopCardComponent } from './shared/top-card/top-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTableComponent } from './shared/dashboard-table/dashboard-table.component';
import { NewUserSectionComponent } from './shared/new-user-section/new-user-section.component';
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnChartComponent } from './shared/column-chart/column-chart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCardComponent,
    DashboardComponent,
    DashboardTableComponent,
    NewUserSectionComponent,
    SideNavbarComponent,
    TopNavbarComponent,
    LineChartComponent,
    ColumnChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,CommonModule,NgApexchartsModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
