import React, { useEffect, useRef, useState } from 'react'

const EditTodoForm = ({ editNewTodo, todo }) => {
    const [inputval, setInputval] = useState(todo.name)
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputval)
            alert("Please provide updated task name");
        else
            editNewTodo(inputval, todo.id);
        setInputval("");

    }
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.select();
        }
    }, [])
    return (
        <div className='mt-4'>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input ref={inputRef} className="form-control me-2" value={inputval} placeholder="Update Task" onChange={(e) => setInputval(e.target.value)} />
                <button className="btn btn-outline-light" type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditTodoForm