import assert from 'assert'
import React from 'react'
import ReactDOM from 'react-dom'
import TU from 'react-dom/test-utils'
import * as massert from './helpers/massert'
import NumberInputPage from '../src/NumberInputPage'

describe('NumberInputPage', () => {
    it('is a function', () => {
        assert.strictEqual(typeof NumberInputPage, 'function')
    })
})

describe('NumberInputPage rendered', () => {
    let element
    let node

    beforeEach(() => {
        TU.renderIntoDocument(
            <NumberInputPage
                ref={el => { element = el }}
                currentValue='12'/>
        )
        node = ReactDOM.findDOMNode(element)
    })

    it('is a div', () => {
        assert.strictEqual(node.tagName, 'DIV')
    })

    it('has the jumbotron CSS class', () => {
        massert.cssClass(node, 'jumbotron')
    })

    describe('H1', () => {
        let h1
        beforeEach(() => { h1 = node.querySelector('h1') })

        it('displays the current number value', () => {
            massert.contains(h1.textContent, '12')
        })

        it('is supposed to be huge due to the display-1 CSS class', () => {
            massert.cssClass(h1, 'display-1')
        })
    })

    it('displays a separator', () => {
        assert(node.querySelector('hr'))
    })
})
