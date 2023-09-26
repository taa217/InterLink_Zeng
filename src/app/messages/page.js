import MessageComponent from "../../../components/message"
import Navbar from "../../../components/navbar"
import RoutesTopbar from "../../../components/routesTopbar"


function Messages(){
    return(
        <div>
            <RoutesTopbar route_name="Messages"/>
            <Navbar/>
            <MessageComponent/>
        </div>
    )
}
export default Messages