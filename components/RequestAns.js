import styles from './RequestAns.module.css'
import Image from 'next/image'

function RequestAns({removeRequest}){
    return(
        <div className={styles.container}>
            <div className={styles.head}>
            <div className={styles.top}>
                <div onClick={removeRequest}>X</div>
                <button className={styles.btn}>Done</button>
            </div>
            </div>
           
            <h1 className={styles.hed}>Request Answers</h1>
            <div className={styles.card}>
            <div className={styles.namenpic}>
                    <div className={styles.img}><Image src='/postpics/pp.jpg' layout="fill" objectFit="cover" className={styles.pic}/></div>
                    <div className={styles.name}><p><strong>Dino Sangwenya</strong></p><p className={styles.desc}>Web developer at Intel</p></div>  
                </div>
                <div><Image src='/send.png' width='20' height='20'/></div>
            </div>

            <div className={styles.card}>
            <div className={styles.namenpic}>
                    <div className={styles.img}><Image src='/postpics/ppw.jpg' layout="fill" objectFit="cover" className={styles.pic}/></div>
                    <div className={styles.name}><p><strong>Tinashe Gawanja</strong></p><p className={styles.desc}>IT Manager at Oracle</p></div>  
                </div>
                <div><Image src='/send.png' width='20' height='20'/></div>
            </div>

            <div className={styles.card}>
            <div className={styles.namenpic}>
                    <div className={styles.img}><Image src='/gal.jfif' layout="fill" objectFit="cover" className={styles.pic}/></div>
                    <div className={styles.name}><p><strong>Cleoptra Stappord</strong></p><p className={styles.desc}>Econet Secretary</p></div>  
                </div>
                <div><Image src='/send.png' width='20' height='20'/></div>
            </div>
            <div className={styles.card}>
            <div className={styles.namenpic}>
                    <div className={styles.img}><Image src='/postpics/profile.jpg' layout="fill" objectFit="cover" className={styles.pic}/></div>
                    <div className={styles.name}><p><strong>Tadiwa Japan</strong></p><p className={styles.desc}>HR Manager at Backers Tilly</p></div>  
                </div>
                <div><Image src='/send.png' width='20' height='20'/></div>
            </div>
            <div className={styles.card}>
            <div className={styles.namenpic}>
                    <div className={styles.img}><Image src='/postpics/pu.jpg' layout="fill" objectFit="cover" className={styles.pic}/></div>
                    <div className={styles.name}><p><strong>Cleora Shanha</strong></p><p className={styles.desc}>Student at University of Zimbabwe</p></div>  
                </div>
                <div><Image src='/send.png' width='20' height='20'/></div>
            </div>
            
        </div>
    )
}
export default RequestAns