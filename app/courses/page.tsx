import CourseTopic from '@/components/courses/CourseTopic'
import CoursesList from '@/components/courses/CoursesList'
import styles from './page.module.css'
function Page(){

  return(
  <main className='bg-[#e4e4ee]'>
  <section className={styles.main}>
    <CoursesList/>
    <CourseTopic/>
  </section>
 </main> )

}
export default Page
