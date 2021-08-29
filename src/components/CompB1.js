import React from 'react'
import CompB1a from './CompB1a'

const CompB1 = () => {
    return (
        <div>
            <h3>CompB1</h3>
            <div className="smaller-component">
                <CompB1a />
            </div>
        </div>
    )
}

export default CompB1
