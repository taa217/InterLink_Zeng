import Link from "next/link";
import styles from './featured.module.css'
import FeaturedCard from './featuredCard'


function Featured({removeSidebar}){
    return(
        <div onClick={removeSidebar} className={styles.container}>
          <FeaturedCard src="/postpics/py.jpg"/>
          <FeaturedCard  src="/postpics/nn.jpg"/>
          <FeaturedCard  src="/postpics/ds.jpg"/>
          <FeaturedCard  src="/postpics/ml.jpg"/>
          <FeaturedCard  src="/postpics/py.jpg"/>
        </div>
    )
}

export default Featured