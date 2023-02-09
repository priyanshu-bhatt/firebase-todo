import React, { useRef } from 'react'
import { useState } from 'react'
import inboxcss from './inbox.module.css'
export default function Inbox(props) {
    const [newTask,setNewTask] = useState(false)
    const titleRef = useRef("")
    const calenRef= useRef("")
    const handleevent=()=>{
        setNewTask(true);
    };

    const addHandler=(e)=>{
        e.preventDefault();
        if(titleRef.current.value==="")
        {
            window.alert("please type something");
            return;
        }
        let newObj=
        {
            number:props.list.length+1,
            title:titleRef.current.value,
            date: new Date(calenRef.current.value)
    
        }
        props.append(newObj)
        setNewTask(false)


    }

    const cancelHandler=()=>{
        setNewTask(false);
    };

   
  return (
    

    <div className={inboxcss.body}>
        <h2 className={inboxcss.heading} >Inbox📋</h2>
        {!newTask &&(
            <button type="button" class= "btn btn-warning" onClick={handleevent}> +Add New</button>
        )

        }

        {newTask &&(
            <form >
                <input className={inboxcss.input} type="text" ref={titleRef} /><br></br><br/>
                
                <button  type="button" className="btn btn-success" onClick={addHandler}>ADD</button>
                <button type="button" class="btn btn-danger" onClick={cancelHandler}>Cancel</button><br/>
                
                <input className={inboxcss.date} type="date" ref={calenRef} defaultValue="2023-01-01"/>
                
            </form>
        )}
   
  
<div >
    {props.list.map((list)=>{
        return (
            <div  key={list.number}>
                <div className={inboxcss.container}>
                {list.title}({list.date.toLocaleDateString()}) 
                
                </div>
            </div>
        );
    })}
</div>
</div>
  )}
