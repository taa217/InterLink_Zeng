const { default: ProfilePic } = require("./profile");
import styles from './PostCard.module.css'
import Image from 'next/image';

function PostCard({removeSidebar,About,src,from,ppsrc}){
    return(
        
        <div onClick={removeSidebar} className={styles.container}>
            <hr></hr>
     <div className={styles.top}>
        <div className={styles.left}>
            <div className={styles.profile}><Image src={ppsrc} alt='profile' layout='fill' objectFit='cover'/></div>
            <div className={styles.name}><div><strong>{from}</strong></div></div>
        </div>
        <div className={styles.right}>
            <div className={styles.menu}>...</div>
        </div>
     </div>
     <div className={styles.about}><p>{About}</p></div>
     <div className={styles.image}><Image src={src} placeholder='/next.png' quality="100" className={styles.postpic} alt="post" layout='fill' objectFit='cover' objectPosition='center' loading='lazy'/></div>
     <div className={styles.reactions}>
        <div className={styles.inner}>
            <div className={styles.reacnum}><Image src="/like.png" alt="like" width='20' height='20'/></div>
            <div className={styles.reacnum}><Image src="/comment.png" alt="comment" width='20' height='20' /></div>
            <div className={styles.reacnum}><Image src="/next.png" alt="share" width='20' height='20'/></div>
        </div>
     </div>
        </div>
    )
}

export default PostCard