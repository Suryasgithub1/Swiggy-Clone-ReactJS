import { useState } from "react"

const Sections = ({title ,description, isVisible, setisVisible }) => {

    
    return(
        <div className=" m-5 p-5 ">
            <div className="flex gap-6">
                {(!isVisible) ? (<button className="font-black" onClick={ () => setisVisible(true)  }> v </button>) : (<button className="font-black"  onClick={ () => setisVisible(false)  }> ^ </button>) }
                <h1 className="font-black" >This is the {title} section</h1> 
            </div>
            { (isVisible) ? (<p className=" text-sm  mt-2 ml-9"> {description}</p>) : <p className=" text-sm  mt-2 ml-9">For more details click the button</p>}
            
        </div>
    )
}


const Instamart = () => {

    const [showDescription, setShowDescription] = useState ("");
    
    return (<div> 
        <Sections 
            title = {"About Us"}
            description = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
            isVisible = {showDescription === "about"}
            setisVisible = { () => setShowDescription ("about")}
        />
        <Sections 
            title = {"Contact Us"}
            description = {" Contact Us Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
            isVisible = {showDescription === "contact"}
            setisVisible = { () => setShowDescription ("contact")}
      />
        <Sections 
            title = {"Careers"}
            description = {" Careers Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
            isVisible = {showDescription === "careers"}
            setisVisible = { () => setShowDescription ("careers")}
     />
    </div>)
}

export default Instamart;