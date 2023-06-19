import { useState } from 'react';
import styles from './App.module.css';
import Input from './components/Input';
import uuid from 'react-uuid';
import List from './components/List';
import { InitialList} from './data/InitialList'; 

function App() {
  const [list, setList] = useState(InitialList);
  const [text, setText] = useState('');

  const addOnList = () => {
    setList(l => [...l , {name: text, todo: false, id:uuid()}] );
    setText('');
  }

  const changeText = (e) => {
    setText(e.target.value);
  }

  const changeCheckedTodo = (e) => {
    console.log(e.target.id);
    setList( l => l.map( itemList => {
      if (itemList.id === e.target.id) {
        return {...itemList , todo:!itemList.todo};
      }
      return itemList;
    } ) );
  }

  return (
    <div className={styles.app}>
      <Input onClick={addOnList} onChange={changeText} text={text}/>
      <List list={list} onClick={changeCheckedTodo} />
      
    </div>
  );
}

export default App;
