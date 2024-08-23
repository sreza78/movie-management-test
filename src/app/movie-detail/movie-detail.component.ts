import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { KENDO_CARD } from '@progress/kendo-angular-layout';
import { KENDO_TEXTAREA } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KENDO_BUTTON } from '@progress/kendo-angular-buttons';
import { AlertService } from '../../services/alert.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [KENDO_CARD, KENDO_BUTTON, KENDO_TEXTAREA, FormsModule, CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  public movie! : Movie | null;
  newComment: string = '';
  
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private movieService : MovieService, private alertService : AlertService, private commentService : CommentService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.movieService.getMovie(params['id']).then((m) => { 
        m.comments = []
        this.commentService.getByMovie(m.id).then(cs => m.comments = cs).finally(() =>{
          this.movie = m
        })
      }).catch(() => this.movie = null)
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  addComment() {
    // if (this.newComment.trim()) {
    //   this.newComment = '';
    // }

    if(!this.newComment){
      this.alertService.showError("ابتدا کامنت را وارد کنید")
      return;
    }

    
  }

  addReply(id: number){

  }
}
