import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart , incrementQty , decrementQty} from "../redux/slices/CartSlice"
import toast from "react-hot-toast";

function ItemCard({id, name , qty, price , img }) {

  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2  mb-3 ">
        <MdDelete 
        onClick={()=>{dispatch(removeFromCart({id, img, name, price, qty}));
        toast(`${name} Reomved!`, {
          icon: '😶',
        });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer" />
      <img src={img} alt="hello" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-grey-800 ">{name}</h2>
        <div className="flex justify-between ">
            <span className="text-green-500 font-bold ">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 ">

           <FiMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})): qty = 0}
              className="border-2 border-green-600 text-gray-600 hover:text-white
             hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <sapan>{qty}</sapan>
            <FiPlus onClick={()=> qty>=1 ? dispatch(incrementQty({id})): qty=0}
              className="border-2 border-green-600 text-gray-600 hover:text-white
             hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
