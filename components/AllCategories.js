'use client'
import Link from 'next/link';
import styles from './AllCategories.module.css'
import BackArrow from './BackArrow';
import {useState,useEffect} from 'react';
import {categories} from './catlist'
   
  
function AllCategories(){
  const [isChecked,setIsChecked] = useState(false)
 
  const [selectedNames,setSelectedNames] = useState([])
 const handleSelect = (category) =>{

   const isSelected = selectedNames.includes(category);
   if (isSelected){
    setSelectedNames(selectedNames.filter((selectedName)=> selectedName !== category));
   // document.getElementById(category).style.backgroundColor = 'white';
    document.getElementById(category).checked = false
   }else{
    setSelectedNames([...selectedNames,category]);
   // document.getElementById(category).style.backgroundColor = 'rgba(0,162,255,0.4)';
    document.getElementById(category).checked = true
    
   }
   setIsChecked(!isChecked)
   
   // const checkedNames = categories.filter((category)=>category.checked)
  //const careers = checkedNames.map((category)=>category.careers.career)
  //console.log(category.checked)
 }
 /*useEffect(()=>{
  console.log(selectedNames)
 },[selectedNames])*/
 console.log(selectedNames)
    return(
        <div className={styles.container}>
            <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
            <div className={styles.heading}><strong>Choose three fields of interest.</strong></div>
            <div className={styles.categories}>
                {categories.map((category)=>{
                return(
                    <div onClick={()=>handleSelect(category.category)}  className={styles.onecategory} key={category.id}><div>{category.category}</div><div className={styles.inpt}><input type="checkbox" id={category.category} value={category.category} name={category.category}  onChange={()=>handleSelect(category.category)}/></div></div>
                )}
                )

                }
            </div>

            <div className={styles.btm}><Link href='/home'><button className={styles.btn}>Next</button></Link></div>
        </div>
    )
}
export default AllCategories;