
import Weather from "./components/Weather/Weather.jsx";
import "./App.css"
import AddColor from "./components/colorgame/Addcolor.jsx";
import Bmi from "./components/BMI/Bmi.jsx";

function App() {
  

  return (
    <>
      <div>
           <h1 className='header'>React Mini Apps</h1>
           <div className='apps1'>
            <div className="app"><Bmi/></div>
            <div className="app"><Weather/></div>
            <div className="app"><AddColor/></div>
           </div>
      </div>
       
    </>
  )
}

export default App
