import React,{useState} from 'react'
function AddTask({addListsHandler}) {
    let [list,setList]=useState({
        name:"",
        textarea:""
    });
    function handleInput(e){
        const name=e.target.name;
        const value=e.target.value;
        console.log(value);
        setList({...list,[name]:value});
    }
    function addLists(e){
        e.preventDefault();
        if(list.name===""&&list.textarea===""){
            alert("feilds cannot be empty!!!");
            return;
        }
        console.log(list);
        addListsHandler(list);
        setList({
            name:"",
            textarea:""
        })

    }

   
  return (
    <div>
        <div className='addC'>
        <span>Add TODO'S</span>
        <form className='fields' onSubmit={addLists}>
            <label>Title</label>
            <input type="text" placeholder='enter name...' name='name' value={list.name} onChange={handleInput} />
            <label>Notes</label>
            <textarea placeholder='enter notes...' name="textarea" value={list.textarea} onChange={handleInput} />
            <button >Add</button>
        </form>
        </div>
    </div>
  )
}

export default AddTask;