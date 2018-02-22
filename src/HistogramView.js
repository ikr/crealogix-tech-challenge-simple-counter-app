import React from 'react'
import PropTypes from 'prop-types'

function repeat (times, what) {
    let result = ''
    let i = 0

    for (; i < times; ++i) {
        result += what
    }

    return result
}

function Row ({value}) {
    return (
        <tr>
            <td className='text-right'>{value}</td>
            <td>{repeat(value, '⬛')}</td>
        </tr>
    )
}

Row.propTypes = { value: PropTypes.number.isRequired }

class HistogramView extends React.Component {
    render () {
        return (
            <table className="table">
                <tbody>
                    {this.props.series.map(
                        (x, index) => <Row value={x} key={'r' + index}/>
                    )}
                </tbody>
            </table>
        )
    }
}

HistogramView.propTypes = { series: PropTypes.arrayOf(PropTypes.number) }

export default HistogramView
