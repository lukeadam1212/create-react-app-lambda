import React from 'react';
import CompA1 from './CompA1';
import PostsBtn from './PostsBtn';
import CommentsBtn from './CommentsBtn';
import TodosBtn from './TodosBtn';
// style

const divStyle = {
    height: '10rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
}



const CompA = () => {
    return (
        <div>
            <h2>CompA</h2>
            <div className="threeButtons" style={divStyle}>
                <PostsBtn />
                <CommentsBtn />
                <TodosBtn />
            </div>
            <div className="smaller-component">
                <CompA1 />
            </div>
        </div>
    )
}

export default CompA
