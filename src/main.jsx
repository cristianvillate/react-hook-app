import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { Padre } from './07-tarea-memo/Padre';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
// import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
//  </React.StrictMode>
)

