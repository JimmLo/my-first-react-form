
import './App.css';
import { useState } from 'react';


function InputForm({inputName, inputEmail, onNameChange, onEmailChange}) {
  return(
    <form className="input-container">
      <label>Name</label>
      <br></br>
      <input type="text" id="name" value={inputName} onChange={(e) => onNameChange(e.target.value)}></input>
      <br></br>
      <label>Email</label>
      <br></br>
      <input type="text" id="email" value={inputEmail} onChange={(e) => onEmailChange(e.target.value)}></input>
    </form>
  )
}

function Submit({handleSubmit,data}) {
  return(
    <div className="submit-wrapper">
      <button type="submit" value="submit" onClick={handleSubmit}>Submit</button>
      <div className="info-print">
        <p>{data.inputName}</p>
        <p>{data.inputEmail}</p>
      </div>
    </div>
  )
}

function App() {
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [data, setData] = useState({inputName: '', inputEmail:''})

  function handleSubmit() {
    setData({inputName, inputEmail})
  }
  return(
    <div className="container">
    <h1>My First React Form</h1>
    <InputForm
      inputName={inputName}
      inputEmail={inputEmail}
      onNameChange={setInputName}
      onEmailChange={setInputEmail}
    />
    <Submit
      handleSubmit={handleSubmit}
      data={data}
     />
    </div>
  )
}
export default App
