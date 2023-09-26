import Image from 'next/image'
import styles from './spaceCard.module.css'

function SpaceCard({spacename,imgsrc,members,desc}){
    return(
      <div className={styles.container} >
      <div className={styles.coverimg}><Image src="/postpics/h.jpg" layout="fill" objectFit="cover" /></div>
      <div className={styles.profileimg}><Image src="/postpics/o.jpg" layout="fill" objectFit="cover" /></div> 
    <div className={styles.inname}><div className={styles.name}><h1><strong>{spacename}</strong></h1></div> </div>

    <div className={styles.desc}>{desc}</div>
       
  </div>
    )
}
export default SpaceCard