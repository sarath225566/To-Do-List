import { useState } from 'react';
import './App.css';

function App() {

  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')

  const addItem = () => {
    setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setTodo(''); // Clear the input field
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addItem} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            return(
              <div className="todo">
          <div className="left">
            <input value={obj.status}
             onChange={(e)=>{
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                    obj2.status=e.target.checked;
                }
                return obj2;
              }))
            }} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
            )
          })
        }

        {toDos.map(obj=>{
          if(obj.status){
            return (
              <h1 style={{color:'red'}}>{obj.text}</h1>
            )
          }
          return null
        })}
        
      </div>
    </div>
  );
}

export default App;
