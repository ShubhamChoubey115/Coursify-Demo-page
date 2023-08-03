
import {AiFillEdit} from "react-icons/ai"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (<div >
    <nav className="flex justify-between items-center h-20 max-w-5xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
         
         <img src="https://hireme.net/wp-content/uploads/2022/11/HireMe-Logo-3-1.png" height="80px" width="80px"></img>
          </div>
        </NavLink>
        
        <div className="flex items-center font-medium mr-5 space-x-6 text-slate-100">
          <NavLink to="/">
            <p>Login</p>
          </NavLink>
          
          <NavLink to="/cart">
            <div className="relative">
            <AiFillEdit className="text-2xl"/>
            {
              cart.length >0 && <span className="absolute 
              -top-1 -right-2 bg-green-600 text-xs flex justify-center items-center animate-bounce 
              rounded-full w-5 h-5 text-white">{cart.length}</span>
            }
            
            </div>
          </NavLink>
          
        </div>
    </nav>
  </div>);
};

export default Navbar;
