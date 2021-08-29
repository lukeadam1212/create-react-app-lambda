import React, {useContext} from 'react';
import { APIContext } from '../App';
import './PostsBtn.css';

const PostsBtn = () => {
    const context = useContext(APIContext);
    const { dispatch } = context;

    return (
        <button onClick={()=> dispatch({ type: 'POSTS'})} className="btn-neon">
        POSTS
        <svg height="50" width="180">
        <polyline points="0,0 180,0 180,50 0,50 0,00">
        </polyline>
</svg>
</button>
    )
}

export default PostsBtn

