import React, { useReducer, createContext, useEffect } from 'react';
import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import Comments from './components/output/Comments';
import Posts from './components/output/Posts';
import Todos from './components/output/Todos';
export const APIContext = createContext();

const initialState = { API: '' };
const reducer = (state, action) => {
  switch (action.type) {
    case 'POSTS':
      return {...state, API: 'POSTS'}
      
      case 'COMMENTS':
        return {...state, API: 'COMMENTS'}
      
      case 'TODOS':
        return {...state, API: 'TODOS'}
      
    default: return {...state, API: 'Non existent' }
  }
}

const parallaxEffect = () => {
  
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
  }
};

function App() {
  // DOM content loaded

  useEffect(() => {
    parallaxEffect();
    return () => {
    }
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="image-bg">
      </div>
     
      <h1>Homework</h1>
      <div className="three-components">
        <APIContext.Provider value={{ dispatch }}>
          <CompA />
          <CompB />
          <CompC />
        </APIContext.Provider>
      </div>
      <div className="output">
        <h1>Output</h1>
        {state.API === 'POSTS' && (<Posts />)}
        {state.API === 'TODOS' && (<Todos />)}
        {state.API === 'COMMENTS' && (<Comments />)}
      </div>
      <div id="parallax"></div>
    </div>
  );
}



export default App;

