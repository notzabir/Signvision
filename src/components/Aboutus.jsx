
import BgImg from "../assets/bg.png"
import Spaceship from '../assets/spaceship.png'
import SkyOverlay from '../assets/sky2.png'
import Arcade from '../assets/arcade3.png'

export const Aboutus = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full" id="aboutus">
        {/* top div */}
        <div className="flex justify-center items-center w-full h-full absolute z-20">
           
        </div>
        {/* bottom div */} 
        <div className="relative w-full h-full bg-cover bg-center">
            <img src={BgImg} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={Spaceship} className="animate-slide-and-fade pr-[120px] z-30"/>
              {/* Arcade Machine positioned on the left */}
        <div className="absolute left-0 pl-[50px] z-20">
          <img src={Arcade} className="float-animation" />
        </div>
             
              <div className='pt-[600px] z-20'>
              <button className="mt-8 bg-purple-600 text-white text-xl font-bold py-6 px-8 rounded shadow hover:bg-purple-700"
              onClick={scrollToServices}>
            Next
          </button>
          </div>
            </div>
             {/* Overlay sky image */}
        <img
          src={SkyOverlay}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 10 }} // Ensures the overlay image appears above the background
          alt="Sky Overlay"
        />
            {/* Right-side transparent box */}
        <div
          className="absolute right-8 top-1/4 bg-transparent border border-white rounded-lg p-6 backdrop-blur-md"
          style={{
            width: "33vw",      // Approximately one-third of the screen width
            height: "75vh",      // Approximately three-quarters of the screen height
          }}
        >
          <p className="text-white text-3xl font-gameboy">Aboutus</p>
        </div>
        </div>
    </div>
  )
}

export default Aboutus
