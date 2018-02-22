import assert from 'assert'
import React from 'react'
import ReactDOM from 'react-dom'
import TU from 'react-dom/test-utils'
import * as massert from './helpers/massert'
import HistogramView from '../src/HistogramView'

describe('HistogramView', () => {
    it('is a function', () => {
        assert.strictEqual(typeof HistogramView, 'function')
    })
})

describe('NumberInputView rendered for [7, 6, 5]', () => {
    let element
    let node

    beforeEach(() => {
        TU.renderIntoDocument(
            <HistogramView
                series={[7, 6, 5]}
                ref={el => { element = el }}/>
        )

        node = ReactDOM.findDOMNode(element)
    })

    it('is a table', () => {
        assert.strictEqual(node.tagName, 'TABLE')
    })

    it('is of CSS class table', () => {
        massert.cssClass(node, 'table')
    })

    describe('first row', () => {
        let tr
        beforeEach(() => { tr = node.querySelector('tbody tr') })

        it('is present', () => {
            assert(tr)
        })

        describe('first column', () => {
            let td
            beforeEach(() => { td = node.querySelector('td') })

            it('is present', () => {
                assert(td)
            })

            it('contains 7', () => {
                massert.contains(td.textContent, '7')
            })

            it('is right-aligned by declared CSS class', () => {
                massert.cssClass(td, 'text-right')
            })
        })

        describe('second column', () => {
            let td
            beforeEach(() => { td = node.querySelectorAll('td').item(1) })

            it('is present', () => {
                assert(td)
            })

            it('contains ⬛⬛⬛⬛⬛⬛⬛', () => {
                massert.contains(td.textContent, '⬛⬛⬛⬛⬛⬛⬛')
            })
        })
    })
})
