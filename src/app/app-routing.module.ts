import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleUserComponent } from './component/single-user/single-user.component';
import { AllUserComponent } from './component/all-user/all-user.component';

const routes: Routes = [
  { path: '', component: AllUserComponent },
  { path: 'allusers', component: AllUserComponent },
  { path: 'singleuser/:id', component: SingleUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
