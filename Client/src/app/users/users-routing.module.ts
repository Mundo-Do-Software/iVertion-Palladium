import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from '../manager/manager.component';
import { UsersListComponent } from './users-list/users-list.component';
import { authGuard } from '../auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'manager/users', component: ManagerComponent, canActivate: [authGuard], children: [
    {path: 'list', component: UsersListComponent},
    {path: 'user/:id', component: UserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
