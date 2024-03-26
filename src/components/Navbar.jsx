import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import dkji from "./dkji.jpg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div className="w-[100vw]">
      <nav className="flex justify-between items-center mx-auto w-full">

        <NavLink to="/">
          <div className="ml-10">
          {/* <img src="https://tse2.mm.bing.net/th?id=OIP.E1it3-72568G2ANy7ZipHAHaHa&pid=Api&P=0&h=180"/> */}
          <img className="w-[110px] h[140px] bg-none rounded-full" src={dkji} />
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-black mr-5 space-x-6">
            <NavLink to="/">
              <p className="text-xl font-semibold">Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-3xl"/>{
                    cart.length > 0
                    &&
                    <span className="absolute -top-1 -right-[0.01px] bg-orange-800 rounded-full text-xxs w-5 h-5 flex justify-center item-center animate-bounce text-white">{cart.length}</span>

                  }
                 
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
