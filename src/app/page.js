import {Suspense} from 'react'
import RoutesTopbar from "../../components/routesTopbar";
import UserSignUp from "../../components/userSignup";

const { default: Signi } = require("../../components/Signi");


function SignUp({users}){
   // let arr = [{"name" : "wat"},{"name":"hj"}]
   
    return(
        <Suspense fallback={<p>Loading</p>}>
        <div>
       <UserSignUp/>
    
        </div>
        </Suspense>
    )
}
export default SignUp
