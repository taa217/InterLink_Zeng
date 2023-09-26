'use client'
import { useState,useEffect } from 'react'
import styles from './AskAndPost.module.css'
import Link from 'next/link'
import { categories } from './catlist'
import RequestAns from './RequestAns'
import Image from 'next/image'
//import {useHistory} from 'react-router-dom'

function AskAndPost(){
    const [PostOrAsk,setPostOrAsk] = useState(false)
    const [RequestAn,setRequestAn] =  useState(false)
    const [image,setImage] = useState('')
    //const hist = useHistory()
    
    const handleImage = async ()=>{
       // setImage(e.target.files[0])
    const {data} = await navigator.permissions.query({name: 'photos'})
    if (data.status ==='granted'){
        const image = await navigator.clipboard.readImage();
        setImage(image.src)
    }else{
      //  history.push('./permissions');
    }

    };
    useEffect(()=>{
       // navigator.permissions.request({name : 'photos'})
    },[]
    )

    const setToPost = () => {
        setPostOrAsk(true)
    }
    const setToQuestion = () =>{
        setPostOrAsk(false)
    }
    const handleQnandPst = () =>{
        if (PostOrAsk == false){
            setRequestAn(true)
        }
    }
    const removeRequest = () =>{
        setRequestAn(false)
    }
    return(
        <>
        {!RequestAn && <div className={styles.container}>
             <div className={styles.topbar}>
                <div className={styles.top}>
                <Link href="/home"><div className={styles.close}>X</div></Link><div className={styles.btn}><button onClick={handleQnandPst} className={styles.button}>{PostOrAsk ? 'Post' : 'Add'}</button></div>
                </div>
             </div>
             
             <div className={styles.chose}>
             <div onClick={setToQuestion} className={styles.ask} style={!PostOrAsk ? {borderBottom:'solid rgb(0, 195, 255)'}: {borderBottom:'none'}} ><button className={styles.butn}>Ask a Question</button></div>
             <div onClick={setToPost} className={styles.post} style={!PostOrAsk ? {borderBottom:'none'}: {borderBottom:'solid rgb(0, 195, 255)'}}><button className={styles.butn}>Create a Post</button></div>
             </div>
             <div className={styles.postcontent}>
             {PostOrAsk && <>
             <textarea placeholder="Write your Post...." className={styles.input}></textarea>
             <button  onClick={handleImage}>photo</button>
             <image src={image} width='100' height='100' />
             </> 
             
             || <textarea placeholder="Start your question with What, How, Why, etc." className={styles.input}></textarea>}
             {!PostOrAsk && <div className={styles.cat}>
                <label className={styles.labe}>Question category...</label>
                <select className={styles.op}>
                {categories.map((category)=>
                {
                    return (<option>{category.category}</option>)
                }

                )}
                </select>
                </div>
                }
             </div>
        </div> || <><RequestAns removeRequest={removeRequest}/></>}
        </>
        
    )
}
export default AskAndPost