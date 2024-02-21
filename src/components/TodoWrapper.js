import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import ListTodo from './ListTodo'
import EditTodoForm from './EditTodoForm'

function getStoredTodos() {

    let data = JSON.parse(localStorage.getItem("todos"));
    if (data) return data;
    return [];
}

const TodoWrapper = () => {

    const [todos, setTodos] = useState(getStoredTodos())

    const addTodo = (todo) => {

        setTodos([...todos, { name: todo, id: Date.now(), isEditing: false }])

    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    }

    const editTodo = (id) => {

        setTodos(todos.map(item => item.id === id ? { ...item, isEditing: !item.isEditing } : item))

    }
    const editNewTodo = (task, id) => {
        setTodos(todos.map(item => item.id === id ? { ...item, name: task, isEditing: !item.isEditing } : item))

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])


    return (
        <div>
            <div className='container my-5'>
                <div className='mx-auto rounded border p-4' style={{ width: "600px", backgroundColor: "#08618d" }}>
                    <h2 className='text-white text-center mb-5'>TODO APPLICATION</h2>
                    <TodoForm addTodo={addTodo} />
                    {
                        todos.map((todo, index) => (
                            todo.isEditing ? (<EditTodoForm editNewTodo={editNewTodo} todo={todo} />) :
                                (<ListTodo todo={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo} />)
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default TodoWrapper