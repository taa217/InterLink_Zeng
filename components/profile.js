import Image from 'next/image'
import styles from './profile.module.css'

function ProfilePic (){
  return(
    <div className={styles.container}>
      <Image src="/postpics/pp.jpg" alt='profile' layout="fill" objectFit="cover"/>
    </div>
  )
}

export default ProfilePic

