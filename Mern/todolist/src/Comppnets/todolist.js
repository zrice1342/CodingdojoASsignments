import React, { useState } from 'react';


const ToDoList = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    function additem(e){
        e.preventDefault(); 

        setList([...list, {
            text: item,
            completed: false
        }]);
    setItem('')
    }


    function remove(index) {
        setList(list.filter((_item, i) => i !== index));
    }


    function toggleChecked(index) {
        const obj = {
        ...list[index]
        };
    
        obj.completed = !obj.completed;
    
        setList([
        ...list.slice(0, index),
        obj
        ].concat(list.slice(index + 1)));
    }
    return (
        <div>
          {list.map((item, i) => (
            <div key={i}>
              <span style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
              <input
                type="checkbox"
                checked={item.completed}
                onClick={() => toggleChecked(i)}
                readOnly
              />
              <button onClick={() => remove(i)}>Delete</button>
            </div>
          ))}
    
          <form onSubmit={additem}>
            <input
              onChange={e => setItem(e.target.value)}
              value={item}
            />
            <button>Add</button>
        </form>
        </div>
      );
    };




export default ToDoList;