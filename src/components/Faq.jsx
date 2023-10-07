import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
import faqs from '../content/faq';
import "./Faq.scss";
const Faq = () => {
    const renderFaqs = (faqs) => {
        return faqs.map((faq, index) => {
            return (
                <div className='accordion-content'>
                    <input type="checkbox"  name="example_accordion" id={`section${index}`} className="accordion__input"></input>
                    <label for={`section${index}`} className="accordion__label">{faq.question}</label>
                    <div className="accordion__content">
                        <p>
                            {faq.answer}
                        </p>
                    </div>
                </div>
            );
        });
    }
    return (
        <Container>
            {/* div centered inside container */}
            <div className="faq container">
                <h1 className="faq-heading aos-init" data-aos="fade-up" >Faq<span className="dot_color">.</span></h1>
                {/* center accordion div */}
                <div className="row accordion">
                    {renderFaqs(faqs)}
                </div>
            </div>
        </Container>
    )
}
export default Faq;