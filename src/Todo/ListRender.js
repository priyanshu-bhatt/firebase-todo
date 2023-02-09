import React from 'react'
import listcss from './list.module.css'
export default function ListRender(props) {
  return (
    <>
    {props.list.map((list)=>{
        return (
            <div >
                <div className={listcss.container}>
                
                    {list.title} ({list.date.toDateString()})
                </div>
            </div>
        )
    })}
    </>
  )
}
