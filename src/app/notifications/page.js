import MarkNotsAsRead from "../../../components/MarkNotsAsRead";
import NotificationCard from "../../../components/NotificationCard";
const { default: Navbar } = require("../../../components/navbar");
const { default: RoutesTopbar } = require("../../../components/routesTopbar");


function Notifications(){
    return(
   <div>
    <RoutesTopbar route_name='Notifications'/>
    <Navbar/>
    <MarkNotsAsRead/>
    <NotificationCard from="Ted" about=" Started an event that might interest you"/>
    <NotificationCard from="Artficial Intelligence Africa" about=" started an event that might interest you"/>
    <NotificationCard from="Arts and Literiture" about=" posted books that you might like"/>
    <NotificationCard from="Bloomberg" about=" Started a live session that you might want to join"/>
    <NotificationCard from="Bloomberg" about=" Started a live session that you might want to join"/>
    <NotificationCard from="Bloomberg" about=" Started a live session that you might want to join"/>
    <NotificationCard from="NeuroScience" about=" made a post about Neural Networks being the pillar of ML. Check it out. "/>
    <NotificationCard from="TedTalks," about=" the Alignment of AI  discussion has started. Join now !"/>
    <NotificationCard from="" about="Welcome to Benzinga, admins have approved you to join the space"/>
    <NotificationCard from="Shahira" about=" requested to connect"/>
   </div>
    )

}
export default Notifications