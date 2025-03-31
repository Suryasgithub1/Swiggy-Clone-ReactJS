import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [status, setStatus] = useState(true);

    useEffect(() => {

        const online = () => {
            setStatus(true)
        }

        const offline = () => {
            setStatus(false)
        }

        window.addEventListener("online", online); 
        window.addEventListener("offline", offline);

        return () => {
            window.removeEventListener ("online", online )
            window.removeEventListener ("offline", offline )
        }
    }, [])
    return (status)
}

export default useOnlineStatus;