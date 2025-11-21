import './App.css'
import Navbar from './components/navbar';
import FeedBack from './components/codeReview'

function App() {
  const title = "Code Review Feedback System"
  return (
    <div className="App">
      <Navbar title={title}/>
      <FeedBack />
    </div>
  )
}

export default App
