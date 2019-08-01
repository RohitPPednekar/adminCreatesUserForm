import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {
    path: '',
      component: AdminComponent,
    },
    {
      path: 'admin',
      component: AdminComponent,
    },
    {
      path: 'userform',
      component: UserFormComponent,
    },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
