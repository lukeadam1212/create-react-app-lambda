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

const CompB1a1 = () => {
    return (
        <div>
            <h5>CompB1a1</h5>
            <div className="three-buttons" style={divStyle}>
                <PostsBtn />
                <CommentsBtn />
                <TodosBtn />
            </div>
        </div>
    )
}

export default CompB1a1
