//decorator used to define angular modules
import { NgModule } from '@angular/core';
//classes used for configuring classes in angular
import { RouterModule, Routes } from '@angular/router';
//components defined in different files
import { DataListComponent } from './data-list/data-list.component';
import { ChartComponent } from './chart/chart.component';

//this block of code defines an array of routes and we have three of them
const routes: Routes = [
  //maps data-list url to component datalist component
  { path: 'data-list', component: DataListComponent },

  //maps chart url to component chartcomponent.
  { path: 'chart', component: ChartComponent }, // Add this route

  //resets to default url datalist when application starts.
  { path: '', redirectTo: '/data-list', pathMatch: 'full' },
];

// module organizes and bundles related components.
//ngmodule is a decorator used to define different modules
@NgModule({
  //this sets up the root routing configuration for the application
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
//this allows the module to be imported and used in other files
export class AppRoutingModule { }
