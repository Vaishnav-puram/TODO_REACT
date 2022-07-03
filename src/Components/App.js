import React ,{useState,useEffect}from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {v4 as uuid} from "uuid";
function App() {
  const Local_Storage_Key="lists";
  let [lists,setLists]=useState([]);
 
  //adding todolits
  const addListsHandler=(list)=>{
    console.log(list);
    setLists([...lists,{id:uuid(),...list}]);

  }

  //removing todolists
  const removeListsHandler=(id)=>{
    let record=lists.filter((items)=>{
      return items.id!==id;
    });
    setLists(record);
  }
 

  //for retrieving data and stay on page 
  useEffect(()=>{
    const retrieveData=JSON.parse(localStorage.getItem(Local_Storage_Key));
    if(retrieveData){
      setLists(retrieveData);
    }  
  },[]);

  //for storing in local storage
  useEffect(()=>{
    localStorage.setItem(Local_Storage_Key,JSON.stringify(lists));
  },[lists]);

  return (
    <div >
      <Header/>
      <AddTask addListsHandler={addListsHandler}/>
      <TaskList lists={lists} getId={removeListsHandler}/>
    </div>
  );
}

export default App;
