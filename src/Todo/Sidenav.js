import React from 'react'
import sidenavcss from './sidenav.module.css'
export default function Sidenav(props) {
  return (
    <>
    <header className={sidenavcss.header}>TimeLine</header>
    <div className={sidenavcss.back} >
         
        <ul>
            <div className={sidenavcss.all}>
            <div className={sidenavcss.inbox} onClick={()=>{props.change("INBOX")}}>
            <li>Inbox</li>
            </div>
            
            <li className={sidenavcss.today}  onClick={()=>{props.change("TODAY")}}>
            <div>Today</div>
            </li>
            
            <li className={sidenavcss.next}  onClick={()=>{props.change("NEXT")}}>
                <div>7Days</div>
            </li>
            </div>
        </ul>
    </div>
    </>
  )
}
