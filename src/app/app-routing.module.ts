import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobberComponent } from './jobber/jobber.component';






const routes: Routes = [
  { path: '', component: JobberComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
