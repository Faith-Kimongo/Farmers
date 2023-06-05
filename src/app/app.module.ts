//decorator used to define angular modules
import { NgModule } from '@angular/core';
//neccessary to import required dependencies to run our application on browser
import { BrowserModule } from '@angular/platform-browser';

//these lines import modules, components used in the application
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { FormsModule } from '@angular/forms';

//this block defines appmodule using the decorator
@NgModule({
  //here we have all the components for this module
  declarations: [
    AppComponent,
    DataListComponent,
    ChartComponent
  ],
  //specifies modules that appmodule depend on
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  //in this array we can provide services for components in this module
  providers: [],
  //specifies the root component of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
