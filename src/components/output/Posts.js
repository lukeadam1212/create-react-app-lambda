import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  

    console.log('I was clicked');

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='posts-output'>
            <h3>Posts</h3>
            <h1>&#8659;</h1>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                        posts.slice(0, 2).map(post => {
                            return (
                                <>
                                <h3>{post.title}</h3>
                                <h5>{post.body}</h5>
                                </>
                            )
                        })
                )
                }
            </div>
        </div>
    )
}

export default Posts;
