import styles from './FeatureList.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain,faLaptopCode,faStar,faLaptopFile } from "@fortawesome/free-solid-svg-icons"
 const featuresIcons = [faBrain,faLaptopCode,faStar,faLaptopFile];
 import  featuresText  from '@/public/data/FeatureListData';
 
function FeatureList(){
    const features = featuresText.map((item,index) =>{return(
    <div className={styles.featureDiv} key={index}>
        <div  className={styles.featureDivDiv}>
            <div className={styles.featureDivicon} >
            <FontAwesomeIcon icon={featuresIcons[index]} className='text-[2rem]'/></div>
            <h3>{item.feature}</h3>
            <p>{item.description}</p>
        </div>

    </div>)});

 return (  <div className={styles.maindiv}>
                <div className={styles.sectionName}>
                  <p>features List</p>
                  <h1>BrainerX: Where Quality Meets Learning Innovation</h1>
                </div>

             <div className=' px-[2rem] flex flex-col gap-[5rem] items-center w-full md:grid md:grid-cols-2  
             md:gap-y-[4rem] md:place-items-center
              lg:flex  lg:flex-row'>
             {features}
             </div>

           </div>              )
}
export default FeatureList  