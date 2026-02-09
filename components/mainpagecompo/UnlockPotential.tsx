import Image from "next/image";
import styles from './UnlockPotential.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
function UnlockPotential(){
    const list=['Accessing training programs led by real-world professionals','Convenient and flexible Subscription model','Cost-effective: Compared to traditional training programs']
    const listMapped=list.map((item,index)=><div className={styles.liElement} key={index}><div><FontAwesomeIcon icon={faCheck} className={styles.icon}/></div><li key={index}>{item}</li></div>)
    return (
       <div className='flex  flex-col px-[1rem] md:flex-row md:items-center'>

        <Image className={styles.floatingPhone} quality={100}  src='/images/mainPageimages/floatingPhoneWithmessages.png' alt='floating phone with messages' width={200} height={100}/>
        <div className={styles.sectionInfo}>
                    
            <div className={styles.sectionName}>
                <p >Best Solution</p>
                <h1>Unlock Your Full Potential with the Power of BrainerX.</h1>
            </div>


            <h3>Access expert-led training with BrainerX convenients, flexible, and affordable mobile app subscription model.</h3>
            <ul>
                {listMapped}
            </ul>
           

        </div>
    </div>)
}
export default UnlockPotential