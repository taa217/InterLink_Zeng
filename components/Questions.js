import QuestionCard from './QuestionCard'
import styles from './Questions.module.css'

function Questions(){
    return(
        <div className={styles.container}>
         <QuestionCard ppsrc="/postpics/n.jpg" from='Amanda Henry' question='What is the best school to study Commercials at Advanced Level?'/>
         <QuestionCard ppsrc="/postpics/k.jpg" from='Clyde Tadiwanashe' question='How does the Turing Test in LaMDAs like ChatGPT work?'/>
         <QuestionCard ppsrc="/postpics/n.jpg" from='Sheldon Cooper' question='Should I study both Commercials and Sciences at A Level if I am interested in both areas?'/>
         <QuestionCard  ppsrc="/postpics/o.jpg" from='Tim Pichai' question='Which university is best for Artficial Intelligence.MIT or StanFord?'/>
         <QuestionCard ppsrc="/postpics/k.jpg" from='Amanda Henry' question='What is the best school to study Commercials at Advanced Level?'/>
         <QuestionCard ppsrc="/postpics/m.jpg" from='Clyde Tadiwanashe' question='How does the Turing Test in LaMDAs like ChatGPT work?'/>
         <QuestionCard ppsrc="/postpics/h.jpg" from='Sheldon Cooper' question='Should I study both Commercials and Sciences at A Level if I am interested in both areas?'/>
         <QuestionCard ppsrc="/postpics/nm.jpg"  from='Tim Pichai' question='Which university is best for Artficial Intelligence.MIT or StanFord?'/>  
        </div>
    )
}
export default Questions