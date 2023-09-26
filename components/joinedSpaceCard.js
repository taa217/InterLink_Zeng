import styles from './joinedSpaceCard.module.css'
import Image from 'next/image'
import ProfilePic from './profile'

function JoinedSpaceCard(props){
    return(
             <div className={styles.container}>
             <div className={styles.card}>
               <div className={styles.pic}><Image src={props.src} layout="fill" objectFit="cover"/></div>
               <div><strong>{props.joined}</strong><div></div></div>
             </div>
             </div>
    )
}

export default JoinedSpaceCard