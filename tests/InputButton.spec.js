import assert from 'assert'
import React from 'react'
import ReactDOM from 'react-dom'
import TU from 'react-dom/test-utils'
import sinon from 'sinon'
import * as massert from './helpers/massert'
import InputButton from '../src/InputButton'

describe('InputButton', () => {
    it('is a function', () => {
        assert.strictEqual(typeof InputButton, 'function')
    })
})

describe('InputButton rendered', () => {
    let element
    let node
    let spy

    beforeEach(() => {
        spy = sinon.spy()

        TU.renderIntoDocument(
            <InputButton
                text="Y"
                onClick={spy}
                ref={el => { element = el }} />
        )
        node = ReactDOM.findDOMNode(element)
    })

    it('is an HTML button with type "button"', () => {
        assert.strictEqual(node.tagName, 'BUTTON')
        assert.strictEqual(node.getAttribute('type'), 'button')
    })

    it('displays the passed text content', () => {
        massert.contains(node.textContent, 'Y')
    })

    ;['btn', 'btn-lg', 'btn-outline-dark'].forEach(className => {
        it(`has ${className} CSS class`, () => {
            massert.cssClass(node, className)
        })
    })

    it('triggers the callback passed in props when it gets clicked', () => {
        TU.Simulate.click(node)
        assert(spy.calledOnce)
    })
})

describe('Disabled InputButton rendered', () => {
    let element
    let node

    beforeEach(() => {
        TU.renderIntoDocument(
            <InputButton
                text="Y"
                onClick={() => 0}
                disabled={true}
                ref={el => { element = el }} />
        )
        node = ReactDOM.findDOMNode(element)
    })

    it('passes down the "disabled" attribute', () => {
        assert.strictEqual(node.getAttribute('disabled'), '')
    })
})
