import React from 'react';
import CompB1 from './CompB1';
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

const CompB = () => {
    return (
        <div>
            <h2>CompB</h2>
            <div className="three-buttons" style={divStyle}>
                <PostsBtn />
                <CommentsBtn />
                <TodosBtn />
            </div>
            <div className="smaller-component">
                <CompB1 />
            </div>
        </div>
    )
}

export default CompB
