import assert from 'assert'
import * as state from '../src/state'

describe('state', () => {
    describe('initial', () => {
        it('is a series array containing just one zero', () => {
            assert.deepEqual(state.initial(), {series: [0]})
        })
    })

    describe('reduce', () => {
        it('returns initial on undefined', () => {
            assert.deepEqual(state.reduce(undefined, ''), state.initial())
        })

        describe('on PLUS', () => {
            it('appends incremented last number to the end of series', () => {
                assert.deepEqual(
                    state.reduce({series: [0, 1, 2]}, {type: 'PLUS'}), {series: [0, 1, 2, 3]})
            })
        })

        describe('on MINUS', () => {
            it('appends decremented last number to the end of series', () => {
                assert.deepEqual(
                    state.reduce({series: [0, 1, 2]}, {type: 'MINUS'}), {series: [0, 1, 2, 1]})
            })

            it('is identical when the last element in series is zero', () => {
                assert.deepEqual(
                    state.reduce({series: [0, 1, 0]}, {type: 'MINUS'}), {series: [0, 1, 0]})
            })
        })
    })

    describe('currentValue', () => {
        it('returns the last element of series', () => {
            assert.strictEqual(state.currentValue({series: [0, 1, 2, 3, 2]}), 2)
        })
    })
})
