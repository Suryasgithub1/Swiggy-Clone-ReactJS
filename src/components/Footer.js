import { useState, useContext} from "react"
import UserContext from "../utils/UserContext"

const Footer = () =>{

  const User = useContext (UserContext)
    return (
    <>
    <h2>Footer</h2>
    <p className="text-amber-500">Hello {User.user.name}</p>
    </>)
  }

export default Footer;