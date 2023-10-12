'use client'
import {useState,useEffect,Suspense} from 'react'
import Image from 'next/image'
import alanBtn from '@alan-ai/alan-sdk-web'
import Navbar from '../../../components/navbar'
import Header from '../../../components/topbar'
import Featured from '../../../components/featured';
import NewPost from '../../../components/newpost';
import PostCard from '../../../components/PostCard';
import SideBar from '../../../components/SideBar';
import QuestionsAndAnswer from '../../../components/QuestionsAndAnswer'
import AnsweredCard from '../../../components/AnsweredCard'
import Loading from '../../../components/loading.client'
import styles from '../../../components/AnsQuestion.module.css'

const alankey ='83bfeacf9e8a39662089a6d17904572d2e956eca572e1d8b807a3e2338fdd0dc/stage'

console.log("hey clyde");
export default function Home() {
   useEffect(() => {
//  if (typeof window !== "undefined") {
    alanBtn({
      key: alankey,
    });
//  }
}, []);

   }else {
      console.log("Voice AI is not working for now")
   }

  const [showSidebar,setShowSidebar] = useState(false)
  const toggleSideBar = () => 
  {
    setShowSidebar(!showSidebar);
  }
  const removeSidebar = ()=>
  {
    setShowSidebar(false)
  }
 
  return (
<Suspense fallback={<p>Loading</p>}>
<div>  
    {showSidebar && <SideBar/>}
 <Header showSidebar={showSidebar} toggleSideBar={toggleSideBar}/>
 <hr></hr>
<Navbar removeSidebar={removeSidebar}/>
 <hr></hr>
<NewPost removeSidebar={removeSidebar}/>
<hr></hr>

<Featured  removeSidebar={removeSidebar}/>


 <PostCard ppsrc="/postpics/d.jpg" from='Science and Nature' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/pok.jpg"/> 
 <PostCard ppsrc="/postpics/m.jpg" from="Boosting Science and Technology in Zimbabwe" About ="Voicification, personalised education or
the optimisation of production lines and
energy systems together with many other
applications of artificial intelligence have
seen wide adoption and are driving the
next wave of digital transformation. From
video conferencing tools to cloud services,
the COVID-19 pandemic has also brought
Europe‘s deficits regarding domestic digi
-
tal solutions into the focus of the public –
putting the discussion around digital
sovereignty at the centre. But how can we
shape AI innovation in Zimbabwe and Africa and strengthen our ecosystem so
that we can make better use of major
technological advances? Apart from loo
-
king at the great potential of AI itself, we
should also considerthat AI applications
are the starting point for various social
challenges - from the issue of data pro
-
tection to problems of discrimination. It is
imperative here to assume responsibility
and to build trust.
An understanding of how closely innova
-
tion and responsibility are linked in the
field of AI is elementary. If no international
-
ly competitive AI solutions are developed
in Zimbabwe and Europe in the coming
years, we will not be able to contribute
to shaping the technology and how it is
being used." src="/postpics/sc.jpg" removeSidebar={removeSidebar}/>  
 <PostCard ppsrc="/postpics/m.jpg" from="Science and Technology" About ="It is no secret that to become an expert in Artificiall Intelligence you are going to to ave to be familiar with the python programming language.Here is the roadmap to learn python effectively and efficienly." src="/postspics/g.jpg" removeSidebar={removeSidebar}/> 
 <PostCard  ppsrc="/postpics/o.jpg" from="Physical Science" About ="Neural Networks are the buildings blocks of Artificial Intelligence, they boost performance of Artificial Robots." src="/postpics/df.jpg" /> 
 <AnsweredCard ppsrc="/postpics/n.jpg" answeredby="Tanaka Makato" qnfrom="Nokutenda Maponga" question="Which University is the best if i want to study Artficial Intelligence and Machine Learning?" answer="Most people would recommend the University of Zimbabwe, but based on my experince, i would recomment Harare Institutte of Technology. HIT has many supervisors who are experts in the field of Artificial Intelligence?"/>
 
 <PostCard ppsrc="/postpics/g.jpg" from='Science and Nature' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/e.jpg"/> 
 <PostCard ppsrc="/postpics/io.jpg" from='Science and Nature' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/i.jpg"/> 
 <AnsweredCard ppsrc="/postpics/n.jpg" answeredby="Tanaka Makato" qnfrom="Nokutenda Maponga" question="Which University is the best if i want to study Artficial Intelligence and Machine Learning?" answer="Most people would recommend the University of Zimbabwe, but based on my experince, i would recomment Harare Institutte of Technology. HIT has many supervisors who are experts in the field of Artificial Intelligence?"/>
 <PostCard ppsrc="/postpics/e.jpg" from='Science and Nature' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/g.jpg"/> 
 <AnsweredCard ppsrc="/postpics/k.jpg" answeredby="James Zhuwa" qnfrom="Emily Kupa" question="What does it take to be an AI expect?" answer="To be an AI expert, you typically need to have strong foundation in computer science, mathematics, and statistics, as well as experience in machine learning and deep learning."/>
 <PostCard ppsrc="/postpics/i.jpg" from='Science and Nature' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/f.jpg"/> 
 <PostCard ppsrc="/postpics/f.jpg" from='Science and Nature' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/d.jpg"/> 
 <AnsweredCard ppsrc="/postpics/k.jpg" answeredby="James Zhuwa" qnfrom="Emily Kupa" question="What does it take to be an AI expect?" answer="To be an AI expert, you typically need to have strong foundation in computer science, mathematics, and statistics, as well as experience in machine learning and deep learning."/>
 
 <p className={styles.cl}>Getting more posts...</p>

  </div>
  
</Suspense>
  
  )
}
