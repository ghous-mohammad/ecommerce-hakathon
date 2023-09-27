/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import IProducts from "../../sanity/producttypes";
import Link from "next/link";
import { Delete, DeleteIcon } from "lucide-react";

interface CartItem {
  product_title: string;
}

interface ApiResponse {
  cart: CartItem[];
}

export default function Cart() {
  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { userId, isSignedIn } = useAuth();

  useEffect(() => {
    fetch(
      `https://ecommerce-hakathon.vercel.app/api/cart?user_id=${userId}`
    )
      .then((res) => res.json())
      .then((data): any => {
        // console
        setProducts(data);
      });
  }, [isSignedIn, state, userId]);

  // delete api calling
  async function deleteproduct(Product_title: any) {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: Product_title,
      }),
    });
    setState(!state);
  }

  async function Increment(
    Product_title: any,
    Product_quantity: any,
    User_id: any
  ) {
    try {
      await fetch(`api/cart`, {
        method: "PUT",
        body: JSON.stringify({
          product_quantity: Product_quantity,
          user_id: User_id,
          product_title: Product_title,
        }),
      });
      setState(!state);
    } catch (error) {}
    console.log("testing");
  }

  async function Decrement(
    Product_title: any,
    Product_quantity: any,
    User_id: any
  ) {
    try {
      await fetch(`api/cart`, {
        method: "PUT",
        body: JSON.stringify({
          product_quantity: Product_quantity,
          user_id: User_id,
          product_title: Product_title,
        }),
      });
      setState(!state);
    } catch (error) {}
  }

  return (
    <>
      <div className="my-[4rem] mx-[8rem] p-[3rem]">
        <div>
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
        </div>

        {isSignedIn  ?  (
          <>
          <div className="py-6 ">
            {" "}
            <div >
            {products?.map((data: any) => (
              <>
                <div key={data.product_id} className="py-8 block">
                  {/* left side start */}

                  <div className="flex">
                    {/* image */}
                    <div className="h-12">
                      <Image
                        src={data.image_url}
                        alt={data.product_title}
                        width={150}
                        height={100}
                        className="rounded-md object-cover "
                      />
                    </div>

                    {/* right side data */}
                    <div className="w-[75%] flex flex-col gap-2 ml-4 ">
                      <div className="flex justify-between">
                        <h6 className="font-light text-lg">
                          {data.product_title}
                        </h6>
                        <div>
                          <button
                            onClick={() => deleteproduct(data.product_title)}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-600 ">Dress</p>
                      <p>Delivery Estimated </p>
                      <p className="text-amber-400 font-semibold">
                        5 working days
                      </p>

                      <div className="flex justify-between">
                        <span className="font-bold">${data.product_price}</span>

                        {/* count function */}
                        <div className="flex gap-x-1 items-center">
                          <div className="">
                            <button
                              onClick={() =>
                                Decrement(
                                  data.product_title,
                                  data.product_quantity - 1,
                                  data.user_id
                                )
                              }
                              className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 "
                            >
                              -
                            </button>
                          </div>

                          {data.product_quantity}

                          <div>
                            <button
                              className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 "
                              onClick={() =>
                                Increment(
                                  data.product_title,
                                  data.product_quantity + 1,
                                  data.user_id
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* right side end */}
                    </div>

                    {/* left side end */}
                  </div>

                </div>
                 
              </>
            ))}
            </div>
            {/* <div className="flex-1">
            helo
            </div> */}
          </div>   

         

          </>

        ) : (
          <div>
            <p>please Sign in first</p>
          </div>
        )}
      </div>
    </>
  );
}
