import React from 'react'
import PropTypes from 'prop-types'
import NumberInputView from './NumberInputView'

class InputController extends React.Component {
    render () {
        const props = {
            currentValue: this.props.currentValue,
            onPlus: () => { this.props.dispatch('PLUS') },
            onMinus: () => { this.props.dispatch('MINUS') }
        }

        return (
            <NumberInputView
                {...props}
                ref={el => { this.view = el }}/>
        )
    }
}

InputController.propTypes = {
    currentValue: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default InputController
