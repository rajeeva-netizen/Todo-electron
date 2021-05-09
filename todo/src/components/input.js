import React, {useState} from 'react'
function Input(props){
    const [text, setText] = useState('')
    return(
        <>
            <input type='text' onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <button onClick={()=>{
                props.callback(text)
            }}>Add task</button>
        </>
    )
}

export default Input