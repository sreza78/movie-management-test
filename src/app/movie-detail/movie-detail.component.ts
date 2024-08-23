import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { KENDO_CARD } from '@progress/kendo-angular-layout';
import { KENDO_TEXTAREA } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [KENDO_CARD, KENDO_TEXTAREA, FormsModule, CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  public movie! : Movie | null;
  newComment: string = '';
  
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private movieService : MovieService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.movieService.getMovie(params['id']).then((m) => {
        m.comments = [];
        m.comments?.push({ id: 1, movieId: m.id, userId: 1, content: 'فیلم خیلی جذابی بود.' })
        m.comments?.push({ id: 1, movieId: m.id, userId: 1, content: 'فیلم خیلی جذابی بود.' })
        m.comments?.push({ id: 1, movieId: m.id, userId: 1, content: 'فیلم خیلی جذابی بود.' })
        m.comments?.push({ id: 1, movieId: m.id, userId: 1, content: 'فیلم خیلی جذابی بود.' })
        m.comments?.push({ id: 1, movieId: m.id, userId: 1, content: 'فیلم خیلی جذابی بود.' })
        this.movie = m
        console.log(this.movie);
        
      }).catch(() => this.movie = null)
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  addComment() {
    if (this.newComment.trim()) {
      // this.movie.comments.push({ user: 'reza', text: this.newComment });
      this.newComment = '';
    }
  }
}
