import { Component, Input } from '@angular/core';
import { KENDO_BUTTON } from '@progress/kendo-angular-buttons';
import { KENDO_ICON } from '@progress/kendo-angular-icons';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';

import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-item',
  standalone: true,
  imports: [KENDO_LAYOUT, KENDO_BUTTON, KENDO_ICON, CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {

  @Input() movie: Movie | undefined;

  constructor(private router : Router) {}
  ngOnInit(): void {
  }

  show(){
    this.router.navigate([ '/movie',this.movie?.id])
  }
}
