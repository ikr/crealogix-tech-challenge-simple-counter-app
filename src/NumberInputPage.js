import React from 'react'
import PropTypes from 'prop-types'
import InputButton from './InputButton'

class NumberInputPage extends React.Component {
    render () {
        return (
            <div className='jumbotron'>
                <h1 className='display-1'>{this.props.currentValue}</h1>
                <hr/>

                <InputButton
                    text='+'
                    ref={el => { this.plusButton = el }}/>

                {' '}

                <InputButton
                    text='−'
                    disabled={this.props.currentValue === 0}
                    ref={el => { this.minusButton = el }}/>
            </div>
        )
    }
}

NumberInputPage.propTypes = {
    currentValue: PropTypes.number.isRequired
}

export default NumberInputPage
