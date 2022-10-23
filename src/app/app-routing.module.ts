import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './utils/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(
      m => m.AdminModule
    )
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
