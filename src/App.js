import axios from 'axios';
import {useState} from 'react'
import './App.css';

function App() {
  const [link,setLink]=useState("")
  const [res,setRes]=useState("")

  const handleSubmit= (e)=>{
    e.preventDefault();
    const submi={"body":link}
    axios.post('http://127.0.0.1:5000/predict',submi)
    .then(
      response=>{setRes(response.data['result'],
      alert(response.data['result']))
    setLink("")}
    )
    .catch(
      error=>{alert(error)}
    )
    
  }
  return (
    <div className="App">
      <div className='myele'>
        <div className='Heading'>
          Phishing Link Detection 
        </div>
        <form className='myform' >
          <input type='text' placeholder='Enter the link' value={link} onChange={(e)=>{setLink(e.target.value)}}></input>
          <button onClick={handleSubmit}> Submit</button>
        </form>
        <div className='res'>
          {res}
        </div>
      </div>
    </div>
  );
}

export default App;
