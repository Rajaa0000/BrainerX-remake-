import styles from './ApplicationScreenShots.module.css'
import Image from 'next/image'
import num from '@/public/data/screenshotsnum'

function ApplicationScreenShots(){
    const imagesUrlArray=[];
for (let index = 0; index < num; index++) {
    imagesUrlArray.push(`/images/mainPageimages/applicationScreenShots/${index}.png`);
    }
    const screenshots=imagesUrlArray.map((path,index)=><Image src={path} alt='these are shots of our application ' width={300} height={100}  key={index} className={styles.image}/>)
 return(
 <div className={styles.app}>
    <div className={styles.sectionName}>
        <p>Application Screenshots</p>
        <h1>Checkout Our Application Interface Look</h1>
    </div>
    <div className={styles.screenshots}>
        {screenshots}
    </div>
   
 </div>

 )
}
export default ApplicationScreenShots