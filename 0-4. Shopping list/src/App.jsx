import { useState } from 'react'
import Item from './Item'
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  function  onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item
    const newItem = [...items, input.value];
    setItems(newItem)
    form.reset();
  }

  function  onRemoveItem(itemToRemove) {
    const newItem = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItem);
  }

  return (
    <div className="App">
      <h1>Project 4: Shopping List</h1>
      <section>
        <h3>Items To Buy</h3>
        <form onSubmit={onSubmit}>
          <input
            placeholder='Add a new item'
            autoComplete='off'
            required
            type="text"
            name="item"
            id=""
          />
          <button className='add'>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
