// schemas/products.ts
// eslint-disable-next-line import/no-anonymous-default-export
import { defineField , defineType } from "sanity"
export default defineType({
    name: 'products',
    type: 'document',
      title: 'products',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
          }), 


      defineField({
        name: 'title',
        type: 'string',
        title: 'Title'
      }), 

      defineField({
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options:{
            source:"title",
            maxLength:200,
            slugify: (input: any) =>
            input
              .toLowerCase() // lowercase ho ga
              .replace(/\s+/g, "-") // ye pateran h email wgra ad krne k liye as mai s ka mtlb space h or jha space dn gy wha se - use kre ga
              .slice(0, 200)
        }
      }), 


      defineField({
        name: 'description',
        type: 'string',
        title: 'Description'
      })
      , 
      
     defineField ({
        name: "size",
        type: "array",
        title: "Sizes",
        of: [{ type: "string" }],
      }),

      defineField({
        name: 'price',
        type: 'number',
        title: 'Price'
      }), 

      defineField({
        name: 'maincategory',
        type: 'string',
        title: 'Main Category', 
        options:{
            list :[{title:"mens" , value:"men"},
            {title:"womens" , value:"women"},
            {title:"kids" , value:"kid"}]
        }
      }) ,
      
      defineField({
        name: 'clothcategory',
        type: 'string',
        title: 'Cloth Category', 
        options:{
            list :[{title:"Sweater" , value:"sweater"},
            {title:"Dress" , value:"dress"},
            {title:"Pants" , value:"pant"},
            {title:"Jackets" , value:"jacket"},
            {title:"T-shirt" , value:"t-shirt"}
        ]
        }
      })








    ]
  })