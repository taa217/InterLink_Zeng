import Link from "next/link";
import styles from './routesTopbar.module.css'
import Image from "next/image";

function RoutesTopbar({route_name}){
    return(
        <div>
       <div className={styles.container}>
        <Link href="/home"><div className={styles.left}><Image src='/left-arrow.png' width='32' height='32' alt='back' /></div></Link>
        <div className={styles.centred}>{route_name}</div>
        
       </div>
       <hr></hr>
       </div>
    )
}

export default RoutesTopbar;