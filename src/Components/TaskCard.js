import React from 'react';
function TaskCard(props) {
    const {id,name,textarea}=props.lists //destructuring
    console.log(props)
    console.log(props.name);
  return (
    <div>
                    <span style={{fontWeight:"bolder"}}>{name}</span><br/>
                    <span style={{display:"flex",justifyContent:"space-between"}}>
                    <span>{textarea}</span>
                    <i className='trash alternate outline icon' style={{color:"red"}} onClick={()=>props.clickHandle(id)}></i>
                    </span>
    </div>
  )
}

export default TaskCard;