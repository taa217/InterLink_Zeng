import styles from './SideBar.module.css'
import ProfilePic from './profile';
import Link from 'next/link';

function SideBar(){
    return(
        <div className={styles.container}>
          <div className={styles.inner}>
         <div className={styles.top}>
            <div className={styles.st}><div><ProfilePic/></div></div>
            <Link href='/profile'><div className={styles.name}><h4><strong>Gal Gagot Mossauri</strong></h4><h6>@Gagot</h6></div></Link>
            <div className={styles.connNum}><div><strong>709</strong> Connections</div><div><strong>476</strong> Followers</div>
            </div>
            <hr></hr>
            <div className={styles.list}>
              <Link href='/profile'><div className={styles.item}>Profile</div></Link>
               <div className={styles.item}>Bookmarks</div>
               <div className={styles.item}>Events</div>
               <div className={styles.item}>Monetization</div>
               <div className={styles.item}>Settings and Support</div>
               <div className={styles.item}>Help Center</div>
               <div className={styles.item}>Log out</div>
            </div>
            <hr></hr>
         </div>
          </div>
        </div>
    )
}

export default SideBar;