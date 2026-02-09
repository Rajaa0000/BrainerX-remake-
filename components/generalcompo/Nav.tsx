import styles from './Nav.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Menu from './Menu'
function Nav(){
    return (
        
        <nav className={styles.nav}>    
                <div>
                    <Image src='/images/logo.png' alt=''  width={120} height={50} className={styles.logoImage}/>
                </div>
                <div className={styles.NavRight}>
                    
                    <Menu/>
                </div>
        </nav>
    )
}
export default Nav