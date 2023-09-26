import Link from 'next/link'
import JoinedSpaceCard from './joinedSpaceCard'
import styles from './joinedSpaces.module.css'

function JoinedSpaces( {tospace}){

    return(
        <div className={styles.container}>
          <div className={styles.head}><strong>Your Spaces</strong></div>
          <div className={styles.btns}>
            <button onClick={tospace} className={styles.btn}>Create</button>
            <button className={styles.btn}>Discover</button>
          </div>
          <div className={styles.joined}>
         <Link href="/spaceprofile"> <JoinedSpaceCard joined='Neural Networks' src='/postpics/nn.jpg'/></Link>
         <Link href="/spaceprofile"> <JoinedSpaceCard joined='Geography' src='/postpics/m.jpg'/></Link>
         <Link href="/spaceprofile"> <JoinedSpaceCard joined='Science and Technology' src='/postpics/ds.jpg'/></Link>
         <Link href="/spaceprofile"> <JoinedSpaceCard joined='Debate and Public Speaking' src='/postpics/o.jpg'/></Link>
         <Link href="/spaceprofile"> <JoinedSpaceCard joined='Electronics' src='/postpics/py.jpg'/></Link>
         <Link href="/spaceprofile"> <JoinedSpaceCard joined='NeuroScience' src='/postpics/nn.jpg'/></Link>
         <Link href="/spaceprofile"> <JoinedSpaceCard joined='Artificial Intelligence Africa' src='/postpics/ml.jpg'/></Link>
          
          </div>
        </div>
    )
}
export default JoinedSpaces