export class CreatePostDto {
    id?: number;
    userId: number;
    categoryId: number;
    titulo: string;
    contenido: string;
    imagen: string;
}