import { Injectable } from '@angular/core';
import {Comment} from '../models/comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Comment[] = [
    {
      id: 1,
      movieId: 1,
      userId: 1,
      userName : "سید رضا سفیدگر",
      content: "فیلم بسیار جالب و سرگرم‌کننده‌ای بود!",
      replies: [
        {
          id: 2,
          movieId: 1,
          userId: 2,
          userName : "حسن طنابی",
          content: "موافقم، به خصوص پایانش خیلی غیرمنتظره بود.",
        },
        {
          id: 3,
          movieId: 1,
          userId: 1,
          userName : "سید رضا سفیدگر",
          content: "بله، دقیقاً! کلی فکر کردم تا متوجه پایانش شدم.",
        },
      ],
    },
    {
      id: 4,
      movieId: 1,
      userId: 2,
      userName : "حسن طنابی",
      content: "فکر می‌کنم فیلم کمی طولانی بود، ولی داستانش عالی بود.",
      replies: [
        {
          id: 5,
          movieId: 1,
          userId: 1,
          userName : "سید رضا سفیدگر",
          content: "من هم موافقم، اما بازی بازیگران خیلی جذاب بود.",
        },
      ],
    },
    {
      id: 6,
      movieId: 3,
      userId: 1,
      userName : "سید رضا سفیدگر",
      content: "فیلمی بود که دوباره می‌خواهم ببینمش. خیلی لذت بردم.",
      replies: [
        {
          id: 7,
          movieId: 3,
          userId: 2,
          userName : "حسن طنابی",
          content: "من هم! موسیقی متن فیلم خیلی به احساساتم اثر گذاشت.",
        },
      ],
    },
    {
      id: 8,
      movieId: 4,
      userId: 2,
      userName : "حسن طنابی",
      content: "به نظر من این فیلم خیلی از واقعیت دور بود.",
      replies: [
        {
          id: 9,
          movieId: 4,
          userId: 1,
          userName : "سید رضا سفیدگر",
          content: "درسته، ولی به نظر من فانتزی بودنش جذابیت خودش رو داشت.",
        },
      ],
    },
  ];  

  constructor() { }

  getByMovie(id : number) : Promise<Comment[]>{
    return new Promise((res)=>{
      return res(this.comments.filter(c => c.movieId == id))
    })
  }
}
