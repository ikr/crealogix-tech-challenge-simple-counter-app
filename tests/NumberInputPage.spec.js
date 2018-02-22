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
        assert(node)
        assert.strictEqual(node.tagName, 'DIV')
    })

    it('has the jumbotron CSS class', () => {
        massert.cssClass(node, 'jumbotron')
    })

    it('displays the current number value in an H1', () => {
        massert.contains(node.querySelector('h1').textContent, '12')
    })
})
