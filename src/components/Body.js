import {IMG_URL_CDN, restaurantList} from "./constants"
import React, { useState, useEffect } from 'react';
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"


const RestaurantCard = (props) => {


  const {name, cuisines, avgRating, cloudinaryImageId, areaName} = props;
  return (
    <div className=" w-70 shadow ">
      <img className=" w-2xs object-contain" src={IMG_URL_CDN + cloudinaryImageId }></img>
      <h2 className=" text-lg ">{name} </h2>
      <h3 className=" text-base text-wrap " >{(cuisines).join(", ")}</h3>
      <p className=" text-sm " >{areaName}</p>
      <p className=" text-xs " >{avgRating + " Stars"}</p>    

    </div> 
  )
}

const Body = ( ) => {
  const [searchText, setSearchText] = useState('');
  const [restaurant, setRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  //let [counter, setCounter] = useState(0);


  

  async function getRestarauntList(){
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setRestaurants(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredRestaurants(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }


  useEffect(()=>{
    getRestarauntList();
  }, [])

  

  function counterCheck (){
    setCounter(++counter);
  }

  function filterData (searchText, filteredRestaurants){
    return (
      filteredRestaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    ) 
  }
 
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) { return(<h1>You are offline</h1>) }
    else{
    return  (
      <>
      <div className= "relative" >
        <input className= "absolute right-30 shadow-gray-500 " type="text"
          placeholder="Search" 
          value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }
          }> 
        </input>
        <button className= "absolute right-10 bg-gray-200 " onClick = {() => { 
          // counterCheck();
          const data = filterData (searchText, filteredRestaurants);
          setfilteredRestaurants(data);
        
        }}>Search</button>
        {/* {counter} */}
    </div>
    
    <div className=" flex flex-wrap gap-10 mx-20 mt-10  ">
      {searchText ? ( 
        filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))
      ) :   restaurant.map((restaurant) => { 
        return (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info} /> 
          </Link>
        );
      })
    }
    </div>
      </>
    );
  };}

  export default Body;