import ProfilePic from "./profile"
import styles from './newpost.module.css'
import Image from "next/image"
import Link from "next/link"


function NewPost(){
    return(
        <div className={styles.container}>
          <div className={styles.inner}>
          <div><ProfilePic/></div>
          <div className={styles.input}>
            <div className={styles.txt}><Link href="/post"><input className={styles.inputcard} type="text" placeholder="Ask or share..."/></Link></div>
            <div className={styles.choose}>
             <Link href="/post"><div className={styles.icon}><div><Image className={styles.in} src="/question.png" alt="Ask" width='20' height='20'/></div><div>Ask</div></div></Link>
             <Link href="/questions"><div className={styles.icon}><div><Image className={styles.in} src="/answer.png" alt="Answer" width='20' height='20'/></div><div>Answer</div></div></Link>
             <Link href="/post"><div className={styles.icon}><div><Image className={styles.in} src="/more.png" alt="post" width='20' height='20'/></div><div>Post</div></div></Link>
            </div>
             </div>
    </div>
     </div>
     
    )
}
export default NewPost