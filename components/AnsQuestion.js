import styles from './AnsQuestion.module.css'
import Image from 'next/image'
function AnsQuestion ({question,cancel,from,imgsrc}){
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <button className={styles.cancel} onClick={cancel}>X</button>
                <button className={styles.btn}>Post</button>
            </div>
            <div className={styles.prof}> 
            <div className={styles.img}><Image src={imgsrc} layout='fill' objectFit='cover'/></div>
            <div className={styles.namendesc}>
            <h2 className={styles.name}><strong>{from}</strong></h2>
            </div>
            </div>
        
                <p className={styles.qnparagraph}><strong>{question}</strong></p>
            
            
            <textarea placeholder='Write your answer...' className={styles.input} ></textarea>
           
            
            
        </div>
    )
}
export default AnsQuestion