import React from 'react'
import { useState } from "react";
import "./bmi.css";

const Bmi = () => {
    const [height, setHeight] = useState();
    const [weight, setweight] = useState();
    return (
      <div className="bmi">
        <h1>BMI calculator</h1>
        <div className='getvalues'>
        <div className="Height">
          <span className='dimensions'> Height:</span>
          <input
            type="number"
            placeholder="Enter height in cm"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          />
        </div>
        <div className="Weight">
          <span className='dimensions'>Weight:</span>
          <input
            type="number"
            placeholder="Enter weight in kgs"
            onChange={(e) => setweight(e.target.value)}
            value={weight}
          />
        </div>
        </div>
        
  
        <Calcfinal ht={height} wt={weight} />
      </div>
    );
  }
  function Calcfinal({ ht, wt }) {
    const [bmi, setBmi] = useState("");
    const [msg, setMsg] = useState("");
    const [status, setStatus] = useState("");
  
    const reload = () => {
      window.location.reload();
    };
  
    function calcbmi() {
      let bmic = 0
      if (ht > 0 && wt > 0) {
        let heightInMeters = ht / 100;
        bmic = wt / (heightInMeters * heightInMeters);
        setBmi(bmic.toFixed(2));
        setMsg("");
        if (bmic <= 18.5) {
          setStatus("Under-weight");
        } else if (bmic <= 24.9 && bmic >= 18.5) {
          setStatus("Normal-weight");
        } else if (bmic <= 29.9 && bmic >= 25.0) {
          setStatus("Over-weight");
        } else if (bmic > 30.0) {
          setStatus("Obese");
        }
      } else {
        setMsg("Please enter your height and weight");
        setStatus("");
        setBmi("");
      }
    }
    return (
      <div className="bottom">
        <p className='alert-msg'>{msg}</p>
        <div className="btn">
          <button onClick={calcbmi}>calculate</button>
          <button onClick={reload}>Reload</button>
        </div>
  
        <div className="result">
          <div className='res'>
          <p>BMI:</p>
          <span>{bmi}</span>
          </div>
          <div className='res'>
          <p>Status:</p>
          <span> {status} </span>
          </div>
          
        </div>
      </div>
    )
}

export default Bmi
