"use client"
import React from "react";
import Logo from "/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Mobileview from "./Mobileview";
import {GiHamburgerMenu } from "react-icons/gi";
import {  IoMdClose } from "react-icons/io"
import { useState } from 'react';
import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { useAuth , UserButton } from "@clerk/nextjs";

export default function Header() {
  const {isSignedIn} = useAuth();
  const [isNavbarOpen , setNavbarOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between  pt-6  mx-[1rem] md:mx-[8rem] items-center">
        {/* logo */}

        <div className="flex gap-x-10 items-center"> 
          <div className="flex flex-shrink-0">
            <Image src={Logo} className="w-40" alt="logo" />
          </div>

          <div className=" hidden md:flex">
            {/* links */}
            <ul className="flex gap-x-10 items-center pt-1   ">

              <li className="text-lg ">
                <Link href="/category/women">Female</Link>
              </li>
              <li className="text-lg">
                {" "}
                <Link href="/category/men">Male</Link>
              </li>
              <li className="text-lg">
                <Link href="/category/kids">Kids</Link>
              </li>
              <li className="text-lg">
                <Link href="/products">All products</Link>
              </li>
            </ul>

          </div>

        </div>


           


         <div className="flex space-x-3 items-center">


      {/* sign in / sign up */}
       <div className="">
            {!isSignedIn && (
<>
          <SignInButton mode="modal">
          <button className="font-semibold">Sign In / </button>  
        </SignInButton>

        <SignUpButton mode="modal">

         <button className="font-semibold"> Sign up</button>        
     </SignUpButton>
</>

     ) }
{/* user icon */}
<UserButton afterSignOutUrl="/" />
        </div>



        {/* icon */}
      
        <div className="relative h-10 w-10 rounded-full bg-gray-200 hidden md:flex flex-shrink-0  justify-center items-center">
        
       
        
          <div className="absolute top-1 right-1 bg-[#f02d34] font-semibold text-white text-[10px] rounded-full h-4 w-4 flex justify-center items-start ">2</div>
          <ShoppingCart className="w-5 h-5 " />
        </div>


       
    
      </div>
    
    



        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>

       {
          isNavbarOpen ?  <div className="flex md:hidden  items-center">
       <IoMdClose size={35} />
        </div> 
        :

        <div className="flex md:hidden  items-center ">
       <GiHamburgerMenu size={25} />
    </div>
}
</div>


      </div>
      <div className="mt-4 mx-[1rem] sticky  bg-white z-50">


      {
    isNavbarOpen && <div className=''> <Mobileview /> </div>
}

      </div>
      
    </>
  );
}
