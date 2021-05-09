import './App.css';
import React, {useState} from 'react'
import Input from './components/input'
import List from './components/list'
function App() {
  const [todo, setTodo] = useState([])
  function getList(params){
    console.log('app', params)
    setTodo([...todo, params])
    console.log('todo',todo)
  }
  return (
    <div className="App">
      <h1>Todo</h1>
      <Input callback={getList}/>
      <List data = {todo}/>
    </div>
  );
}

export default App;
