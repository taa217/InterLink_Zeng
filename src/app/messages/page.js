import MessageComponent from "../../../components/message"
import Navbar from "../../../components/navbar"
import RoutesTopbar from "../../../components/routesTopbar"
import styles from '../../../components/AnsQuestion.module.css'


function Messages(){
    return(
        <div>
            <RoutesTopbar route_name="Messages"/>
            <Navbar/>
            
        <h1 className={styles.cl}>YOU HAVE NO MESSAGES YET...</h1>
        </div>
    )
}
export default Messages
