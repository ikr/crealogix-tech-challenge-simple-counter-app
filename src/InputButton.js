import React from 'react'
import PropTypes from 'prop-types'

class InputButton extends React.Component {
    render () {
        return (
            <button
                type='button'
                className='btn btn-lg btn-outline-dark'
                onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}

InputButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

module.exports = InputButton
