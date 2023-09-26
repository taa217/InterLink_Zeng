import styles from './NotificationCard.module.css'
import Image from 'next/image'

function NotificationCard(props){
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.img}><Image  src='/studs.jpg' alt='profile' layout='fill' objectFit='cover'/></div>
                <div className={styles.aboutnot}><strong>{props.from}</strong>{props.about}</div>
                
            </div>
            <hr></hr>
        </div>
    )
}

export default NotificationCard