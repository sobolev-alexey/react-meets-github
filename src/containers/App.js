import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import Search from '../components/Search'
import { resetErrorMessage } from '../actions'
import { styles } from '../styles/Page';

export class App extends Component {
    static propTypes = {
        // Injected by React Redux
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        // Injected by React Router
        children: PropTypes.node
    }

    handleChange = nextValue => {
        browserHistory.push(`/${nextValue}`)
        this.props.resetErrorMessage()
    }

    renderErrorMessage(errorMessage) {
        return (
            <div style={styles.error}>
                <p>{errorMessage}</p>
                {' '}
                (<Link to={`/`} onClick={e => {this.props.resetErrorMessage()}}>
                    Dismiss
                </Link>)
            </div>
        )
    }

    render() {
        const { children, inputValue, errorMessage } = this.props
        return (
            <div className="app">
                <Search value={inputValue} onChange={this.handleChange} />
                { errorMessage ? this.renderErrorMessage(errorMessage) : children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
    resetErrorMessage
})(App)
