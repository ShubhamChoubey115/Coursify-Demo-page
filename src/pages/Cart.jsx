import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/Applied";



const Cart = () => {
  const {cart} = useSelector((state)=>state);
 
  
  return (<div className="w-11/12 mt-6 h-[80vh] mx-auto flex ">
    {
      cart.length > 0 ?
      (
        <div className="mt-24 flex gap-16  max-w-5xl mx-auto">
        <div>
        {
          cart.map((item,index) =>{
            return <CartItem key={item.id} item={item} itemIndex={index}/>
          })
        }
        </div>
        </div>
      ) :
      (
        <div className="w-11/12 h-[80vh] mx-auto flex justify-center items-center">
            <div className="mt-24 flex flex-col gap-3 items-center">
            <h1 className="font-bold">No Application yet !!</h1>
            <Link to="/"><button className="bg-green-700 w-56 text-white rounded-md
                py-2">
              Apply Now
            </button></Link>
            </div>
        </div>
        
      )
    }
  </div>);
};

export default Cart;
