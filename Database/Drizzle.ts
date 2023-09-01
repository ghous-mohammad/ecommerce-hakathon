<<<<<<< HEAD
import { sql } from "@vercel/postgres"
import {integer, pgTable, serial, varchar} from "drizzle-orm/pg-core"
import {drizzle} from "drizzle-orm/vercel-postgres"

export const cartCoulmns = pgTable("cartdata", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id").notNull(),
    product_id: varchar("product_id").notNull(),    
    product_title: varchar("product_title").notNull(),
   image_url: varchar("image_url").notNull(),
    product_price: integer("product_price").notNull(),
=======
import  { integer, pgTable,  serial,  varchar } from "drizzle-orm/pg-core"
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

export const Cart = pgTable("cartData",{
    id: serial("id").primaryKey(),
    user_id: varchar("user_id").notNull(),
    product_id: varchar("product_id").notNull(), 
    product_title : varchar("product_title").notNull(),
    product_url : varchar("product_url").notNull(),
    product_price : varchar("product_price").notNull(),
>>>>>>> 7ed9cdda47f02620bd7776a558e8963d912ab5f8
    product_quantity: integer("product_quantity").notNull(),

})

<<<<<<< HEAD
export const db = drizzle(sql)      
=======
export const db = drizzle(sql);
>>>>>>> 7ed9cdda47f02620bd7776a558e8963d912ab5f8
