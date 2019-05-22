import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonGetComponent } from './person-get/person-get.component';

const routes: Routes = [
  {
    path: 'person/create',
    component: PersonAddComponent
  },
  {
    path: 'person/edit/:id',
    component: PersonEditComponent
  },
  {
    path: 'person',
    component: PersonGetComponent
  },
  {
    path: '',
    redirectTo: '/person',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
