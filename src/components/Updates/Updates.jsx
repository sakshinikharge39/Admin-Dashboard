import React from 'react'
import './Updates.css'
import { UpdatesData } from '../../Data/Data'

const Updates = () => {
  return (
    <div className='Updates'>
      {UpdatesData.map((upadate) => {
        return(
            <div className="update">
                <img src={upadate.img}alt="" />
                <div className="noti">
                   <div style={{marginBottom: '0.5rem'}}>
                    <span>{upadate.name}</span>
                    <span>{upadate.noti}</span>
                    </div> 
                </div>
                <div>
                    <span>{upadate.time}</span>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Updates
