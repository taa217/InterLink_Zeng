import MessageComponent from "../../../components/message"
import Navbar from "../../../components/navbar"
import RoutesTopbar from "../../../components/routesTopbar"


function Messages(){
    return(
        <div>
            <RoutesTopbar route_name="Messages"/>
            <Navbar/>
            
        <h1>YOU HAVE NO MESSAGES YET...</h1>
        </div>
    )
}
export default Messages
