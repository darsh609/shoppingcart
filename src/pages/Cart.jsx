import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const {cart}=useSelector((state)=>state);
  console.log(cart);

  const[totalamount,setTotalamount]=useState(0);
  useEffect(()=>{
    setTotalamount(cart.reduce((acc,curr)=>acc+curr.price,0))

  },[cart])

  return (<div >
    {
      cart.length > 0 ?
      (<div className="flex lg:flex-row md:flex-col sm: flex-col xs:flex-col  justify-center gap-16 w-[100vw] ">
        <div>
          {cart.map((item,index)=>
          {
            return <CartItem key={item.id} item={item} itemindex={index}/>

            
          })

          }
          </div>
          <div className="flex flex-col justify-between h-[700px] mt-12">
            <div>
            <div className="text-2xl font-bold ">Your Cart</div>
            <div className="text-5xl font-extrabold ">SUMMARY</div>
            <p>
              <span className="text-lg font-semibold">Total items : {cart.length}</span>
            </p>


            </div>
            <div className="flex flex-col gap-5">
              <div>
              <p className="text-lg font-semibold"> Total AMOUNT:$ <span className="text-lg font-bold">{totalamount}</span></p>
              </div>
              <div >
              <button className="w-full bg-orange-600 flex justify-center items-center border rounded-lg p-2 text-lg font-semibold text-white hover:bg-orange-500 transition duration-400 ease-in hover:scale-105" >Checkout Now</button>
              </div>
              
             
            </div>
            

            </div>


          </div>
      ):
      (
        <div className="flex flex-col gap-6 justify-center items-center h-[100vh]">
        <div>
        <h3 className=" text-2xl font-bold">
        Cart Empty!
        </h3>
          </div>
        
<div>
<Link to="/">
        <button className="button-19">
        Shop Now
        </button>

        </Link>

</div>
       
        </div>
      )
    }
  </div>);
};

export default Cart;
