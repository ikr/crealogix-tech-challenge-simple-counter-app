import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import NumberInputPage from './NumberInputPage'

ReactDOM.render(
    <NumberInputPage currentValue="44"/>,
    global.document.getElementById('main')
)
