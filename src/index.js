import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import NumberInputView from './NumberInputView'
import HistogramView from './HistogramView'
import * as state from './state'

function Output () {
    return (
        <HistogramView
            series={[0, 1, 2, 3, 4, 5, 4, 5, 4, 5, 6, 7, 8, 9]}/>
    )
}

let store = createStore(state.reduce)

function ConnectedInput () {
    const Input = connect(
        (db) => ({
            currentValue: state.currentValue(db)
        }),

        (dispatch) => ({
            onPlus: () => { dispatch({type: 'PLUS'}) },
            onMinus: () => { dispatch({type: 'MINUS'}) }
        })
    )(NumberInputView)

    return <Input store={store}/>
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

                <Route exact path='/' component={ConnectedInput} />
                <Route path='/output' component={Output} />
            </div>
        </Router>
    )
}

ReactDOM.render(
    <Layout/>,
    global.document.getElementById('main')
)
