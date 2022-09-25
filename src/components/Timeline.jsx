import { Event_data,timeLineLst } from "../content/timeline_data";
import vert from '../assets/verticalBar.png';
import left from '../assets/leftHorizontallBar.png';
import right from '../assets/rightHorizontalBar.png';
import mobile from '../assets/mobileRightHorizontalBar.png';

const specific_time_left = (e)=>{
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
}


export const TimeLine = ()=>{
    const events_list = [];
        events_list.push(specific_time_left(timeLineLst['monday']['8:00']));
    return <div className="Timeline container-fluid">
        <div className="col">
            {events_list}
        </div>
    </div>
}