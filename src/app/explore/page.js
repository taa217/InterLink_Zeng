import AnsweredCard from "../../../components/AnsweredCard";
import Loading from "../../../components/loading.client";

const { default: PostCard } = require("../../../components/PostCard");
const { default: Navbar } = require("../../../components/navbar");
const { default: RoutesTopbar } = require("../../../components/routesTopbar");


function Explore(){
    return(
        <div>
        <Loading/>
            <RoutesTopbar route_name='Explore'/>
            <Navbar/>
            <PostCard ppsrc="/postpics/n.jpg" from="Clyde Rumombe" About ="This is the exhaustive list of the things you will need to know to become a pro in data science and enginneering." src="/postpics/ds.jpg"/> 
 <AnsweredCard ppsrc="/postpics/k.jpg" answeredby="James Zhuwa" qnfrom="Emily Kupa" question="What does it take to be an AI expect?" answer="To be an AI expert, you typically need to have strong foundation in computer science, mathematics, and statistics, as well as experience in machine learning and deep learning."/>
 <PostCard ppsrc="/postpics/m.jpg" from="Diano Kasuku" About ="It is no secret that to become an expert in Artificiall Intelligence you are going to to ave to be familiar with the python programming language.Here is the roadmap to learn python effectively and efficienly." src="/postpics/py.jpg"/> 
 <PostCard  ppsrc="/postpics/o.jpg" from="Earnest Faith" About ="Neural Networks are the buildings blocks of Artificial Intelligence, they boost performance of Artificial Robots." src="/postpics/nn.jpg" /> 
 <AnsweredCard ppsrc="/postpics/n.jpg" answeredby="Tanaka Makato" qnfrom="Nokutenda Maponga" question="Which University is the best if i want to study Artficial Intelligence and Machine Learning?" answer="Most people would recommend the University of Zimbabwe, but based on my experince, i would recomment Harare Institutte of Technology. HIT has many supervisors who are experts in the field of Artificial Intelligence?"/>
 <PostCard ppsrc="/postpics/m.jpg" from='Washington Godo' About ="Here are some of the projects you can create with AI using the python's tensorflow." src="/postpics/ml.jpg"/> 
 
        
          </div>
    )
}
export default Explore