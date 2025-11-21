import './App.css'
import Slide from './component/Slide';

function App() {
  const data = [
  {
    title: "Welcome to Our Presentation",
    text: "Get ready to explore key insights and ideas that shape our project."
  },
  {
    title: "About the Project",
    text: "This project focuses on creating efficient, user-friendly web applications using modern technologies."
  },
  {
    title: "Problem Statement",
    text: "Many platforms struggle with performance and user engagement due to outdated design and tech stacks."
  },
  {
    title: "Our Solution",
    text: "We provide a scalable and responsive web solution that enhances performance and user experience."
  },
  {
    title: "Technologies Used",
    text: "React, Node.js, Express, and MongoDB form the backbone of our development environment."
  },
  {
    title: "Conclusion & Future Scope",
    text: "We aim to expand our project with AI-driven features and improved accessibility for all users."
  }
];

  return (
    <div>
      <Slide slides={data}/>
    </div>
  )
}

export default App
