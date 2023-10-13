import styles from './PersonProfile.module.css'
import Image from 'next/image'
import PostCard from './PostCard'
import About from './about'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'


function PersonProfile(){
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
            <div className={styles.cover}><Image src="/biztech.jpg" layout="fill" objectFit="cover" alt="cover"/> </div>
          <div className={styles.it}><div className={styles.profile}><div></div><Image src="/group.png" width={150} height={150} objectFit="cover" alt="profile" className={styles.profileimg} /></div>
          <div className={styles.msgnconnect}>
            <div className={styles.innerdiv}><div><button className={styles.btns}>Message</button></div><div><button className={styles.btns}>Connect</button></div></div>
            </div>
        </div>
        <div className={styles.name}><h1><strong>Clyde Tadiwanashe</strong></h1></div>
        <div className={styles.experience}><p>CEO and Founder of ClydeAI</p></div>
<div className={styles.organisation}>ClydeAI</div>
<div className={styles.connections}><strong>267 connections</strong></div>
            </div>
            <div className={styles.details}>
                <About/>
               <Experience/>
               <Education/>
               <Skills/>
                
                </div>
                <div className={styles.activity}>
                    <div className={styles.activitytop}>
                    <div className={styles.navbar}>
                        <div>Posts</div>
                    </div>
                    </div>
                    <div className={styles.post}>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </div>

                </div>
        </div>
    )
}
export default PersonProfile
