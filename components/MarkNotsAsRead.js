import styles from './MarkNotsAsRead.module.css'

function MarkNotsAsRead(){
    return(
        <div className={styles.container}>
            <p className={styles.mark}>Mark All As Read</p>
        </div>
    )
}

export default MarkNotsAsRead