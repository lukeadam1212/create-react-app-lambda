import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
    
    console.log('I was clicked');

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setTodos(res.data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='posts-output'>
            <h3>Todos</h3>
            <h1>&#8659;</h1>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                        todos.slice(0, 2).map(todo => {
                            return (
                                <>
                                <h3>{todo.title}</h3>
                                <h5>{todo.completed}</h5>
                                </>
                            )
                        })
                )
                }
            </div>
        </div>
    )
}

export default Todos
