import ConnectCard from './ConnectCard'
import styles from './connect.module.css'
import Requests from './requests'

function Connect(){
    return(
        <div className={styles.container}>
            <div className={styles.reqs}><Requests/></div>
            <div className={styles.sug}>
            <div className={styles.sugg}>People you may want to connect with...</div>
            <div className={styles.cards}> 
        <ConnectCard name="Alana Chipungu" desc='Network engineer at Old Mutual.' cover='/postpics/rob.jpg' profile='/postpics/profile.jpg'/>
        <ConnectCard name="Martha Joseph" desc='Student at Zengeza 1 High.' cover='/postpics/io.jpg' profile='/postpics/stud.jpg'/>
        <ConnectCard name="Peter Chipaku" desc='Artficial Intelligence Engineer at Econet.' cover='/postpics/sc.jpg' profile='/postpics/pu.jpg'/>
        <ConnectCard name="Lauren Mawati" desc='Web Developer at ClydeAI.' cover='/postpics/z.jpg' profile='/postpics/pph.jpg'/>
        <ConnectCard name="Clyde Tadiwa" desc='Founder and CEO of ClydeAI.' cover='/postpics/po.jpg' profile='/postpics/ppw.jpg'/>
        <ConnectCard name="Diana Chipanga" desc='Student at Zengeza 2 High.' cover='/postpics/o.jpg' profile='/postpics/pp.jpg'/>
    </div>
            </div>
        
    </div>
    )
}
export default Connect