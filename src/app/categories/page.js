import React,{Suspense} from 'react'
import AllCategories from "../../../components/AllCategories"
import Loading from './loading'

function Categories(){

    return(
        <Suspense fallback={<p>Loading</p>}>
 <div>
            <AllCategories/>
        </div>
        </Suspense>
       
    )
}
export default Categories