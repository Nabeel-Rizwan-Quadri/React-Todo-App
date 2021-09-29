
import { useState } from 'react';
import './App.css';


function App() {

  // USED STATE SO THAT REAL TIME RENDERING IS POSSIBLE
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState("")
  const [screen, setScreen] = useState("add")
  const [place_holder, setPlace_holder] = useState()

  // USED TO ADD ITEM IN TODO
  const addItem = () => {

    // THE VALUE THAT IS APPENDED IN ARRAY
    console.log(input)

    // CREATED COPY OF LIST SO THAT...
    // USED ... SO THAT REFERANCE IS NOT COPIED RATHER THE ENTIRE LIST IT SELF
    const tempList = [...todoList]
    tempList.push(input)
    setTodoList(tempList)
    setInput("")
  }

  const deleteItem = (index) =>{

    // INDEX OF DELETE BUTTON ITEM
    console.log(index)

    // CREATED COPY OF LIST SO THAT...
    // USED ... SO THAT REFERANCE IS NOT COPIED RATHER THE ENTIRE LIST IT SELF
    const tempList = [...todoList]
    tempList.splice(index, 1)
    setTodoList(tempList)
  }

  const setEdit = (index) =>{
    setScreen("edit")
    
    setInput(todoList[index])
    setPlace_holder(index)
    console.log(index)

  }

  const setAdd = () =>{
    setScreen("add")
  }

  const editItem = () =>{
    
    const tempList = [...todoList]
    console.log(place_holder)
    tempList.splice(place_holder, 1, input)
    setTodoList(tempList)
  }

  return (
    <div className="App">
      <header className="App-header">

      {screen === "add" &&
        <div>
        <input 
          onChange = {(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter an item"/>
        <button onClick={addItem}>ADD</button>
        
        <ol>
          {todoList.map( (item, index) => {
          return <li>
            {item}
          <button onClick={() => deleteItem(index)}>Delete</button>
          <button onClick={() => setEdit(index)}>Edit</button>
          </li>
          })}
        </ol>
        </div>
        }

        {screen === "edit" && <div>
        <input 
          onChange = {(e) => setInput(e.target.value)}
          value={input}
          />
        <button onClick={editItem}>EDIT</button>
        <button onClick={setAdd}>ADD</button>
        
        <ol>
          {todoList.map( (item, index) => {
          return <li>
            {item}
          <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
          })}
        </ol>
        </div>}

      </header>
    </div>
  );
}

export default App;
