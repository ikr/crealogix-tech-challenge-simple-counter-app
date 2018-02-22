import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import NumberInputView from './NumberInputView'

ReactDOM.render(
    <NumberInputView
        onPlus={() => 0}
        onMinus={() => 0}
        currentValue={44}/>,
    global.document.getElementById('main')
)
