import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
    </div>
  );
}

export default App;
