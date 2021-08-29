import React from 'react';
import PostsBtn from './PostsBtn';
import CommentsBtn from './CommentsBtn';
import TodosBtn from './TodosBtn';

const divStyle = {
    height: '10rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
}

const CompC = () => {
    return (
        <div>
            <h2>CompC</h2>
            <div className="three-buttons" style={divStyle}>
                <PostsBtn />
                <CommentsBtn />
                <TodosBtn />
            </div>
        </div>
    )
}

export default CompC
