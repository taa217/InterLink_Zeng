import RequestCard from './requestCard';
import styles from './requests.module.css';

function Requests(){
    return(
        <div className={styles.container}>
        <div className={styles.sugg}><strong>Invitations</strong></div>
        <div className={styles.requests}>
            <RequestCard imgsrc="/postpics/pp.jpg" desc='Web developer at Google' name='Charmaine Zuck'/>
            <RequestCard  imgsrc="/postpics/pp2.jpg" desc='Engineer at Econet' name='Mitchell Zara' />
            <RequestCard imgsrc="/postpics/ppw.jpg" desc='Engineer at Econet' name='Tendai Zino' />
            <RequestCard imgsrc="/postpics/pp.jpg" desc='Web developer at Google' name='Charmaine Zuck'/>
            <RequestCard  imgsrc="/postpics/pp2.jpg" desc='Engineer at Econet' name='Mitchell Zara' />
            <RequestCard imgsrc="/postpics/ppw.jpg" desc='Engineer at Econet' name='Tendai Zino' />
            <RequestCard imgsrc="/postpics/pp.jpg" desc='Web developer at Google' name='Charmaine Zuck'/>
            <RequestCard  imgsrc="/postpics/pp2.jpg" desc='Engineer at Econet' name='Mitchell Zara' />
            <RequestCard imgsrc="/postpics/ppw.jpg" desc='Engineer at Econet' name='Tendai Zino' />
            <RequestCard imgsrc="/postpics/pp.jpg" desc='Web developer at Google' name='Charmaine Zuck'/>
            <RequestCard  imgsrc="/postpics/pp2.jpg" desc='Engineer at Econet' name='Mitchell Zara' />
            <RequestCard imgsrc="/postpics/ppw.jpg" desc='Engineer at Econet' name='Tendai Zino' />
            <RequestCard imgsrc="/postpics/pp.jpg" desc='Web developer at Google' name='Charmaine Zuck'/>
            <RequestCard  imgsrc="/postpics/pp2.jpg" desc='Engineer at Econet' name='Mitchell Zara' />
            <RequestCard imgsrc="/postpics/ppw.jpg" desc='Engineer at Econet' name='Tendai Zino' />
            <RequestCard imgsrc="/postpics/pp.jpg" desc='Web developer at Google' name='Charmaine Zuck'/>
            <RequestCard  imgsrc="/postpics/pp2.jpg" desc='Engineer at Econet' name='Mitchell Zara' />
            <RequestCard imgsrc="/postpics/ppw.jpg" desc='Engineer at Econet' name='Tendai Zino' />
        </div>
        </div>
    )
}
export default Requests;