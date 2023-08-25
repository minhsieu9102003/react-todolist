import List from '@mui/material/List';
import ToDoItem from './ToDoItem';
import { useState } from "react"
import ToDoForm from './ToDoForm';
import { useEffect } from 'react';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) return []
    return data
}
export default function ToDoList() {
    const [todos, setToDo] = useState(getInitialData)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const removeToDo = (id) => {
        setToDo(prevState => {
            return prevState.filter(t => t.id !== id)
        })
    }
    const toggleToDo = (id) => {
        setToDo(prevState => {
            return prevState.map((t) => {
                if (t.id === id) {
                    return { ...t, completed: !t.completed }
                }
                else return t
            }
            )
        })
    }
    const addToDo = (text) => {
        setToDo(prevState => {
            return [...prevState, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (<ToDoItem todo={todo} key={todo.id} remove={removeToDo} toggle={() => toggleToDo(todo.id)} />))}
            <ToDoForm addToDo={addToDo} />

        </List>
    );
}