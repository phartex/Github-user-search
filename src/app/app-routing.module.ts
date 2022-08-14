import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {
    path:'',
    component: GithubComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
