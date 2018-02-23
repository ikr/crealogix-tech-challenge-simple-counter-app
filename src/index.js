import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NumberInputView from './NumberInputView'
import HistogramView from './HistogramView'

function Input () {
    return (
        <NumberInputView
            onPlus={() => 0}
            onMinus={() => 0}
            currentValue={44}/>
    )
}

function Output () {
    return (
        <HistogramView
            series={[0, 1, 2, 3, 4, 5, 4, 5, 4, 5, 6, 7, 8, 9]}/>
    )
}

function Layout () {
    return (
        <Router>
            <div>
                <ul className='nav justify-content-center'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Input</Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link' to='/output'>Output</Link>
                    </li>
                </ul>

                <Route exact path='/' component={Input} />
                <Route path='/output' component={Output} />
            </div>
        </Router>
    )
}

ReactDOM.render(
    <Layout/>,
    global.document.getElementById('main')
)
