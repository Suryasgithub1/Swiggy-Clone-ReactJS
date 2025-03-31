import {useRouteError} from "react-router";


const ErrorPage = () => {
    console.log(useRouteError());
    const {status , statusText} = useRouteError();
    
    return (
        <div>
            <h1>Oops Page Not Found</h1>
            <h2>{status +" : " + statusText}</h2>
        </div>
    )
}

export default ErrorPage;