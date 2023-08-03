

const CartItem = ({item, itemIndex}) => {
  
 



  return (<div >
    <div className="flex gap-6 border-b-2 border-gray-500 py-10 justify-between">
      <div className="h-[180px] w-[180px]">
        <img src={item.image} className="h-full w-full"/>
      </div>
      <div className="flex flex-col gap-4 w-96">
        <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</h1>
        <h2 className="w-full text-gray-400 font-normal text-[10px] text-left">{item.description}</h2>

        <div className="flex justify-between">
          <p className="text-green-600 font-semibold">${item.price}</p>
          
        </div>
        <div className="gap-2 flex">
        <button className="bg-yellow-300 py-1 px-2 rounded-md">View Details</button>
        <button className="bg-yellow-300 py-1 px-2 rounded-md">Edit Details</button>
        </div>
      </div>
    </div>
  </div>);
};

export default CartItem;
