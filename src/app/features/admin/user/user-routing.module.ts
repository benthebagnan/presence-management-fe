import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './user.component';

const routes: Routes = [

  { path: '', component: UserComponent },
//   { path: 'edit/:uid', component: UEditComponent },
  { path: 'add', component: UserFormComponent },
  { path: 'edit', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }