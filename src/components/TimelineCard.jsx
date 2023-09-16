import React from 'react'
import './TimelineCard.scss'

const TimelineCard = (event) => {
  return (
    <div className='timelinecard-outline d-flex'>
        <div className="d-flex timelinecard-text flex-column align-items-center justify-content-center">
            <h1 className='timelinecard-text-heading'>{event.event.title}</h1>
            <h1 className='timelinecard-text-description'>{event.event.description}</h1>
        </div>
        <div className="d-flex timelinecard-timings flex-column align-items-center justify-content-center">
            <h1 className='timelinecard-timings-time mb-0'>{event.event.start}</h1>
            <h1 className='timelinecard-timings-time mb-0'>|</h1>
            <h1 className='timelinecard-timings-time mb-0'>{event.event.finish}</h1>
        </div>
    </div>
  )
}

export default TimelineCard