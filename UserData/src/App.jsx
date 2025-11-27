import { useState } from 'react';
import './App.css';
import Data from './data'
import ItemBox from './components/itemBox';
import SearchBox from './components/SearchBox';
import Mode from './components/Mode';

function App() {

  const [dataArr,setDataArr] = useState(Data);
  const [input,setInput] = useState("");
  const [modeColor,setModeColor] = useState(false);

  const handleSearch = (e) => {
    let value = e.target.value;
    setInput(value);
    const filterArr = Data.filter((e)=>e.name.toLowerCase().includes(value.toLowerCase()));
    setDataArr(filterArr);
  }

  return (
    <div className="mainContainer" style={modeColor?{background:"#222",color:"#fff"}:{background:"#fff",color:"#000"}}>
    <Mode setModeColor={setModeColor}/>
    <h1 className="text-center font-monospace heading">User Data</h1>
    <SearchBox input={input} setInput={setInput} handleSearch={handleSearch}/>
    <ItemBox data={dataArr}/>

    </div>
  )
}

export default App
