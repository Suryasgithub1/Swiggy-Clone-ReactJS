import { useEffect, useState } from "react";
import {useParams} from "react-router"

const useRestaurantsMenu = (id) => {

    useEffect( () => {
        getRestaurantsMenu();
    }, [])
     
    const [restaurantsMenuInside, setrestaurantsMenuInside] = useState ([]) 
    
    // console.log((restaurantsMenuInside?.data?.cards[2]?.card?.card?.info?.cuisines));
    
    async function getRestaurantsMenu () {
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=" + id);
        const json = await (data?.json());
        setrestaurantsMenuInside(json);
        };      

     return restaurantsMenuInside;   
} 

export default useRestaurantsMenu;  