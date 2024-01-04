export interface Produit {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:RatingPros;
}
interface RatingPros{
    rate:number;
    count:number;
}