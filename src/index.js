import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <h1>Hello, world!</h1>,
    global.document.getElementById('main')
)
