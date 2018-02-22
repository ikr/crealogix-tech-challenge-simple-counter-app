import assert from 'assert'
import index from '../src/index.js'

describe('app index', () => {
    it('renders a table', () => {
        assert(index)
        assert(global.document.querySelector('#main table'))
    })
})
