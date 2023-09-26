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

const alankey ='83bfeacf9e8a39662089a6d17904572d2e956eca572e1d8b807a3e2338fdd0dc/stage'

console.log("hey clyde");
export default function Home() {
     useEffect(() =>{
        alanBtn({
          key:alankey
        })
      },[] )
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
<PostCard ppsrc="/bizagree.jpg" from="Technology and Business" About ="The media industry was among the first affected by digitization, because digital technologies have changed content
production, distribution, and consumption profoundly.
Most media companies have suffered revenue losses, being
unable to adapt their monetization strategies to the rapidly
changing media consumption patterns of their recipients.
Additionally, advertising revenues have proven to be a less
reliable revenue source in online than in offline media
markets. Consequently, a major obstacle to the content
providers’ successful digital transformation is the establishment of sustainable revenue streams (Chyi 2012).." src="/bizagree.jpg" removeSidebar={removeSidebar}/> 
 <AnsweredCard ppsrc="/postpics/k.jpg" answeredby="Tadiwa Matipa" qnfrom="Prince Tangwani" question="How do Large Language Models work in Natural Language Processing ?" answer="Large-scale generative models such as GPT and DALL-E have revolutionized
natural language processing and computer vision research. These models not only
generate high fidelity text or image outputs, but are also generalists which can solve
tasks not explicitly taught. In contrast, speech generative models are still primitive
in terms of scale and task generalization. In this paper, we present Voicebox,
the most versatile text-guided generative model for speech at scale. Voicebox is
a non-autoregressive flow-matching model trained to infill speech, given audio
context and text, trained on over 50K hours of speech that are neither filtered nor
enhanced. Similar to GPT, Voicebox can perform many different tasks through
in-context learning, but is more flexible as it can also condition on future context.
Voicebox can be used for mono or cross-lingual zero-shot text-to-speech synthesis,
noise removal, content editing, style conversion, and diverse sample generation. In
particular, Voicebox outperforms the state-of-the-art zero-shot TTS model VALL-E
on both intelligibility (5.9% vs 1.9% word error rates) and audio similarity (0.580
vs 0.681) while being up to 20 times faster. See voicebox.metademolab.com
for a demo of the model."/>
 <PostCard ppsrc="/postpics/n.jpg" from="Data Science Community" About ="The milky way galaxy is over 2 billion old. Explore how the art of science shaped the earth we live in today." src="/postpics/po.jpg" removeSidebar={removeSidebar}/> 
 <AnsweredCard ppsrc="/postpics/k.jpg" answeredby="Goerge Makawo" qnfrom="Emily Kupa" question="What is AWS?" answer="AWS	 means	 Amazon	 Web	 Services	 that	 is	 used	 by	 millions,	 and	 to	 get	 the
answer	to	this	question,	we	must	know	that	AWS	is	a	cloud	provider.	It	is	a	safe
cloud	services	platform	that	offers	almost	all	that	a	business	requires	to	develop
sophisticated	applications	with	reliability,	scalability,	and	flexibility.	It	is	a	model
for	billing	generally	referred	to	as	“pay-as-you-go,”	having	no	upfront	or	capital
cost.	Amazon	offers	almost	100	services	based	on-demand,	and	the	list	has	been
rising	 daily.	Operation	is	 almost	immediately,	 and	it’s	 accessible	with	reduced
setup.
To	master	AWS	is	not	all	about	the	online	building	of	sites.	The	service	affords
developers	 access	 to	 an	 interconnected	 set	 of	 attributes	 offering	 calculated
database	 storage,	 power,	 content	 delivery,	 and	 an	 increasing	 portfolio	 of
connected	 functionality.	 Organizations	 around	 the	 globe	 use	 AWS	 to	 develop
and	 scale.	 Cloud	 computing	 has	 come	 to	 remain,	 and	 the	 available	solutions
from	AWS	are	fast-tracking	its	development."/>
 <AnsweredCard ppsrc="/postpics/k.jpg" answeredby="James Zhuwa" qnfrom="Emily Kupa" question="How much does it cost to develop a Software as a Service in Zimbabwe in 2023?" answer="Development agencies typically charge more than hiring individual developers, but provide many advantages over hiring an individual developer.

Firstly, agencies tend to have more experience as they have completed many more development projects (especially SaaS-specialized agencies) and a more sophisticated process.

You will also find that agencies can self-manage and therefore you will not need to micro-manage and oversee an individual developer’s work. They will usually assign a project manager to your project to oversee the development team and to communicate with you.

This is great for those without experience in managing a software development team or busy entrepreneurs.

You should expect to pay about 50% more when hiring an agency over an individual developer.

Based on the the example of hiring an individual developer, you can expect the total cost to be approximately $80,000 for the development.

If your SaaS requirements are particularly complex, development costs could be in excess of $100k.

A minimum viable product is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development. A focus on releasing an MVP means that developers potentially avoid lengthy and unnecessary work."/>
 <PostCard ppsrc="/postpics/d.jpg" from='Startups in Zimbabwe' About ="A startup creates value by solving a problem through the unique use of new
or existing technologies, with a potential to scale exponentially. It is a
commercial enterprise. Its sole and utmost aim does not necessarily have to
be maximizing profit for its stakeholders; but it does have to make sense
commercially to allow its founders, investors and recruits to allocate their
resources into it.
Startups are now the change engines of the world, but why is this so? The
answer lies in the speed of change triggered by technological advances.
Think of the jump from the world of radio, to the world of television. During
the age of radio, people spent time by listening to music, stories, news and
early formats of talk-shows. The capabilities of the days’ technology were
utilized fairly efficiently. When the television was introduced, although the
technological capability was now much higher (allowing the transmission of
images and opening up the space for visual storytelling) the early content
remained very similar to those in the radio days. People would gather up
around a table, with texts and notes in front of them and read through the
stories as if they were in a radio show. The camera would generally be
motionless. Although the audio content was interesting, the visual content
was static. Only in time, the visual content has started catching up to the
technical capabilities of television, and use “visual storytelling” to its full
potential.
" src="/cbd.jpg"/>
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
 <PostCard ppsrc="/postpics/m.jpg" from="Science and Technology" About ="It is no secret that to become an expert in Artificiall Intelligence you are going to to ave to be familiar with the python programming language.Here is the roadmap to learn python effectively and efficienly." src="/studs.jpg" removeSidebar={removeSidebar}/> 
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
 
 Getting more posts...

  </div>
  
</Suspense>
  
  )
}
