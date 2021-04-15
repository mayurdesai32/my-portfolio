import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import Navbar from './component/Navbar';
import Firstpage from './component/Firstpage';
import Workpage from './component/Workpage';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Profilepage from './component/Profilepage';
// {
//   once: true;
// }
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Firstpage />

      {/* <div
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-duration='1000'
        data-aos-anchor-placement='top-bottom'
      > */}

      {/* </div> */}

      <Profilepage />

      <Workpage />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
