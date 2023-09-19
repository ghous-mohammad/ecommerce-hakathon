"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { Delete } from "lucide-react";

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
      `http://localhost:3000/api/cart?user_id=user_2V54jjnJxjV9EiiZuA5PelMNICN`
    )
      .then((res) => res.json())
      .then((data): any => {
        // console
        setProducts(data);
      });
  }, [isSignedIn, state]);

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

  return (
    <>
      <div>
        <h2>Shopping Cart</h2>
      </div>

      {isSignedIn ? (
        <div>
          {" "}
          {products?.map((data: any) => (
            <>
              <div key={data.product_id}>
                <h1>{data.product_title}</h1>

                <Button onClick={() => deleteproduct(data.product_title)}>
                  Delete
                </Button>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div>
          <p>please Sign in first</p>
        </div>
      )}
    </>
  );
}
