import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ManageMovieComponent } from './manage-movie/manage-movie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'manage', component: ManageMovieComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: '**',   redirectTo: '', pathMatch: 'full' },
];

