import {times} from "./constants"

const ShimmerUI = () => {

    const EmptyRestaurantCards = () =>{
            return(
                <div className="EmptyDiv"></div>
            )
    }

      const shimmerCards = times.map((x) => (
        id = times.index,
        <EmptyRestaurantCards /> 
      ));
    
    return(
        <>
        <div className="SearchBarDiv">
          <input type="text" 
            className="SearchBar"
            placeholder="Search" 
            >
          </input>
          <button>Search</button>

      </div>
  
      <div className="restaurantListCard">
      {shimmerCards}
    </div>
        </>
    )
}

export default ShimmerUI;