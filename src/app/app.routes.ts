import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, children: [
        { path: 'dashboard', component: DashboardComponent }
    ]},
    { path: '**', component: PageNotFoundComponent }
];
