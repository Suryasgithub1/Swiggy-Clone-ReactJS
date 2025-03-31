import { useEffect, useState } from "react";
import {IMG_URL_CDN, restaurantList} from "./constants"
import { useParams } from "react-router";
import useRestaurantsMenu from "../utils/useRestaurantsMenu.js"
import { addItems } from "../utils/cartSlices.js";
import {useDispatch} from "react-redux"

const RestaurantsMenu = () =>
{ 
    const {id} = useParams ();
    const restaurantsMenuInside = useRestaurantsMenu(id);

    const dispatch = useDispatch();

    const handleclick = (item) => { 
        dispatch(addItems(item));
    }

    return (
    <div className=" flex m-5 p2-2 "> 
        <div> 
            <h1 className=" font-bold text-4xl ">{(restaurantsMenuInside?.data?.cards[0]?.card?.card?.text)}</h1> 
            <img className="w-sm object-contain " src= {IMG_URL_CDN + restaurantsMenuInside?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId }/> 
            <h2 className="text-lg"> {restaurantsMenuInside?.data?.cards[2]?.card?.card?.info?.cuisines }</h2>
            <h3 className="text-base" > {restaurantsMenuInside?.data?.cards[2]?.card?.card?.info?.areaName}</h3>
            <h3 className="text-sm" > Delivery Time: {restaurantsMenuInside?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime} Mins</h3>
            <h4 className="text-xs" > Cost for two: {restaurantsMenuInside?.data?.cards[2]?.card?.card?.info?.costForTwo/100}</h4>
        </div>
        <div className="ml-15 mt-10">
            <h2 className=" font-bold text-2xl mb-5" >{restaurantsMenuInside?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title}</h2>
           
            <ul>{restaurantsMenuInside?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel?.map( 
                (item) => <li key= {item.dish?.info?.id} > <span className="font-bold text-gray-600" > {(item.title)} </span> <span className="ml-15 text-gray-600 text-sm"> ₹ {(item?.dish?.info?.price)/100} </span>
                <button className="rounded-lg w-[100px] text-sm ml-2 bg-green-100 cursor-pointer" onClick={ () => handleclick(item)}> 
                    Add item</button></li>)}
            </ul>
              
            <h2 className=" mt-[25px] font-bold text-2xl mb-5 " >{restaurantsMenuInside?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</h2>
            <ul>{restaurantsMenuInside?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map( 
                (item) => <li key= { item.card?.info?.id }  > <span className="font-bold text-gray-600" > {(item.card?.info?.name)} </span> <span className="ml-15 text-gray-600 text-sm"> ₹ {(item.card.info.price)/100} </span>
                <button className="rounded-lg w-[100px] text-sm ml-2 bg-green-100 cursor-pointer" onClick={ () => handleclick(item)}> 
                    Add item</button></li>)}        
            </ul>
        </div> 
    </div>
    ) 
}
 
export default RestaurantsMenu; 