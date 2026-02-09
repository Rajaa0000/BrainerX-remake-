
import Image from 'next/image'
import styles from './page.module.css'
import FeatureList from '@/components/mainpagecompo/FeatureList';
import UnlockPotential from '@/components/mainpagecompo/UnlockPotential';
import Team from '@/components/mainpagecompo/Team';
import Video from '@/components/mainpagecompo/Video';
import ApplicationScreenShots from '@/components/mainpagecompo/ApplicationScreenShots';
import Questions from '@/components/mainpagecompo/Questions';
import Contact from '@/components/mainpagecompo/Contact';
import FirstPart from '@/components/mainpagecompo/FirstPart';

import Link from 'next/link';



//['Home','Courses','Features','Team','Screens']
function Home(){

  return (
    <div id='Home '
    className='w-full '>
    <section>
      <FirstPart/>
    </section>
      <div id='Features'></div>
      <section >
        <FeatureList/>
        </section>
      <section>
        <UnlockPotential/>
      </section>
      <div id='Team'></div>
      <section >
        <Team />
      </section>
      
          <Video/>
          <section id='Screens'>
        <ApplicationScreenShots/>
      </section>
         
      <section>
        <Questions/>
      </section>
      <section id='Contact'>
       
      </section>
            <section className={styles.downloadSection}>
        <div className={styles.sectionName}>
          <h1>Download our App Today & Experience Endless Possibilities</h1>
          <p>Our app is available in playstore</p>
        </div>
        <Link className={styles.downloadbutton} href={'https://play.google.com/store/apps/details?id=com.brainerx.app&pli=1'}
        >
          <p className={styles.sign}>▶</p>
          <div className={styles.p}><p className={styles.span}>Get it</p > <p>in Google Play</p></div>
        </Link>
      </section>
    

            
    </div>
               
  )
}
export default Home;
/*        <Video/>
      </section>
   



        */