import React, {useContext} from 'react';
import { APIContext } from '../App';
import './CommentsBtn.css';

const CommentsBtn = () => {
    const context = useContext(APIContext);
    const { dispatch } = context;

    return (
        <button onClick={() => dispatch({type: 'COMMENTS'})} className="btn-comments">
        Comments
        <svg height="50" width="180">
        <polyline points="0,0 180,0 180,50 0,50 0,00">
        </polyline>
    </svg>
</button>
    )
}

export default CommentsBtn
