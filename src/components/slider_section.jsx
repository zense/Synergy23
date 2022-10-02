import './slider_section.scss'
import slider_text from '../content/slider_texts';
import { useState } from 'react';
import { useRef, useEffect } from "react";
function useHorizontalScroll(a) {
  const elRef = useRef();
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
          // e.preventDefault();
        }
        el.scrollTo({
          left: el.scrollLeft + a * e.deltaY,
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

  const giveRandomizedHeaderLst = () => {
    const randomizedHeaderLst = [...text_list];
    for (let i = randomizedHeaderLst.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedHeaderLst[i], randomizedHeaderLst[j]] = [randomizedHeaderLst[j], randomizedHeaderLst[i]];
    }
    const textLst = [];
    for (let index = 0; index < randomizedHeaderLst.length; index++) {
      if (index % 2 === 0)
        textLst.push(<h1 className="hollow_slider_text">{randomizedHeaderLst[index] + "."}</h1>);
      else
        textLst.push(<h1 className="solid_slider_text">{randomizedHeaderLst[index] + "."}</h1>);
    }
    return textLst;
  }
  const headers_list1 = giveRandomizedHeaderLst();
  const headers_list2 = giveRandomizedHeaderLst();
  const headers_list3 = giveRandomizedHeaderLst();


  const scrollRef1 = useHorizontalScroll(2);
  const scrollRef2 = useHorizontalScroll(-2);
  const scrollRef3 = useHorizontalScroll(2);



  return (
    <div className="slider_section" id="sliderContent">
      <div ref={scrollRef1} className='scroll_content'>
        {headers_list1}
      </div>
      <div ref={scrollRef2} className='scroll_content slider_content_right'>
        {headers_list2}
      </div>
      <div ref={scrollRef3} className='scroll_content'>
        {headers_list3}
      </div>
    </div>
  );
}

export default Slider_section;