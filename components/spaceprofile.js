'use client'
import AnsweredCard from './AnsweredCard'
import PostCard from './PostCard'
import QuestionCard from './QuestionCard'
import SmallProfile from './SmallProfile'
import About from './about'
import ProfilePic from './profile'
import styles from './spaceprofile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

function SpaceProfile(){   
   const [toQn,setToQn] = useState(false)
   const [toAbt,setToAbt] = useState(false)
   const handletoAbt = () =>{
      setToAbt(true)
      setToQn(false)
      
   }
   const handletoQn = () => {
      setToQn(true)
      setToAbt(false)
   }  
   const handletoPost = () => {
      setToQn(false)
      setToAbt(false)
   }          
   return(
    <div className={styles.container}>
        <div className={styles.inner}>
        
           <div className={styles.cover}><Image src="/biztech.jpg" layout="fill" objectFit="cover" alt="cover"/> </div>
           <div className={styles.back}><Link href="/spaces"><Image src='/left-arrow.png' width='25' height="25" alt="back"/></Link></div>
          <div className={styles.it}><div className={styles.profile}><div></div><Image src="/business.jpg" width={150} height={150} objectFit="cover" alt="profile" className={styles.profileimg} /></div><div className={styles.followbtn}>Follow</div></div> 
           <div className={styles.spacename}><h1><strong>Artificial Intelligence and Machine Learning</strong></h1></div>
           <div className={styles.description}><p>Teach small businesses the secret to a successful business and grow using AI.</p></div>
           <div className={styles.contributors}>
           
            <h1 className={styles.admins}>3 admins</h1>
            <div className={styles.list}>
               <ul className={styles.lis}>
               <li><div className={styles.name}><div><ProfilePic/></div><strong><p>Paul Parker, </p></strong><p>CEO of GlobalTech</p></div></li>
               <li><div className={styles.name}><div><ProfilePic/></div><strong><p>Alana Mayer, </p></strong><p>HR Manager at Baker Tilly</p></div></li>
               <li><div className={styles.name}><div><ProfilePic/></div><strong><p>Paulin Deno, </p></strong><p>Business Consultant at Clientel</p></div></li>
               </ul>
            </div>
           </div>
           <div className={styles.analytics}><p>13.6K followers</p><p>27 contributors</p></div>
        </div>
       
        <div className={styles.nav}>
         <div className={styles.inn}>
         <div onClick={handletoPost} style={!toQn ? {borderBottom:'solid blue'}: {borderBottom:'none'}}>Posts</div>
         <div onClick={handletoAbt} style={toAbt ? {borderBottom:'solid blue'}: {borderBottom:'none'}}>About</div>
         <div  onClick={handletoQn} style={!toQn ? {borderBottom:'none'}: {borderBottom:'solid blue'}}>Questions</div>
         </div>           
        </div>

        <div className={styles.content}>
         {toAbt &&
         <div>
             <About/>
             <h1 className={styles.admin}><strong>Admins</strong></h1>
             <div className={styles.profiles}>
             <SmallProfile/>
       <SmallProfile/>
       <SmallProfile/>
         </div>
         <h1 className={styles.admin}>Followers</h1>
         <div className={styles.profiles}>
        
             <SmallProfile/>
       <SmallProfile/>
       <SmallProfile/>
         </div>
         </div>
        
         ||
         <>
         {!toQn && 
           <div className={styles.posts}>
           <PostCard ppsrc="/postpics/m.jpg" from="Diano Kasuku" About ="It is no secret that to become an expert in A <div className={styles.profiles}>
             <SmallProfile/>
       <SmallProfile/>
       <SmallProfile/>rtificiall Intelligence you are going to to ave to be familiar with the python programming language.Here is the roadmap to learn python effectively and efficienly." src="/postpics/py.jpg"/> 
    <PostCard  ppsrc="/postpics/o.jpg" from="Earnest Faith" About ="Neural Networks are the buildings blocks of Artificial Intelligence, they boost performance of Artificial Robots." src="/postpics/nn.jpg" /> 
    <AnsweredCard ppsrc="/postpics/n.jpg" answeredby="Tanaka Makato" qnfrom="Nokutenda Maponga" question="Which University is the best if i want to study Artficial Intelligence and Machine Learning?" answer="Most people would recommend the University of Zimbabwe, but based on my experince, i would recomment Harare Institutte of Technology. HIT has many supervisors who are experts in the field of Artificial Intelligence?"/>
    <PostCard ppsrc="/postpics/m.jpg" from='Washington Godo' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/ml.jpg"/> 
   
          </div> 
          ||
          <div className={styles.qns}>
          <QuestionCard/>
 
        </div>
         }
         </>

         }
         
        
       
        </div>
       
    </div>
   )

   }
   export default SpaceProfile