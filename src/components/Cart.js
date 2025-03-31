import { useContext, useState, useEffect } from "react";
import UserInfo from "../utils/UserContext";
import { useSelector } from "react-redux";

const Cart = () => {
  const [totalBill, setTotalBill] = useState(0)
  const User = useContext(UserInfo);
  const cart = useSelector((state) => state.cart.items);
  
  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, item) => acc + (item?.dish?.info?.price || 0) / 100, 0);
      setTotalBill(total);
    } else {
      setTotalBill(0); 
    }
  }, [cart]);

  return (
    <div className="w-164 mx-auto bg-gray-200 p-4 items-center text-center">
      <h1>
        Welcome <span className="text-amber-500"> {User.user.name} </span>
      </h1>
      <h2> Here are the cart items </h2>
      <ol> 
        <li className=" mt-10">         
            {cart.map(item => (
                <div key={item.id}>
                            <span>• </span>
                            {item.title}
                            <span className="text-green-400">   - ₹                         
                            {(item?.dish?.info?.price)/100} </span>                            
                            <br />
                        </div>
                    ))}
        </li>
        </ol>  
        <h2 className="text-green-400 mt-20 text-2xl"> Total = {totalBill} </h2>  
    </div>
  );
};

export default Cart;