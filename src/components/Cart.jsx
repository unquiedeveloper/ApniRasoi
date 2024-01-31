import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ItemCard from "./ItemCard";
import {  useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";

function Cart() {
  const [activecart, setActivecart] = useState(false);
  const cartItems = useSelector((state)=> state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item)=> totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item)=> total + item.qty * item.price , 0)

  const navigate = useNavigate();
 
 
  return (
    <>
      <div className= {`fixed right-0 top-0 w-full lg:w-[20vw] p-5 h-full bg-white mb-3
        ${activecart? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`} >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-bold text-grey-800 ">My order</span>
          <MdOutlineClose 
            onClick={()=>setActivecart(false)}
            className="border-2 border-grey-600 text-green-600 font-bold
            p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        
        { cartItems.length > 0 ? cartItems.map((food)=>{
            return (<ItemCard key={food.id} id={food.id} name={food.name} 
             price={food.price} img={food.img} qty={food.qty}/>
            );
          }) : <h2 className="text-center text-xl font-bold text-gray-800">Your cart is empty</h2>
        }
        
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items: {totalQty} </h3>
          <h3 className="font-semibold text-gray-800">Total Amount: {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2 " />
          <button onClick={()=> navigate("/success")}
           className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg 
          w-[90vw] lg:w-[18vw] mb-5">Checkout</button>
        </div>

      
      </div>
      <FaShoppingCart 
      onClick={()=> setActivecart(!activecart)}
       className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4
       ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  );
}

export default Cart;
