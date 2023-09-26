import Connect from "../../../components/connect"
import Navbar from "../../../components/navbar"
import RoutesTopbar from "../../../components/routesTopbar"



function Connections(){
    return(
        <div>
            <RoutesTopbar route_name="Connections"/>
            <Navbar/>
            <Connect/>
        </div>
    )
}
export default Connections