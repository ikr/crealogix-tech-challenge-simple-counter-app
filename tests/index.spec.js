import assert from 'assert'
import index from '../src/index.js'

describe('app index', () => {
    it('renders the H1', () => {
        assert(index)
        assert(global.document.querySelector('#main h1'))
    })
})
