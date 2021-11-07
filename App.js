import React,{useState,useEffect} from 'react';
import './App.css';

const quotes = [
  "“Life is what happens when you’re busy making other plans.”",
  "“Get busy living or get busy dying.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
  "“Never let the fear of striking out keep you from playing the game.”",
  "“Money and success don’t change people; they merely amplify what is already there.”"
]

function App() {
  const [quote,setQuote] = useState(quotes[0]);

  function randomizeQuote(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote);
  }

  return <div className="App">
      <h4>{quote}</h4>
      <button onClick={randomizeQuote}>Click Me</button>
  </div>
}

export default App;
