import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

      <Profilepage />

      <Workpage />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
