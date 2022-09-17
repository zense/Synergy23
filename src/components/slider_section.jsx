import './slider_section.scss'
import slider_text from '../content/slider_texts';
import { useEffect, useState } from 'react';
const Slider_section = () => {
    const [headers_list, setHeaders_list] = useState(slider_text);

    const render_slider = (headers_list) => {
        return headers_list.map((header, index) => {
            if (index % 2 == 1)
                return <h1 className="hollow_slider_text">{header + "."}</h1>
            else
                return <h1 className="solid_slider_text">{header + "."}</h1>
        });
    }

    return (
        <>
            <div className="Slider_section_1">
                {/* MAP OVER headers_list */}
                {render_slider(headers_list)}
            </div>
            <div className="Slider_section_2">
                {/* MAP OVER headers_list */}
                {render_slider(headers_list)}
            </div>
            <div className="Slider_section_1">
                {/* MAP OVER headers_list */}
                {render_slider(headers_list)}
            </div>
        </>
    );
}

export default Slider_section;