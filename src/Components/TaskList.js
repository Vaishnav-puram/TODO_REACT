import React from 'react'
import TaskCard from './TaskCard'
function TaskList(props) {
    const deleteHandler=(id)=>{
        props.getId(id);
    };
    let Arr=props.lists.map((ele)=>{
        return(
           <TaskCard lists={ele} clickHandle={deleteHandler} key={ele.id}/>
        )
    })
  return (
    <div className="cl">
        <span>Todo Lists</span>
        <section className='todolists'>
            {Arr}
        </section>
    </div>
  )
}

export default TaskList;