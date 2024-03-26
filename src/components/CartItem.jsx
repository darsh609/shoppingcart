import { FcDeleteDatabase } from "react-icons/fc";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

import { useDispatch } from "react-redux";
import{toast} from "react-hot-toast";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({item,itemindex}) => {
  const dispatch = useDispatch();
  const removefromcart=()=>{
    dispatch(remove(item.id));
    toast.success("remove from cart");

  }
  return (
    <div>
      <div className="flex flex-col  sm:flex-col  lg:flex-row lg:h-[400px] md:[400px] sm:[400px]w-[700px]  mt-3 gap-10 border-b-4" >
      <div className="h-[300px] w-[350px] mt-5 ">
        <img src={item.image} className="h-full w-full " />
      </div>
      <div>
      <div>
        <p className="text-gray-700 font-semibold text-xl   w-full mt-5 ">{item.title}</p>
      </div>
      <div>
        <p className=" text-gray-400 font-normal text-[20px] w-full mt-5">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="flex  flex-row lg:flex-row lg:justify-between md:justify-between sm:justify-between justify-around mt-7 ">
      <div>
         <p className="text-green-600 font-semibold">${item.price}</p>
        </div>

        <div onClick={removefromcart} className="  rounded-full h-10 w-10 flex justify-center items-center bg-red-200 text-2xl m-1"><MdDeleteOutline/></div>


      </div>
      
      </div>
      </div>
      
    </div>
  );
};

export default CartItem;
