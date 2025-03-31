import { useState, useContext} from "react"
import { Link } from "react-router"
import UserInfo from "../utils/UserContext"
import { useSelector } from "react-redux"

const heading = () => {
    return (
      <div> 
       <Link to = "/"> 
        <img className="w-[100px]" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"></img> 
       </Link>
       </div>
    )
  }
  
  
   
  const HeaderElement = () => {

    const [loggedStatus, setLoggedStatus] = useState(false);
     const User = useContext (UserInfo);

     const cart = useSelector (store => store.cart.items);

    return(
      <div className="flex items-center justify-between mt-4 ">
          <div className="  flex items-center ">
            {heading()}
            <a>Other</a>
          </div>
          <div>
            <ul className="flex gap-10 ">
              <li><Link to ="/swiggyCorporate"> Swiggy Corporate</Link></li>
              <li><Link to = "/swiggyCorporate"> Search</Link></li>
              <li><Link to = "/offers"> Offer</Link></li>
              <li><Link to = "/swiggyCorporate"> Help</Link></li>              
              <li><Link to = "/Instamart"> Instamart</Link></li>
              <li><Link to = "/cart"> Cart - {((cart).length)} Items</Link></li>
            </ul>
          </div>
          
          <div className=" mr-10 flex gap-10" >
          
            {((loggedStatus) ? <button onClick={ () =>setLoggedStatus (false)}>Login</button> : 
            <>
            <p className="text-amber-500">{User.user.name}</p>
            <button onClick={ () => setLoggedStatus (true)} >Logout</button> 
            </>
            )}
          </div>
      </div>
      
  
    )
  }

  export default HeaderElement;