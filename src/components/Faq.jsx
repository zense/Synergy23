import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
import faqs from '../content/faq';
import "./Faq.scss";
const Faq = () => {
    const renderFaqs = (faqs) => {
        return faqs.map((faq, index) => {
            return (
                <div className='accordion-content'>
                    <input type="radio" name="example_accordion" id={`section${index}`} class="accordion__input"></input>
                    <label for={`section${index}`} class="accordion__label">{faq.question}</label>
                    <div class="accordion__content">
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
            <div className="faq">
                <h1 className='faq-heading'>Faq<span class="dot_color">.</span></h1>
                {/* center accordion div */}
                <div className="row accordion">
                    {renderFaqs(faqs)}
                </div>
            </div>
        </Container>
    )
}
export default Faq;