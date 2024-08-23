import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { AlertService } from '../../services/alert.service';
import { KENDO_BUTTON } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-manage-movie',
  standalone: true,
  imports: [KENDO_GRID, KENDO_BUTTON],
  templateUrl: './manage-movie.component.html',
  styleUrl: './manage-movie.component.css'
})
export class ManageMovieComponent {

  movies: Movie[] = [];

  constructor(private router : Router, private movieService : MovieService, private alertService : AlertService){}

  ngOnInit(){
    let user = localStorage.getItem("loggedin")

    if(!user){
      this.router.navigate(["/"])
    }

    this.load();
  }

  load(){
    this.movieService.getMovies().then(ms => this.movies = ms)
  }
  
  onAddMovie() {
    console.log('Add new movie');
  }

  onUpdateMovie(movie: Movie) {
    console.log('Update movie:', movie);
  }

  onDeleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie.id).then(() =>{
      this.alertService.showInfo(`فیلم ${movie.title} با موفقیت حذف شد`)
      this.load()
    })
  }
}
