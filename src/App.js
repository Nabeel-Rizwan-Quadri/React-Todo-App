
import { useState } from 'react';
import './App.css';


function App() {

  // USED STATE SO THAT REAL TIME RENDERING IS POSSIBLE
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState("")
  const [editIndex, setindex] = useState()
  const [isEditMode, setEditMode] = useState(false)

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
    setEditMode(true)
    setInput(todoList[index])
    setindex(index)
    console.log(index)
  }

  const editItem = () =>{
    //1) 
    const tempList = [...todoList]
    tempList[editIndex] = input
    setTodoList(tempList)

    //2) change button
    setEditMode(false)

    //3) set null
    setInput("")

    //4) reset index
    setindex("")
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className="div">
        <input 
          onChange = {(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter an item"/>

        {isEditMode ? 
        <button onClick={editItem}>Edit</button>
        :
        <button onClick={addItem}>ADD</button>
        }
        
        <ol>
          {todoList.map( (item, index) => {
          return <li className={editIndex == index && "color-change"}>
            {item}
          <button onClick={() => deleteItem(index)}>Delete</button>
          <button onClick={() => setEdit(index)}>Edit</button>
          </li>
          })}
        </ol>
        </div>
        
      </header>
    </div>
  );
}

export default App;
