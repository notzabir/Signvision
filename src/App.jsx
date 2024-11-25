import { Navbar } from "./components/Navbar"; 
import { Hero } from "./components/Hero";
import { Aboutus } from "./components/Aboutus";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import Webcamcomponent from "./components/Webcamcomponent";

export const App = () => {
  
 
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Services/>
      <Form/>
      <Webcamcomponent/>
      <Footer />
    </div>
  );
};

export default App;
