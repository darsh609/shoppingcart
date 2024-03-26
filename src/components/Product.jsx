import { useDispatch, useSelector } from "react-redux";
import{toast} from "react-hot-toast";
import {add,remove} from "../redux/Slices/CartSlice"
const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();
    const addtocart=()=>{
      dispatch(add(post));
      toast.success("Item added to cart");
    }
    const removefromcart=()=>{
      dispatch(remove(post.id));
      toast.error("Item removed from cart");
    }



  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[14px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

    {
      cart.some((p)=>p.id==post.id)?
      (
        <button
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
 onClick={removefromcart}>
          Remove Item
        </button>
      ):(
        <button 
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[15px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"

        onClick={addtocart}>
          Add to cart
        </button>
      )
    }
    </div>
    </div>
  );
};

export default Product;
