import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import HistogramView from './HistogramView'

ReactDOM.render(
    <HistogramView
        series={[0, 1, 2, 3, 4, 5, 4, 5, 4, 5, 6, 7, 8, 9]}/>,
    global.document.getElementById('main')
)
