import { NextRequest , NextResponse} from "next/server";
import { cartCoulmns, db } from "../../../../Database/Drizzle";

export const POST  =  async (request:NextRequest) => {
    const req = await request.json();

     try{
        const res = await db.insert(cartCoulmns).values({
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url:  req.image_url,
        product_price:  req.product_price,
        product_quantity: req.product_quantity,
        })
        .returning();
        console.log("data posted to database")
        return NextResponse.json({res})
        
     } catch(error){
        
        console.log("error while posting data in to database",(error as {message: string }).message)
        return NextResponse.json({error})
     }
};