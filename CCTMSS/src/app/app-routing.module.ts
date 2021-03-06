
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'viewRanger',component:EntryComponent},
  {path:'**',redirectTo:'home',pathMatch:"full"},
];

@NgModule
({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
