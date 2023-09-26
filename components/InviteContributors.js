import styles from './InviteContributors.module.css'
import Image from 'next/image'
import SmallProfile from './SmallProfile'

function InviteContributors({handleNext,spaceName,spaceDesc,spaceCategory}){
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <button onClick={handleNext}>X</button>
                <button className={styles.btn}>Done</button>
            </div>
            <div className={styles.inner}>
            <h1 className={styles.head}><strong>Invite Contributors to {spaceName}</strong></h1>
            <p className={styles.abt}>Contributors can add content to the Space.Inviting more contributors can encourage and grow content</p>
            <input  type='search' className={styles.input} placeholder='Search by name'/>
            </div>
            <h2 className={styles.num}>0 selected</h2>
            <div className={styles.people}>
                <div className={styles.card}>
                    <input type='checkbox'/>
                    <div className={styles.profile}><Image src='/postpics/profile.jpg' layout='fill' objectFit='cover' className={styles.img}/></div>
                    <p className={styles.name}>Lynn Stapord</p>
                </div>
                <div className={styles.card}>
                    <input type='checkbox'/>
                    <SmallProfile/>
                </div>

            </div>
            
        </div>
    )
}
export default InviteContributors