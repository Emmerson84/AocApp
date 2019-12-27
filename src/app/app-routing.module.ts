import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearOverviewComponent } from './aoc-overview/aoc-year-overview.component';
import { DayDetailsComponent } from './aoc-overview/aoc-days/aoc-day.component';


const routes: Routes = [
  { path: 'year-overview/:year', component: YearOverviewComponent },
  { path: 'year-overview/:year/:day/:part', component: DayDetailsComponent},
  { path: 'year-overview', redirectTo: `year-overview/${new Date().getFullYear()}`, pathMatch: 'full'},
  { path: '', redirectTo: `year-overview/${new Date().getFullYear()}`, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
