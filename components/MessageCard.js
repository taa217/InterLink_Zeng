import styles from './MessageCard.module.css'
import ProfilePic from './profile'

function MessageCard(props){
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.img}><ProfilePic/></div>
                <div className={styles.side}>
                    <div className={styles.name}><strong>{props.name}</strong></div>
                    <div className={styles.lastmsg}>Hey, we met last time you came to my school...</div>
                </div>
                
            </div>
        </div>
    )
}
export default MessageCard