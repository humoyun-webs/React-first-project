import { useState } from "react";
import "./App.css";
import img1 from "./images/icon-star.svg"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <div className="container">
        <img src={img1} width="50px" alt="" />
        <h1>How did we do</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nesciunt
          asperiores optio accusamus doloremque non alias autem eveniet sapiente
          esse!
        </p>
        <div className="btns">
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        </div>
        <button className="Submit">Submit</button>
      </div>
      </div>
    </div>
  );
}

const btn1 = document.querySelectorAll(".btn")

btn1.addEventListener("click",(e)=>{
e.target.classList.toogle(".orange")
})

export default App;
