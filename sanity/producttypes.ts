export default interface IProducts {
    _id:string;
    title:string;
    description:string;
    price:number;
    clothcategory:string;
    maincategory:string;
    image?:any;
    size?:string[];
    _key?:string;
    
}