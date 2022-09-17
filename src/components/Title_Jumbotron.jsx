import './Title_Jumbotron.scss';
import bg from '../assets/FlowField_dummy.png';

const Title_Jumbotron = ()=>{
    return <div className='container-fluid title_background' style={{ backgroundImage: `url(${bg})`,backgroundSize : 'cover',backgroundRepeat : 'no-repeat'
    }}>
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
                        IIIT Bangalore is back with its
                    </div>
                </div>
                <div className="col d-none d-md-block">
                </div>
            </div>
    </div>
}

export default Title_Jumbotron;