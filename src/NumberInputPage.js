import React from 'react'
import PropTypes from 'prop-types'

class NumberInputPage extends React.Component {
    render () {
        return (
            <div className='jumbotron'>
                <h1 className='display-1'>{this.props.currentValue}</h1>
                <hr/>
            </div>
        )
    }
}

NumberInputPage.propTypes = {
    currentValue: PropTypes.number.isRequired
}

export default NumberInputPage
