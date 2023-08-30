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
    product_quantity: integer("product_quantity").notNull(),

})

export const db = drizzle(sql);