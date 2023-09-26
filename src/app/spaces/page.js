'use client'
import CreateSpace from "../../../components/CreateSpace";
import DiscoveredSpaces from "../../../components/discoveredSpaces";
import Featured from "../../../components/featured";
import JoinedSpaces from "../../../components/joinedSpaces";
import RoutesTopbar from "../../../components/routesTopbar";
import Spaces from "../../../components/space";
const { default: Navbar } = require("../../../components/navbar");
import { useState } from "react";

function space(){
    const [createSpace,setCreateSpace] = useState(false)

    const tospace = () =>{
        setCreateSpace(!createSpace)
    }
    
    return(
        <div>
            {!createSpace && <><RoutesTopbar route_name="Spaces"/>
            <Navbar/>
         <JoinedSpaces tospace={tospace}/>
        <DiscoveredSpaces/></> || <><CreateSpace tospace={tospace}/></>}
        
        </div>
    )
}

export default space