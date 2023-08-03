import { useDispatch, useSelector } from "react-redux";
import {add} from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast";


const Product = ({item}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Applied for job");
  }

  

//if error aaya toh post k jagah item likh k dekhna
  return (<div className="flex flex-col items-center justify-between
  hover:scale-110 transition duration-300 ease-in hover:shadow-slate-600 
  gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-2xl">
 

    <div>
      <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={item.image} alt={item.title} className="h-full w-full"/>
    </div>
 
    <div className="flex justify-between gap-16 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">₹{item.price}</p>
        </div>
        <button>
          {
            cart.some((p) => p.id == item.id) ? 
            <button className="text-white border-2 border-green-950 bg-green-400 rounded-full
            font-semibold text-[12px] px-3 uppercase 
            ">Applied</button> :
            <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full
            font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in">Apply</button>
          }
        </button>
    </div>
  
    
  </div>);
};

export default Product;
