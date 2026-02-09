'use client'
import Link from 'next/link'
import styles from './CoursesList.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faMicrophone, faFilm, faChalkboardTeacher, faTools, faDesktop, 
  faPaintBrush, faObjectGroup, faRobot, faBrain, faSatelliteDish, faCode 
} from "@fortawesome/free-solid-svg-icons"
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

// 1. Define the shape of a single course category/topic
interface CourseTopic {
  topic: string;
  courses: number | string; // Adjusted to handle both based on your JSX usage
}

function CoursesList() {
  // 2. Explicitly type the icon list
  const iconList: IconDefinition[] = [
    faMicrophone,
    faFilm,
    faChalkboardTeacher,
    faTools,
    faDesktop,
    faPaintBrush,
    faObjectGroup,
    faRobot,
    faBrain,
    faSatelliteDish,
    faCode,
    faCode
  ];

  // 3. Tell useState to expect an array of CourseTopic
  const [dataCourses, setDataCourses] = useState<CourseTopic[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const datan = await fetch('/api/courses');
        const data: CourseTopic[] = await datan.json();
        setDataCourses(data);
      } catch (error) {
        console.log('error occured', error);
      }
    }
    getData();
  }, []);

  const pastelColors: string[] = [
    "#A7C7E7", "#B5EAD7", "#C7FFD8", "#FFDAC1", "#FFE0AC", 
    "#FFFFBA", "#E0BBE4", "#D4A5FF", "#FFB3BA", "#FFD1DC", 
    "#B3E5FC", "#E2E2E2"
  ];

  // 4. 'item' is now automatically typed as CourseTopic
  const courses = dataCourses.map((item, index) => {
    return (
      <Link key={index} className={styles.courseDiv} href={`/courses?topic=${item.topic}`}>
        <div className={styles.iconDiv}>
          {/* We use iconList[index] or fallback to faCode if index exceeds iconList length */}
          <FontAwesomeIcon icon={iconList[index] || faCode} className={styles.icon} />
        </div>
        <p>{item.topic}</p>
        <button style={{ backgroundColor: pastelColors[index % pastelColors.length] }}>
          {item.courses} courses
        </button>
      </Link>
    )
  })

  return <div className={styles.coursesMainDiv}>{courses}</div>
}

export default CoursesList