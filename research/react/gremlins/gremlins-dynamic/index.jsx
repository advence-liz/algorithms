import React from 'react'
import ReactDOM from 'react-dom'
import './monkeyHook'
import App from './gremlins'
ReactDOM.render(<App />, document.getElementById('root'))
console.log(process.env.NODE_ENV)
