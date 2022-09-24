import './App.scss';
import Title_Jumbotron from './components/Title_Jumbotron';
import Slider_section from './components/slider_section';
import Big_side_heading from './components/big_side_heading';
import about_us_text from './content/about_us';
import Faq from './components/Faq';
import Speakers from './components/Speakers';
import Scrollbar from 'smooth-scrollbar';
// init smooth-scrollbar
Scrollbar.init(document.querySelector("body"), {
  damping: 0.01,
  alwaysShowTracks: true,
  renderByPixels: true,
});
function App() {
  return (
    <div className="App" >
      <Title_Jumbotron />
      <Slider_section />

      <Big_side_heading
        heading1="About"
        heading2="Us"
        content={about_us_text}
        className='about_us_section'
      ></Big_side_heading>
      <Faq />
      <Speakers title={"Speakers"}/>
    </div>
  );
}

export default App;
