import { useState, useEffect } from 'react'
import './App.css'

function  generateQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandom() {
  return  Math.floor(Math.random() * 100)
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((json) => {
      setQuotes(json);
      setData(json[getRandom()]);
    });
  }, []);

  function  getQuote() {
    setData(generateQuote(quotes));
  }

  return (
    <div className="App">
      <h1>Project 3: Quote Generator</h1>
      <section>
        <button onClick={getQuote}>New Quote</button>
        <h3>
            <p><span>“</span>{data?.text}<span>”</span></p>
        </h3>
        <p className='author'>- {data?.author}</p>
      </section>
    </div>
  )
}

export default App
