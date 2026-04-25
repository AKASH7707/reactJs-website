import React from 'react';

const Components = () => {
  return (
    <div
      id="page2"
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-primary-subtle">
      <div className="card shadow-lg p-5 w-75 rounded-4 border-0">
        
        <h1 className="text-center text-primary mb-4">
          React Components
        </h1>

        <p className="fs-5 text-dark">
          Components are the building blocks of a React application.
        </p>

        <h3 className="mt-4 text-success">Types of Components:</h3>
        
        <ul className="list-group list-group-flush mt-3">
          <li className="list-group-item">
            Functional Components
          </li>
          <li className="list-group-item">
            Class Components
          </li>
        </ul>

        <p className="mt-4 fs-5 text-dark">
          Components help in reusability and better code structure.
        </p>

      </div>
    </div>
  );
};

export default Components;