import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import SideBar from "./components/sidebar/SideBar"
/* import Slider2 from './components/slider2/Slider2'; */

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  
  var [lang,setLang] = useState("en");
  
  const changeLang = ()=>{
    if(lang==="es") setLang("en");
    else if (lang==="en") setLang("es");
    console.log("LENGUAJE CAMBIADO")
  }
  
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} lang={lang} changeLang={changeLang}/> 
      <Cover />
      <About lang={lang}/>
      <Slider />
      <SideBar lang={lang}/>
      <Footer lang={lang}/>
    </div>
  );
}

export default App;
