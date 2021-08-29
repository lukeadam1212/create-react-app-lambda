import React from 'react'
import CompA1a from './CompA1a';
import CompA1b from './CompA1b';


const CompA1 = () => {
    return (
        <div>
            <h3>CompA1</h3>
            <div className="smaller-components">
                <CompA1a />
                <CompA1b />
            </div>
        </div>
    )
}

export default CompA1
