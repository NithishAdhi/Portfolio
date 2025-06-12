import { Link } from "react-router-dom";

export default function About(){
    return(
        <div>
            <h1>This is the About Page</h1>
            <Link to = "/Home"><button>Back</button></Link>
        </div>
    )
}

