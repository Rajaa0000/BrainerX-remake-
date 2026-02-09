'use client'
import styles from './Questions.module.css'
import  faq  from '@/public/data/questionsAnswer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus,faMinus} from "@fortawesome/free-solid-svg-icons"
import { motion,AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Questions(){
    const defaultList=faq.map((item)=>false)
    const [answersShowing,setAnswersShowing]=useState(defaultList);
    const qalist=faq.map((item,index)=>{
    return(
        <div key={index} className={styles.questionDiv}>
    <div  className={styles.minidiv} >
        <p className={styles.minidivp} style={answersShowing[index] ? {'color':"red"}:{}}>{item.question}</p>
        <div className={styles.minidivdiv}><FontAwesomeIcon icon={answersShowing[index]?faMinus:faPlus} className={styles.icon} onClick={()=>handleClicking(index)}/></div>
    </div>
       <AnimatePresence> 
        {answersShowing[index]&& <motion.div 
        className={styles.answer}>{item.answer}</motion.div>}
       </AnimatePresence>
       
   
    </div>)})
    function handleClicking(i:number){
       setAnswersShowing((prev)=>prev.map((item,index)=>i===index?!item:item));
    }
    return (
    <div className={styles.section}>
        <div className={styles.sectionName}>
            <p>Frequently Asked Questions</p>
            <h1 className='pb-[2rem]'>Want to Ask Something From BrainerX?</h1>
        </div>
        <div className={styles.questionsContainer}>
            {qalist}
        </div>

    </div>
    )
}
export default Questions