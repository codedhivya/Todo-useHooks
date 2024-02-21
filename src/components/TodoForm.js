import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [inputval, setInputval] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputval)
            alert("Please provide a new task");
        else
            addTodo(inputval);
        setInputval("")

    }
    return (
        <div>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" value={inputval} placeholder="New Task" onChange={(e) => setInputval(e.target.value)} />
                <button className="btn btn-outline-light" type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm