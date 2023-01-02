import React from 'react'
import { useState } from 'react';
import './apartment.css';




const Apartment = () => {
    const [school, setSchool] = React.useState(false);
    const [gym, setGym] = React.useState(false);
    const [store, setStore] = React.useState(false);
const [value,setValue]=useState("")
 const [final,SetFinal]=useState([])
// const [checked,setChecked]=useState(false)
let blocks = [
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": true,
        "school": false,
        "store": false,
    },
    {
        "gym": true,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
    "gym": false,
    "school": true,
    "store": true,
    }
    ]
    let reqs = ["gym","school", "store"]


    function apartmentHunting(blocks,reqs){

        var score={};
        


var apartment=1;
var nearestBlockScore=-Infinity;
var nearestBlock=0;
for(let i of blocks){
    score[apartment]=0
   
    for( let j of reqs){
    
        if(i[j]==true)
        {
            score[apartment]=score[apartment]+1;
        }
   
    }
    if(nearestBlockScore<score[apartment])
    {
        nearestBlockScore=score[apartment];
        nearestBlock=apartment
     
    }
    
    apartment++;

  
}

if(nearestBlockScore==0){
    apartment=1;
    for(let i of blocks){
        
        for(let[key]of Object.entries(i))
        {
         
            if(key==true)
            {
                score[apartment]=score[apartment]+1;

            }
        }
        if(nearestBlockScore<score[apartment])
        {
            nearestBlockScore=score[apartment];
            nearestBlock=apartment;
        }
        apartment++;
  
    }
}
return nearestBlock;
    }
    
    
 
    function Search(){
        let index=apartmentHunting(blocks,reqs);
        setValue(index)
      
        
    }

    
    function Search2(){
        console.log(final,"st")
        if(final.length==0)
        {
            alert("Please select from checkbox below")
        }
        let index=apartmentHunting(blocks,final);
        setValue(index)
      
        
    }
    const handleIt = (e) => {
        // var richa=[]
        console.log(e)
        let {name,checked}=e.target
        console.log(name)
        // if(name=="school")
        // {setSchool(!school)
        // console.log(checked)}
        // else if(name="gym")
        // {
        //    setGym(!gym) 
        // }
        // else{setStore(!store)}
        if(name=="school"){
            setSchool(!school)
            if(school==false) final.push("school")
            else if(school==true) { 
                let ind = final.indexOf("school");

              final=  final.filter(removeValue("school",ind,final));
             SetFinal([...final])
            console.log("hello")
            }
          
        }
       if(name=="gym"){setGym(!gym)
            if(!gym) final.push("gym")
            else if(gym==true) { 
                let ind = final.indexOf("gym");

              final=  final.filter(removeValue("gym",ind,final));
             SetFinal([...final])
            console.log("hello")
            }
          
        }
      if(name=="store"){
            setStore(!store)
            if(!store) final.push("store")
            else if(store==true) { 
                let ind = final.indexOf("store");

              final=  final.filter(removeValue("store",ind,final));
             SetFinal([...final])
            console.log("hello")
            }
          
        }
        
       

        console.log(final,"om")
        SetFinal([...final])
        
        
      
        
        
      };
      
   
      function removeValue(value, index, final) {
        
        console.log("we r here")
        console.log(value)
        if (value === "school") {
       
            final.splice(index, 1);
            console.log(final,"jj")
            return true;
        }
        else if (value === "gym") {
            
                final.splice(index, 1);
                console.log(final,"jj")
                return true;
            }
            if (value === "store") {
               
                    final.splice(index, 1);
                    console.log(final,"jj")
                    return true;
                }
        
    

        return false;
    }
    
   

  return (
 <>
<div>
<button  className="button-89" onClick={()=>Search()}>Default option</button>
</div>
<br />
<br />
 <button className="button-89" onClick={()=>Search2()}>Customize apartment</button>
 <div>
 <input type="checkbox" checked={school}
        onChange={handleIt}  name="school" id="" />
        <label htmlFor="">School</label>
 <input type="checkbox" checked={gym}
        onChange={handleIt}  name="gym" id="" />
        <label htmlFor="">Gym</label>
  <input type="checkbox" checked={store}
        onChange={handleIt}  name="store" id="" /> 
        <label htmlFor="">Store</label> </div>    
        <br />
        <br />
        <br />

  <div>You should buy apartment in Block:{value}</div>
 </> 

  )
}

export default Apartment