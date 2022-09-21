import './slider_section.scss'
import slider_text from '../content/slider_texts';
import { useState } from 'react';
import { useRef, useEffect } from "react";


function useHorizontalScroll (a) {
    const elRef = useRef();
    // elRef.current.scrollTo({
    //     right:0,
    // });
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY === 0) return;
          if (
            !(el.scrollLeft === 0 && e.deltaY < 0) &&
            !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && 
                e.deltaY > 0)
          ) {
            e.preventDefault();
          }
          el.scrollTo({
            left: el.scrollLeft +  a*e.deltaY,
            behavior: 'smooth'
          });
        };
        window.addEventListener('wheel', onWheel);
        return () => el.removeEventListener('wheel', onWheel);
      }
    }, []);
    return elRef;
}



const Slider_section = () => {
    const [text_list, setText_list] = useState(slider_text);

    const headers_list = text_list.map((header, index) => {
        if (index % 2 === 1)
            return <h1 className="hollow_slider_text">{header + "."}</h1>
        else
            return <h1 className="solid_slider_text">{header + "."}</h1>
    });
    const headers_list2 = [...headers_list];
    headers_list2.reverse();
    const n = headers_list.length;

    const scrollRef1 = useHorizontalScroll(1);
    const scrollRef2 = useHorizontalScroll(-1);
    const scrollRef3 = useHorizontalScroll(1);

    return (
        <div className="slider_section">
            <div ref = {scrollRef1}className='scroll_content_1'>
                {headers_list}
            </div>
            <div ref = {scrollRef2}className='scroll_content_1'>
                {headers_list2}
            </div>
            <div ref = {scrollRef3}className='scroll_content_1'>
                {headers_list}
            </div>
        </div>
    );
}

export default Slider_section;