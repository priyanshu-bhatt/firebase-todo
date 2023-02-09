import React from 'react'
import ListRender from './ListRender'
import todaycss from './today.module.css'

export default function Next7Days(props) {
  const date = new Date()
  const filteredList = props.list.filter((task)=>{
    const diffTime = task.date - date
    const diffDays = Math.ceil(diffTime/(1000*60*60*24))
    if(diffDays<7 && diffDays >= 0){
      return true
    }
    return false
  })
  return (
    <>
    <div className={todaycss.text}> Next 7 Days✅</div>
    <div>
      <ListRender list={filteredList}/>
    </div>
    </>
  )
}