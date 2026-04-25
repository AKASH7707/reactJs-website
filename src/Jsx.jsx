import React from 'react';

const Jsx = () => {
  return (
    <div 
      id="page3" 
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark text-light"
    >
      <div className="card shadow-lg p-4 w-75 bg-secondary text-light rounded-4">
        
        <h1 className="text-center mb-4">JSX in React</h1>
        
        <p className="fs-5">
          JSX stands for <strong>JavaScript XML</strong>. It allows us to write HTML inside JavaScript.
        </p>

        <h3 className="mt-4">Example:</h3>
        <pre className="bg-black text-info p-3 rounded">
{`const element = <h1>Hello, React!</h1>;`}
        </pre>

        <h3 className="mt-4">Why JSX?</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-secondary text-light">Makes code more readable</li>
          <li className="list-group-item bg-secondary text-light">Easy to write UI structure</li>
          <li className="list-group-item bg-secondary text-light">Combines logic and markup</li>
        </ul>

        <p className="mt-4 fs-5">
          JSX is compiled into JavaScript before execution.
        </p>

      </div>
    </div>
  );
};

export default Jsx;