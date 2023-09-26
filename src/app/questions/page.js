import Questions from "../../../components/Questions";

const { default: Navbar } = require("../../../components/navbar");
const { default: RoutesTopbar } = require("../../../components/routesTopbar");

function Answer(){
    return(
        <div>
            <RoutesTopbar route_name="Questions"/>
            <Navbar/>
            <div>
                <Questions/>
            </div>
        </div>
    )
}
export default Answer