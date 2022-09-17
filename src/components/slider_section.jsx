import './slider_section.scss'
import slider_text from '../content/slider_texts';

const Slider_section = ()=>{

    var headers_list = [];
    for(var i=0;i<slider_text.length;i++){
        var class_name = 'hollow_slider_text';
        if(i%2==1){
            class_name = 'solid_slider_text';
        }
    headers_list.push(<h1 className={class_name}>{slider_text[i]}</h1>)
    }

    return <div className="Slider_section">
        {headers_list[0]}
        {headers_list[1]}
    </div>
}

export default Slider_section;