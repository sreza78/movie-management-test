import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Amélie',
      director: 'Jean-Pierre Jeunet',
      genre: 'Romantic Comedy',
      imageUrl: 'assets/images/amelie.webp'
    },
    {
      id: 2,
      title: 'The Intouchables',
      director: 'Olivier Nakache & Éric Toledano',
      genre: 'Comedy-Drama',
      imageUrl: 'assets/images/intouchables.webp'
    },
    {
      id: 3,
      title: 'Parasite',
      director: 'Bong Joon-ho',
      genre: 'Thriller',
      imageUrl: 'assets/images/parasite.webp'
    },
    {
      id: 4,
      title: 'The Avengers',
      director: 'Joss Whedon',
      genre: 'Action',
      imageUrl: 'assets/images/avengers.webp'
    },
    {
      id: 5,
      title: 'Kill Bill',
      director: 'Quentin Tarantino',
      genre: 'Action',
      imageUrl: 'assets/images/kill bill.webp'
    },
    {
      id: 6,
      title: 'Toy Story',
      director: 'John Lasseter',
      genre: 'Animation',
      imageUrl: 'assets/images/toy story.webp'
    },
    {
      id: 7,
      title: 'Catch Me If You Can',
      director: 'Steven Spielberg',
      genre: 'Crime',
      imageUrl: 'assets/images/catch me if you can.webp'
    },
    {
      id: 8,
      title: 'Mad Max: Fury Road',
      director: 'George Miller',
      genre: 'Action',
      imageUrl: 'assets/images/mad max.webp'
    },
    {
      id: 9,
      title: 'Up',
      director: 'Pete Docter & Bob Peterson',
      genre: 'Animation',
      imageUrl: 'assets/images/up.webp'
    },
    {
      id: 10,
      title: 'How to Train Your Dragon',
      director: 'Dean DeBlois & Chris Sanders',
      genre: 'Animation',
      imageUrl: 'assets/images/dragon.webp'
    },
    {
      id: 11,
      title: 'Finding Nemo',
      director: 'Andrew Stanton & Lee Unkrich',
      genre: 'Animation',
      imageUrl: 'assets/images/nemo.webp'
    }
  ];
  
  getMovies(): Promise<Movie[]> {
    return new Promise((res) =>{
      setTimeout(() => {
        return res(this.movies)
      }, 1500);
    })
  }

  
  getMovie(id : number): Promise<Movie> {
    return new Promise((res, rej) =>{
      let f = this.movies.find(m => m.id == id)
      if(f != null) return res(f)
      return rej()
    })
  }

  addMovie(movie: Movie): Promise<void> {
    return new Promise((res) =>{
      this.movies.push(movie);
      return res()
    })
  }

  updateMovie(movie: Movie): Promise<void> {
    return new Promise((res, rej) =>{
      const index = this.movies.findIndex(m => m.id === movie.id);
      if(index == -1) return rej()
      this.movies[index] = movie;
      return res()
    })
  }

  deleteMovie(id: number): Promise<void> {
    return new Promise((res) =>{
      this.movies = this.movies.filter(m => m.id !== id);
      return res()
    })
  }
}
