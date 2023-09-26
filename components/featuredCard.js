import Link from "next/link";
import styles from './featuredCard.module.css'
import Image from "next/image";



function FeaturedCard(props){
    return(
      <div className={styles.outer}>
      <div className={styles.container}>
         <Image src={props.src} layout='fill' objectFit='cover'/>
      </div></div>
    )
}
export default FeaturedCard