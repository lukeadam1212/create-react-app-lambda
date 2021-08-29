import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Comments = () => {
    
    console.log('I was clicked');

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                setComments(res.data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='comments-output'>
            <h3> COMMENTS</h3>
            <h1>&#8659;</h1>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                        comments.slice(0, 2).map(comment => {
                            return (
                                <>
                                <h3>{comment.email}</h3>
                                <h5>{comment.body}</h5>
                                </>
                            )
                        })
                )
                }
            </div>
        </div>
    )
}

export default Comments
