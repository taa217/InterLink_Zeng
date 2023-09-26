"use client"
//import { useRouter } from "react";
import { Router } from "next/router";
import Image from "next/image";

function BackArrow(){
  // const router = useRouter();
   const GoBack = (event) => {
    event.preventDefault()
    Router.back;
   };
   return (
    <div onClick={GoBack}><Image src="/left-arrow.png" width="32" height="32"/></div>
   )
}
export default BackArrow