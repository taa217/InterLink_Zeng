import styles from './AnsweredCard.module.css'
import Image from 'next/image'

function AnsweredCard(props){
    return(
    <div className={styles.container}>
<div className={styles.inner}>
    <div className={styles.top}>
        <div className={styles.img}><Image src="/gal.jfif" alt='profile' layout='fill' objectFit='cover'/></div>
        <div><div className={styles.experti}><strong>{props.answeredby}</strong></div><div className={styles.questionby}>questioned by {props.qnfrom}</div></div>
    </div>

    <div className={styles.content}>
        <div className={styles.qsn}><p><strong>{props.question}</strong></p></div>
        <div className={styles.ans}><p>{props.answer}</p></div>
        <div className={styles.reactions}>
        <div className={styles.innereact}>
            <div className={styles.reacnum}><Image src="/like.png" alt="like" width='20' height='20'/></div>
            <div className={styles.reacnum}><Image src="/comment.png" alt="comment" width='20' height='20' /></div>
            <div className={styles.reacnum}><Image src="/next.png" alt="share" width='20' height='20'/></div>
        </div>
     </div>
    </div>
</div>
    </div>
    )
}
export default AnsweredCard