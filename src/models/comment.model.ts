export interface Comment {
    id: number;
    movieId: number;
    userId: number;
    userName: string;
    content: string;
    replies?: Comment[]
}