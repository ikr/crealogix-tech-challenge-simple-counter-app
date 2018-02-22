import React from 'react'
import PropTypes from 'prop-types'

class NumberInputPage extends React.Component {
    render () {
        return (
            <div className='jumbotron'>
                <h1>{this.props.currentValue}</h1>
            </div>
        )
    }
}

NumberInputPage.propTypes = {
    currentValue: PropTypes.number.isRequired
}

export default NumberInputPage
