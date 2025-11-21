import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const handleOnClick = (e) => {
    e.preventDefault();
    if(name.trim()=="" && email.trim()=="" && message.trim()==""){
      setError("All Fields Are Required");
    }else{
      setData({name,email,message})
      setError("")
      setName("");
      setEmail("");
      setMessage("")
    }
  };

  return (
    <div className="container mt-5 w-75">
      <h1
        className="text-success text-center mb-3"
        style={{
          fontFamily: "monospace",
          fontSize: "70px",
          fontWeight: "bold",
        }}
      >
        Contact Form
      </h1>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleOnClick}>
          Send Message
        </button>
      </form>

      {error && (
        <p className="error mt-4 text-warning bg-dark p-2 rounded-3 text-center user-select-none fs-5">
          {error}
        </p>
      )}

      {data && (
        <div className="container mt-4 bg-dark p-3 rounded-2 text-white">
          <p id="name">Name : {data.name}</p>
          <p id="email">Email : {data.email}</p>
          <p id="message">Message : {data.message}</p>
        </div>
      )}


    </div>
  );
}

export default App;
