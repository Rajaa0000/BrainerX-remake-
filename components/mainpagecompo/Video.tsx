import styles from './Video.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Video(){

    return(
    <div className={styles.section}>
        <div className={styles.sectionName}>
            <p> Video Tutorial</p>
            <h1>Watch NowOur VideoTutorial</h1>
        </div>
        <Link className='relative' href={'https://youtu.be/B6qGdWUsCkA?si=XP-0jxsaJZRPTrRe'}>
            <Image src='/images/backgrounds/video.jpg' alt=''  width={300} height={100} className='w-full object-center h-[30rem]'/>
            <div className='bg-[#213e69] absolute w-full h-full top-0 opacity-70'></div>
           <div className="absolute w-48 h-48 top-[25%]  left-[25%] right-[25%] bg-[#213e69] border-white border-8 flex justify-center items-center rounded-full">
  <svg className="w-24 h-24" viewBox="0 0 100 100">
    <polygon points="10,10 90,50 10,90" className="fill-white" />
  </svg>
</div>


            
        </Link>

    </div>)
}
export default Video