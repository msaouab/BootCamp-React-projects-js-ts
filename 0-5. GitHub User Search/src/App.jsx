import { useState } from 'react'
import './App.css'
import Form from './Form'
import User from './User';

const url_API = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${url_API}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [disabled, setDisabled] = useState(false);

  function  OnSearchChange(event) {
    setDisabled(false)
    setQuery(event.target.value);
  }

  async function  OnSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setDisabled(true)
    setResults(results);
  }

  return (
    <div className="App">
      <h1>Project 5: GitHub User Search</h1>
      <Form
        onChange={OnSearchChange}
        onSubmit={OnSearchSubmit}
        value={query}
        disabled={disabled}
      />
      <h3>Results</h3>
      <section>
        {results.map((user) => (
          <User
            key={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
            username={user.login}
          />
        ))}
      </section>
    </div>
  )
}


export default App
