import React from 'react'

const Jsx = () => {
  return (
    <div id="page3">
        <h1>JSX in React</h1>
        <p>JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript.</p>

        <h3>Example:</h3>
        <pre>
        const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;
        </pre>

        <h3>Why JSX?</h3>
        <ul>
            <li>Makes code more readable</li>
            <li>Easy to write UI structure</li>
            <li>Combines logic and markup</li>
        </ul>

        <p>JSX is compiled into JavaScript before execution.</p>
    </div>
  )
}

export default Jsx