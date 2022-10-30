import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const Click = () => {
  return (
    <div >
      <button onClick={() => alert('button click catched')}>Click me</button>
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<Click />, root );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


