import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"
import {products} from "../data"
import Hero from "../components/Hero";

const Home = () => {
  
  const [loading,setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{
      

      setItems(products);
    }
    catch(error){
      console.log("error aa gaya");
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  
  return (<div className="mt-24 ">
  <Hero/>

    {
      loading ? <div className="flex justify-center items-center h-[80vh]"><Spinner/> </div>:
      items.length >0 ?
      (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          items.map((item) => (
          <Product Key = {items.id} item={item}/>
        ))
        }
      </div>) :
      (<div className="flex justify-center items-center">
      <p>No data found</p>
      </div>)
    }
  </div>);
};

export default Home;
