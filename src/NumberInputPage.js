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
                    onClick={this.props.onPlus}
                    ref={el => { this.plusButton = el }}/>

                {' '}

                <InputButton
                    text='−'
                    disabled={this.props.currentValue === 0}
                    onClick={this.props.onMinus}
                    ref={el => { this.minusButton = el }}/>
            </div>
        )
    }
}

NumberInputPage.propTypes = {
    currentValue: PropTypes.number.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired
}

export default NumberInputPage
