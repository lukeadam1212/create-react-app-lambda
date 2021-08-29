import React, {useContext} from 'react';
import { APIContext } from '../App';
import './TodosBtn.css';

const TodosBtn = () => {
    const context = useContext(APIContext);
    const { dispatch } = context;

    return (
        <button  onClick={() => dispatch({type: 'TODOS'})}  className="btn-todos">
        Todos
        <svg height="50" width="180">
        <polyline points="0,0 180,0 180,50 0,50 0,00">
        </polyline>
  </svg>
</button>
    )
}

export default TodosBtn
