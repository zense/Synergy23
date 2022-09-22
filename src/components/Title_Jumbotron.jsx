import './Title_Jumbotron.scss';
import homepage_subtitle from '../content/subtitle_texts';
import { BsArrowDownCircle } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const Title_Jumbotron = () => {
    const slideDown = () => {
        window.scrollTo({
            top: window.innerHeight / 2,
            behavior: 'smooth'
        });
    }
    return <div className='container-fluid title_background'>
        <div className="row title_tex">
            <div className="col-12 col-md-10 col-lg-8">
                <div className="empty_space_title">

                </div>
                <div className="row synergy_is">
                    <h1 className='synergy_is_text'>Synergy is</h1>
                </div>
                <div className="row back_dot">
                    <h1 className='back_dot_text'>BACK<span className='dot_color'>.</span></h1>
                </div>
                <div className="row intro_text">
                    <div className="col-12 col-md-8">
                        {homepage_subtitle}
                    </div>
                    <div className="col d-none d-md-block"></div>
                </div>
            </div>
            <div className="col d-none d-md-block">
            </div>
        </div>
        <div className="row icon-bt-row position-absolute bottom-0 start-50 translate-middle">
            <div className="col"></div>
            <div className="col icon_col">
                <span className="down_arrow_icon_span">
                    <BsArrowDownCircle className='down_arrow_icon' onClick={slideDown} />
                </span>
            </div>
            <div className="col"></div>
        </div>
    </div>
}

export default Title_Jumbotron;