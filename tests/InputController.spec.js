import React from 'react'
import assert from 'assert'
import TU from 'react-dom/test-utils'
import sinon from 'sinon'
import InputController from '../src/InputController'
import NumberInputView from '../src/NumberInputView'

describe('InputController', () => {
    it('is a function', () => {
        assert.strictEqual(typeof InputController, 'function')
    })
})

describe('InputController rendered', () => {
    let element
    let view
    let dispatch

    beforeEach(() => {
        dispatch = sinon.spy()

        TU.renderIntoDocument(
            <InputController
                dispatch={dispatch}
                currentValue={13}
                ref={el => { element = el }}/>
        )

        view = element.view
    })

    it('aggregates the view of proper class', () => {
        assert(view)
        assert(TU.isCompositeComponentWithType(view, NumberInputView))
    })

    it('passes the current value to the view as a prop', () => {
        assert.strictEqual(view.props.currentValue, 13)
    })

    it('dispatches PLUS on view/onPlus', () => {
        view.props.onPlus()
        assert(dispatch.calledOnceWith('PLUS'))
    })

    it('dispatches MINUS on view/onMinus', () => {
        view.props.onMinus()
        assert(dispatch.calledOnceWith('MINUS'))
    })
})
