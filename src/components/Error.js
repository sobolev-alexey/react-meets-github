import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { styles } from '../styles/Page';

export default class Error extends Component {
    static propTypes = {
        resetErrorMessage: PropTypes.func.isRequired,
        errorMessage: PropTypes.string.isRequired
    }

    render() {
        return (
            <div style={styles.error}>
                <p>{this.props.errorMessage}</p>
                {' '}
                (<Link to={`/`} onClick={e => {this.props.resetErrorMessage()}}>
                    Dismiss
                </Link>)
            </div>
        )
    }
}

// <Error
//     resetErrorMessage={this.props.resetErrorMessage()}
//     errorMessage
// />
