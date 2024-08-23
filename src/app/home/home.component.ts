import { Component } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { KENDO_GRIDLAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTON } from '@progress/kendo-angular-buttons';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, KENDO_GRIDLAYOUT, KENDO_BUTTON,KENDO_INDICATORS, MovieItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public user! : User | null;
  public loading = true;
  public movies! : Movie[];

  constructor(private movieService : MovieService, private router : Router){

  }

  ngOnInit(){
    let data = localStorage.getItem("loggedin");
    if(data) this.user = JSON.parse(data)

    this.loading = true;
    this.movieService.getMovies().then(result =>{
      this.movies = result;
      this.loading = false
    })
  }

  go_to_login(){
    this.router.navigate(["/login"])
  }

  logout(){
    localStorage.removeItem("loggedin")
    this.user = null
  }
}
