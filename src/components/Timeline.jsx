import { Event_data,timeLineLst,Monday,Tuesday, leftEvents, rightEvents } from "../content/timeline_data";
import TimelineCard from "./TimelineCard";
import "./Timeline.scss";
import vert from '../assets/verticalBar.png';
import left from '../assets/leftHorizontallBar.png';
import right from '../assets/rightHorizontalBar.png';
import mobile from '../assets/mobileRightHorizontalBar.png';
import { useEffect } from "react";
import MobileTimelineCard from "./MobileTimelineCard";

/* const specific_time_left = (e)=>{
    return <div className="row">
        <div className="col-5">
            <div className="row">
            <div className="col-8">
                <div className="row">
                    {e.byWhom}
                </div>
                <div className="row">
                    {e.content}
                </div>
            </div>
            <div className="col-4">
                <img src={left} alt="" />
            </div>
            </div>
        </div>
        
        <div className="col-2">
            <div className="row line_time">{e.time}</div>
            <div className="row">
                <img src={vert} alt="" className="middle_line"/>
            </div>
        </div>
        <div className="col-5">

        </div>
    </div>
}

const specific_time_right = (e)=>{
    <div className="row">
        <div className="col">

        </div>
    </div>
}
const specific_time_mobile = (e)=>{
    <div className="row">
        <div className="col">

        </div>
    </div>
} */


export const TimeLine = ()=>{
    const handleresize=()=>{
        const ld = document.getElementById('ld');
        const rd = document.getElementById('rd');
        const mob = document.getElementById('mob');
        if(window.innerWidth<767){
            ld.style.display='none';
            rd.style.display='none';
            mob.style.display='flex';
        }
        else{
            ld.style.display='flex';
            rd.style.display='flex';
            mob.style.display='none';
        }
    }
    window.addEventListener('resize',handleresize);
    useEffect(() => {
        handleresize();
    }, [])
    

    /* const events_list = [];
        events_list.push(specific_time_left(timeLineLst['monday']['8:00'])); */
    return<>
    <div className="mt-5 mb-3 timetable-heading-container">
            <h1 className="timetable-heading mx-lg-5 ">Timetable<span className="timetable-dot">.</span></h1>
        </div>
     <div className="Timeline container-fluid d-flex flex-column">
        {/* <div className="col">
            {events_list}
        </div> */}
        <div className="row non-bs-container">
            <div className="col-5 left-desktop desktop-only-events" id="ld">
                <ul>
                    {leftEvents.map((e,index)=>(<li className="left-L L" key={index}><img src={left} alt="left-L" /></li>))}
                </ul>
                <ul>
                    {leftEvents.map((e,index)=>(<li className="t-event-card-left" key={index}><TimelineCard event={leftEvents[index]}/></li>))}
                </ul>
            </div>
            <div className="col-2 middle-line mx-auto">
                <h1 className="timeline-day my-5">Monday</h1>
                {Monday.map(time=>
                <div className="d-flex flex-column align-items-center">
                    <img src={vert} alt="" className="middle_line mt-1"/>
                    <h5 className="my-2">{time}</h5>
                </div>
                )}
                <h1 className="timeline-day my-5">Tuesday</h1>
                {Tuesday.map(time=>
                <div className="d-flex flex-column align-items-center">
                    <img src={vert} alt="" className="middle_line mt-1"/>
                    <h5 className="my-2">{time}</h5>
                </div>
                )}
            </div>
            <div className="col-5 right-desktop desktop-only-events" id="rd">
                <ul>
                    {rightEvents.map((e,index)=>(
                        <li className="right-L L" key={index}><img src={right} alt="right-L"/></li>
                    ))}
                </ul>
                <ul>
                    {rightEvents.map((e,index)=>(<li className="t-event-card-right" key={index}><TimelineCard event={rightEvents[index]}/></li>))}
                </ul>
            </div>
            <div className="col-10 right-mobile" id="mob">
                <ul>
                    {leftEvents.map((e,index)=>(
                        <li className="mobile-L" key={index}><img src={mobile} alt="mobile-L"/></li>
                    ))}
                    {rightEvents.map((e,index)=>(
                        <li className="mobile-L" key={leftEvents.length+index}><img src={mobile} alt="mobile-L"/></li>
                    ))}
                </ul>
                <ul>
                    {leftEvents.map((e,index)=>(
                         <li className="mobiletimelinecard" key={index}><MobileTimelineCard event={e}/></li>
                    ))}
                    {rightEvents.map((e,index)=>(
                         <li className="mobiletimelinecard" key={index}><MobileTimelineCard event={e}/></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </>
}