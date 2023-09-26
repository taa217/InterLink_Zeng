import Link from "next/link";
import styles from './navbar.module.css'
import { useFileSystemPublicRoutes } from "../next.config";
import Image from "next/image";
 function Navbar({removeSidebar}) {
  return (
  <div  onClick={removeSidebar} className={styles.container}>
    <Link href="/home"><div><Image src="/home.png" alt="home" width='20' height='20'/></div></Link>
    <Link href="/explore"><div><Image src="/explore.png" alt="explore" width='20' height='20'/></div></Link>
    <Link href="/notifications"><div><Image src="/nots.png" alt="notifications" width='20' height='20'/></div></Link>
    <Link href="/spaces"><div><Image src="/group.png" alt="spaces" width='20' height='20'/></div></Link>
    <Link href="/connections"><div><Image src="/connect.png" alt="connect" width='20' height='20'/></div></Link>
    <Link href="/questions"><div><Image src="/questions.png" alt="questions" width='20' height='20'/></div></Link>
  </div>
  )}
export default Navbar