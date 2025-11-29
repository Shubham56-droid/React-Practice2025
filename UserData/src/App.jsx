import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm'
import DataBox from './components/DataBox';
import './App.css'
import Data from './assets/data';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([...Data]);
  const [nameData,setNameData] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");

  const handleAddData = () => {
      setData([...data,{name:nameData,age:Number(age),email:email,address:address}])
      setNameData("");
      setAddress("");
      setAge("");
      setEmail("");
  }

  return (
    <>
    <UserForm nameData={nameData} setNameData={setNameData} age={age} setAge={setAge} email={email} setEmail={setEmail} address={address} setAddress={setAddress} handleAddData={handleAddData}/>
    <DataBox data={data}/>
    </>
  )
}

export default App
