import styles from './SmallProfile.module.css'
import ProfilePic from './profile'
import Image from 'next/image'

function SmallProfile(){
   return(
    <div>
        <div className={styles.namenpic}>
                    <div className={styles.img}><Image src='/postpics/ppw.jpg' layout="fill" objectFit="cover" className={styles.pic}/></div>
                    <div className={styles.name}><p><strong>Clyde Tadiwanashe</strong></p><p className={styles.desc}>Web Developer at Google</p></div>  
                </div>
      
    </div>
   )
}
export default SmallProfile