import React from 'react'

const History = () => {
  return (
    <div id="page5" className='container bg-info-subtle p-5 mt-3 rounded-4'>
        <h1 className='p-3 display-1 text-center shadow-lg fw-bold'>History of React JS</h1>

        <p className='p-3 fs-3'>React JS was developed by Facebook (now Meta) to improve the performance and scalability of web applications.</p>

        <div className='d-flex gap-5 mx-3'>
            <div className='p-2 shadow-lg rounded fs-4'>
                <h3 >Origin:</h3>
                <p className='bg-info p-2 rounded'>
                    React was created by Jordan Walke, a software engineer at Facebook. 
                    It was first used internally in Facebook's news feed feature.
                </p>
            </div>

            <div className='p-2 shadow-lg rounded fs-4'>
                <h3>Release:</h3>
                <p className='bg-info p-2 rounded'>
                    React was officially released as an open-source JavaScript library in 2013.
                    It quickly gained popularity due to its efficient rendering using the Virtual DOM.
                </p>
            </div>
        </div>

        <h3 className='p-4 fs-1 text-center'>Major Milestones:</h3>
        <ul class="list-group text-center fs-3">
            <li class="list-group-item list-group-item-primary">2013 - React released as open source</li>
            <li class="list-group-item list-group-item-secondary">2015 - React Native introduced for mobile app development</li>
            <li class="list-group-item list-group-item-success">2016 - Introduction of functional components improvements</li>
            <li class="list-group-item list-group-item-danger">2019 - React Hooks introduced</li>
        </ul>

        <h3 className='p-4 fs-1 text-center'>Why React Became Popular:</h3>

        <ul class="list-group text-center fs-3">
            <li class="list-group-item list-group-item-warning">Fast rendering with Virtual DOM</li>
            <li class="list-group-item list-group-item-info">Reusable components</li>
            <li class="list-group-item list-group-item-light">Strong community support</li>
            <li class="list-group-item list-group-item-dark">Backed by a large company (Meta)</li>
        </ul>

    </div>
  )
}

export default History