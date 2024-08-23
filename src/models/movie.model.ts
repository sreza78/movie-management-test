import { Comment } from './comment.model'

export interface Movie {
    id: number;
    title: string;
    director: string;
    genre: string;
    imageUrl: string;
    comments?: Comment[];
}