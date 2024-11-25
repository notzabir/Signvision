import BackgroundImg from "../assets/bg.png";
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Vasu from '../assets/vasu.png';
import Wyatt from '../assets/wyatt.png';
import Zabir from '../assets/zabir.png';
import Vasu2 from '../assets/vasu2.png';
import { ReactTyped } from 'react-typed';


export const Services = ({ onScrollToPhase, onScrollToCalendar }) => {
  return (
    <div className="relative w-full h-[1200px] " id="services">
      {/* Background Image as Cover */}
      <img 
        src={BackgroundImg} 
        className="absolute w-full h-full object-cover" 
        alt="Cover"
      />
      
      {/* Header title */}
      <div className="absolute justify-center pl-[360px] pt-[45px] pb-[75px]">
        <h1 className="text-purple-300 font-semibold text-[40px]"><ReactTyped strings={["Meet the Team"]} typeSpeed={40} backSpeed={30} loop/></h1>
      </div>

      {/* Main Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center top-[100px]">
        
        {/* Top Div Box */}
        <div className="w-[240px] h-[300px] bg-purple-950 border rounded-2xl shadow-lg justify-center mb-10 hover:scale-105 transition-transform float-animation">
          <img src={Vasu} className="w-full h-2/3 object-cover rounded-t-2xl"/>
          <div className="p-4 text-center">
          <h2 className="text-sm font-semibold text-white">Vasudev Nair</h2>
        </div>
        </div>

        {/* Bottom Row of Five Div Boxes */}
        <div className="flex space-x-6">
          
          {/* First Box */}
          <div className="w-[240px] h-[300px] bg-purple-950 border rounded-2xl shadow-lg relative hover:scale-105 transition-transform float-animation">
            <img src={Wyatt} className="w-full h-2/3 object-cover rounded-t-2xl" alt="Mentee 1" />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-white">Wyatt Skov</h3>
              <button 
                onClick={onScrollToCalendar}
                className="bg-purple-200 text-purple-800 text-sm px-4 py-2 rounded-full shadow-md mt-2 hover:bg-purple-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Second Box */}
          <div className="w-[240px] h-[300px] bg-purple-950 border rounded-2xl shadow-lg relative hover:scale-105 transition-transform float-animation">
            <img src={Zabir} className="w-full h-2/3 object-cover rounded-t-2xl" alt="Mentee 2" />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-white">Md Ahnaf Al Zabir</h3>
              <button 
                onClick={onScrollToPhase}
                className="bg-purple-200 text-purple-800 text-sm px-4 py-2 rounded-full shadow-md mt-2 hover:bg-purple-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Third Box */}
          <div className="w-[240px] h-[300px] bg-purple-950 border rounded-2xl shadow-lg relative hover:scale-105 transition-transform float-animation">
            <img src={Vasu2} className="w-full h-2/3 object-cover rounded-t-2xl" alt="Mentee 3" />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-white">Mentee Three</h3>
              <button 
                onClick={onScrollToCalendar}
                className="bg-purple-200 text-purple-800 text-sm px-4 py-2 rounded-full shadow-md mt-2 hover:bg-purple-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Fourth Box */}
          <div className="w-[240px] h-[300px] bg-purple-950 border rounded-2xl shadow-lg relative hover:scale-105 transition-transform float-animation">
            <img src={Vasu2} className="w-full h-2/3 object-cover rounded-t-2xl" alt="Mentee 4" />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-white">Mentee Four</h3>
              <button 
                onClick={onScrollToPhase}
                className="bg-purple-200 text-purple-800 text-sm px-4 py-2 rounded-full shadow-md mt-2 hover:bg-purple-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Fifth Box */}
          <div className="w-[240px] h-[300px] bg-purple-950 border rounded-2xl shadow-lg relative hover:scale-105 transition-transform float-animation">
            <img src={Vasu2} className="w-full h-2/3 object-cover rounded-t-2xl" alt="Mentee 5" />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-white">Mentee Five</h3>
              <button 
                onClick={onScrollToCalendar}
                className="bg-purple-200 text-purple-800 text-sm px-4 py-2 rounded-full shadow-md mt-2 hover:bg-purple-300"
              >
                Contact
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Add PropTypes to validate props
Services.propTypes = {
  onScrollToPhase: PropTypes.func.isRequired, // Require onScrollToPhase as a function
  onScrollToCalendar: PropTypes.func.isRequired, // Require onScrollToCalendar as a function
};

export default Services;

