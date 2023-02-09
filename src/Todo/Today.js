import React from 'react'
import ListRender from './ListRender'
import todaycss from './today.module.css'
export default function Today(props) {
  const date = new Date()
  const filteredList = props.list.filter((task)=>{
    if(date.getFullYear() !== task.date.getFullYear()){
      return false
    }
    if(date.getMonth() !== task.date.getMonth()){
      return false
    }
    if(date.getDate() !== task.date.getDate()){
      return false
    }
    return true
  })
  return (
    <>
    < div className={todaycss.text}>  Today's✅</div>
    <div >
      
      <ListRender list={filteredList}/>
    </div>
    </>
  )
}