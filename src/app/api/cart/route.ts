import { NextRequest , NextResponse} from "next/server";
import { cartCoulmns, db } from "../../../../Database/Drizzle";
import {v4} from "uuid";
import { cookies } from "next/headers"
import { and, eq } from "drizzle-orm";


export const POST  =  async (request:NextRequest) => {
    const req = await request.json();

   

     try{
        const res = await db.insert(cartCoulmns).values({
        user_id: req.user_id ,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url:  req.image_url,
        product_price:  req.product_price,
        product_quantity: req.product_quantity,
        }).onConflictDoUpdate({
         target: [cartCoulmns.user_id ,cartCoulmns.product_title],
         set: {product_price:req.product_price ,
         product_quantity:req.product_quantity},
        })
        .returning();
        console.log("data posted to database")
        return NextResponse.json({res})
        
     } catch(error){
        
        console.log("error while posting data in to database",(error as {message: string }).message)
        return NextResponse.json({error})
     }
};

 
export const GET = async (request:NextRequest) => {

   const uid = request.nextUrl.searchParams.get("user_id") as string;

   try {

      const res = await db.select().from(cartCoulmns).where(eq(cartCoulmns.user_id , uid));
      return   NextResponse.json(res)
      
   } catch (error) {
      console.log(error);
      
   }

}


export const DELETE= async (request:NextRequest) =>{
   const req =  await  request.json()
   try {

      const res = await db.delete(cartCoulmns).where(
         and(
         eq(cartCoulmns.user_id, req.user_id ),
         eq(cartCoulmns.product_title, req.product_title)

      )
      
      
      )
      .returning()

       return NextResponse.json({message : "Prodcuct has successfuly deleted"})

   } catch (error) {
      return NextResponse.json({error})
   }
}







export const PUT = async (request:NextRequest) =>{
   const req =  await  request.json()
   try {

      const res = await db.update(cartCoulmns).set({product_quantity:req.product_quantity}).where(
         and(
         eq(cartCoulmns.user_id, req.user_id ),
         eq(cartCoulmns.product_title, req.product_title)

      )
      
      
      )
      .returning()
console.log("Data has been succesfully updated")
       return NextResponse.json({message : "Prodcuct qantity has been updated"})

   } catch (error) {
      console.log("error in updating quantity" + error)
      return NextResponse.json({message: "Error in updating product quantity"})
   }
}