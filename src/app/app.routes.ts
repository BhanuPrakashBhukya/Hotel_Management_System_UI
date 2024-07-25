import { Routes } from '@angular/router';
import { LoginComponent } from './log-in/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: '', component: HomePageComponent, children: [
        { path: 'dashboard', component: DashboardComponent }
    ]},
    { path: '**', component: PageNotFoundComponent }
];
