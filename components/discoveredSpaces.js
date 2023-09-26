import styles from './discoveredSpaces.module.css'
import Spaces from './space'
import SpaceCard from './spaceCard'
import Link from 'next/link'


function DiscoveredSpaces(){
    return(
        <div className = {styles.container}>
           <h1 className={styles.head}>Discover Spaces</h1>
           <Spaces spacename='Science and Technology'/>
           <Spaces spacename='Artficial Intelligence'/>
          
            </div>

        
    )
} 

export default DiscoveredSpaces