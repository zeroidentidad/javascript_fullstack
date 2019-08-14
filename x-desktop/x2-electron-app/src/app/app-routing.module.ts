import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './providers/auth';
import {EventComponent} from "./components/event/event.component";
import {LieuxComponent} from "./components/lieux/lieux.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'event',
      component: EventComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'lieux',
      component: LieuxComponent,
      canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
