import { useState } from "react";
import "./colorgame.css"


export default function AddColor() {
  const [color, setColor] = useState("");
  const [colorList, setcolorList] = useState([]);
  const[headercolor, setHeadercolor] = useState("black")
  //const colorList = ["Orange", "blue", "red"];
  const style = {
    backgroundColor: color,
  };
  const Addcolor = ()=>{
    setcolorList([...colorList, color])
    setHeadercolor(color)
    setColor("")
  }
  return (
    <div className="add-color">
        <h1 style={{color:headercolor}}>Color Game</h1>
        <div className="color-add">
         
        <input
        onChange={(event) => setColor(event.target.value)}
        style={style}
        type="text"
        placeholder="Enter a color"
        value={color}
      />
      <button onClick={Addcolor}>
        Add color
      </button>
        </div>

      <div className="final"> 
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      </div>
      
    </div>
  );
}

export function ColorBox({ color }) {
  const style2 = {
    height: "50px",
    width: "100%",
    backgroundColor: color,
    marginTop: "10px",
  };
  return <div style={style2} className="color-box"></div>;
}
