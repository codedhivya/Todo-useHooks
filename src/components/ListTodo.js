import React from 'react'

const ListTodo = ({ todo, deleteTodo, editTodo }) => {

    return (

        <div className='rounded mt-4 p-2 d-flex' style={{ backgroundColor: "lightskyblue" }}>
            <div className='me-auto'>{todo.name}</div>
            <div>
                <i className=" h5 me-2 bi bi-pencil-square" style={{ cursor: "pointer" }} onClick={() => editTodo(todo.id)} ></i>
                <i className="h5 bi bi-trash text-danger" style={{ cursor: "pointer" }} onClick={() => deleteTodo(todo.id)}></i>
            </div>
        </div>
    )
}

export default ListTodo