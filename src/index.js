import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/Body.js"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import SwiggyCorporate from "./components/swiggyCorporate.js"; 
import ErrorPage from "./components/Error.js";
import Offers from "./components/Offers.js";
import RestaurantsMenu from "./components/RestaurantsMenu.js";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router";
import ShimmerUI from "./components/ShimmerUI.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.js";

const Instamart = lazy(() =>  import("./components/Instamart.js")  )

const App = () =>{
 return(
    
 <Provider store = {store}>
  {<Header />}
  {<Outlet />}
  {Footer()}
  </Provider>
 )
}


const appRouter = createBrowserRouter ([
    {path: "/",
        element : <App />,
        errorElement: <ErrorPage />,
        children: [
            {path: "/",
                element : <Body />
            },
            {path: "/swiggyCorporate",
                element : <SwiggyCorporate />
            },
            {path: "/offers",
                element : <Offers />
            },
            {path: "/restaurants/:id",
                element : <RestaurantsMenu />
            },
            {path: "/Instamart",
                element :( 
                <Suspense fallback = {<ShimmerUI/>} >
                    <Instamart />
                </Suspense>
                )
            },
            {path: "cart",
                element : <Cart />
            },
    ]
    }    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
