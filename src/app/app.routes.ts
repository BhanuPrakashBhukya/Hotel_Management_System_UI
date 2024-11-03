import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'branches', loadChildren:() => import('./hotel-branches/hotel-branches.module').then(m => m.HotelBranchesModule)},
    { path: '**', component: PageNotFoundComponent }
];
