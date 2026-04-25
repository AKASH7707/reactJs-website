import React from 'react'

const Home = () => {
  return (
    <div id="page1" className='container'>
        <h1 className='p-3 text-center text-info display-3 fw-bold'>Introduction to React JS</h1>
        <div className='mt-4 shadow-lg'>
            <img id='homeImg' src="https://ckl-website-static.s3.amazonaws.com/wp-content/uploads/2017/07/Banner_css.png" />
            <p className='p-4 fs-5 text-center'>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library specifically designed for building interactive and dynamic user interfaces (UIs). Developed by Meta (formerly Facebook), it is widely used to create single-page applications (SPAs) where data changes frequently without requiring a full page reload.</p>
        </div>
        
        
        <h3 className='p-2 fs-1 text-info'>Key Features:</h3>

        <div class="row">
            <div class="col-sm-3 mb-3 mb-sm-0">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Component-Based Architecture</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Virtual DOM for fast updates</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Reusable UI components</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Strong community support</h5>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home