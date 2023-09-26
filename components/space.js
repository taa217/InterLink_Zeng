import styles from './space.module.css'
import SpaceCard from './spaceCard'
import Link from 'next/link'

function Spaces(props){
    return(
        <div className={styles.container}>
            <div className={styles.head}><h1>{props.spacename}</h1></div>
            <div className={styles.spaces}>
            <Link href="/spaceprofile"> <SpaceCard spacename ="ZHS AI" desc='Discuss about AI and school' imgsrc="/postpics/m.jpg" members='235'/></Link>
            <Link href="/spaceprofile">  <SpaceCard spacename ="Zeng Comp" desc='Talks about Computer Science.' imgsrc="/postpics/o.jpg" members='235'/></Link>
            <Link href="/spaceprofile">  <SpaceCard spacename ="Stanford AI" desc='Get thhe latest  trends from Stanford AI.' imgsrc="/postpics/n.jpg" members='235'/></Link>
            <Link href="/spaceprofile">  <SpaceCard spacename ="ZHS TECH" desc='Technology from Zengeza 1 High.' imgsrc="/postpics/h.jpg" members='235'/></Link>
                
            </div>
           
        </div>
    )
}
export default Spaces