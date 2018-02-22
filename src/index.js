import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import NumberInputPage from './NumberInputPage'

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <NumberInputPage/>
    </div>,
    global.document.getElementById('main')
)
