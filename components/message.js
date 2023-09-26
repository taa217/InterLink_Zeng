import MessageCard from './MessageCard'
import styles from './message.module.css'

function MessageComponent(){
    return(
        <div className={styles.container}>
         <MessageCard name="Clyde Tadiwa"/>
         <MessageCard name="Tim Cook"/>
         <MessageCard name="Elena Pana"/>
         <MessageCard name="Jasmine Menon"/>
         <MessageCard name="Damon Baker"/>
         <MessageCard name="Clyde Tadiwa"/>
         <MessageCard name="Tim Cook"/>
         <MessageCard name="Elena Pana"/>
         <MessageCard name="Jasmine Menon"/>
         <MessageCard name="Damon Baker"/>
        </div>
    )
}
export default MessageComponent