import React from 'react'
import './MobileTimelineCard.scss'

const MobileTimelineCard = (event) => {
  return (
    <div className='mobiletimelinecard d-flex flex-column'>
        <div className="d-flex justify-content-end mobiletimelinecard-time align-items-center">
            <h1 className='me-4 mt-1'>{event.event.start}-{event.event.finish}</h1>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobiletimelinecard-text">
            <h1 className='mobiletimelinecard-title'>{event.event.title}</h1>
            <h1 className='mobiletimelinecard-desc' >{event.event.description}</h1>
        </div>
    </div>
  )
}

export default MobileTimelineCard