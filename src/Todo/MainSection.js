import React, { useState } from 'react'
import Inbox from './Inbox';
import Today from './Today';
import Next from './Next7days'
import mycss from "./mainsection.module.css"
import Next7Days from './Next7days';
const list =[
    
]
export default function MainSection(props) {
    const [filteredList,setfilteredList]=useState(list);
    const addtodo=(obj)=>{
        list.push(obj);
        setfilteredList(list);

    };
  return (

    <div className={mycss.body}>
       
        {props.active==="INBOX" &&(
            <Inbox list={filteredList} append={addtodo}/>

        )}
        {props.active==="TODAY" &&(
            <Today list={filteredList}/>
        )}
        {props.active==="NEXT" &&(
            <Next7Days list={filteredList}/>
        )}
    </div>
  );
}
