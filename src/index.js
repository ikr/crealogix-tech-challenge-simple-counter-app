import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {createStore} from 'redux'
import {connect} from 'react-redux'
import NumberInputView from './NumberInputView'
import HistogramView from './HistogramView'
import * as state from './state'

const store = createStore(state.reduce)

function ConnectedInput () {
    const Input = connect(
        db => ({currentValue: state.currentValue(db)}),

        dispatch => ({
            onPlus: () => { dispatch({type: 'PLUS'}) },
            onMinus: () => { dispatch({type: 'MINUS'}) }
        })
    )(NumberInputView)

    return <Input store={store}/>
}

function ConnectedOutput () {
    const Output = connect(db => ({series: state.series(db)}))(HistogramView)
    return <Output store={store}/>
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
                <Route path='/output' component={ConnectedOutput} />
            </div>
        </Router>
    )
}

ReactDOM.render(
    <Layout/>,
    global.document.getElementById('main')
)
