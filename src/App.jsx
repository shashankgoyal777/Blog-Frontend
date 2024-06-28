import { useState,useEffect } from "react";

import "./style.css";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(name)
    setName("");
    setEmail("");
    setMessage("");

    fetch("https://blog-backend-klhp.onrender.com/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,

        message: message,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });

    //To getData from server :)

    //   fetch('https://blog-backend-klhp.onrender.com/')
    //   .then((response)=>response.json())
    //   .then((result)=>{
    //     console.log(result)
    //   })
  }
  
 
  return (
    <>
      <form onSubmit={handleSubmit} className="border-2 border-black w-[80%]">
        <label htmlFor="">Name</label>
        <input
        className="border-2 border-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        {/* <label htmlFor="">Email</label> */}

        <label htmlFor="">Message</label>
        <textarea
         className="border-2 border-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <br />
        <input type="submit" />
      </form>

      <a href="/showData">
        <button>Show Data</button>
      </a>
     
    </>
  );
}

export default App;
