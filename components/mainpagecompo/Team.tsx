import styles from './Team.module.css'
import TeamNames from '@/public/data/Team'
import Image from 'next/image'

function Team(){
    const teamText=TeamNames.map((item,index)=>{return (
    <div className={styles.teamCell} key={index}>
           <Image src={'/images/mainbgs/2.png'} width={300} height={100} alt="this is a background image"
                className='absolute z-[-10] right-[-1rem]'/>
        <div>
            <h3>{item.name}</h3>
            <p>{item.position}</p>
        </div>
     <Image src={`/images/mainPageimages/members/${index}.jpg`} alt='these are the images of our team members'
     quality={100}  width={300} height={100} className="object-center rounded-full" />
    </div>)
    })
    return (
    <div className={styles.holeTeam}>

        <div className={styles.sectionName}>
            <p>Our team</p>
            <h1>Meet Our Professional Team Members</h1>
        </div>
        
        <div className={styles.teamDiv}>
            {teamText}
        </div>

    </div>)
}
export default Team